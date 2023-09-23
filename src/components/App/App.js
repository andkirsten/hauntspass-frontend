import { useContext } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPassContext } from "../../contexts/CurrentPassContext";
import { registerUser, loginUser, verifyToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

function App() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { currentPass, setCurrentPass } = useContext(CurrentPassContext);

  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [redemptions, setRedemptions] = useState(null);

  const handleSignup = async (data) => {
    setLoading(true);
    try {
      const res = await registerUser(data);
      if (res) {
        handleLogin({ email: data.email, password: data.password });
        setError(null);
        navigate("/pass");
      } else {
        setError(res.message);
      }
    } catch (err) {
      console.log(err);
      setError(err.validation.body.message);
    }
    setLoading(false);
  };

  const handleLogin = (data) => {
    setLoading(true);
    loginUser(data)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("authToken", res.token);
          verifyToken(res.token).then((res) => {
            setCurrentUser({
              data: {
                name: res.data.user.name,
                email: res.data.user.email,
                id: res.data.user._id,
              },
            });
          });
          setToken(res.token);
          setIsLogged(true);
          setError(null);
          navigate("/pass");
        } else {
          setError(res.message);
        }
      })
      .catch((err) => {
        setError(err.validation.body.message);
      });
    setLoading(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    setIsLogged(false);
    navigate("/");
  };

  /* ---------------------------- for admin feature --------------------------- */
  // const handleCreateEvent = (data) => {
  //   console.log(data);
  //   api
  //     .createEvent(data, token)
  //     .then((res) => {
  //       if (res) {
  //         console.log(res);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleCreatePass = (receiptRef) => {
    setLoading(true);
    api
      .createPass(receiptRef, token)
      .then((res) => {
        if (res) {
          setCurrentPass(res);
          setLoading(false);
          navigate("/pass");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.validation);
      });
  };

  const handleRedemption = (props) => {
    setLoading(true);
    const passId = currentPass.id;
    const rewardId = props;
    const data = { rewardId, passId };
    api
      .createRedemption(data, token)
      .then((res) => {
        if (res) {
          setRedemptions(res);
        }
        setLoading(false);
        document.getElementById("confirm-modal").close();
        document.getElementById("redeem-modal").showModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) {
      const getRedemptions = () => {
        api
          .getRedemptions(token)
          .then((res) => {
            if (res) {
              const redeemedRewardsIds = res.map((reward) => reward.rewardId);
              setRedemptions(redeemedRewardsIds);
            }
          })
          .catch((err) => {});
      };

      function verifyUser() {
        verifyToken(token)
          .then((res) => {
            setToken(token);
            setCurrentUser({
              data: {
                name: res.data.user.name,
                email: res.data.user.email,
                id: res.data.user._id,
              },
            });
            setIsLogged(true);
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          });
      }

      const getPass = () => {
        api
          .getPass(token)
          .then((res) => {
            if (res) {
              setCurrentPass(res);
            }
          })
          .catch((err) => {
            setError(err.error);
          });
      };

      getPass();
      verifyUser();
      getRedemptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    const getRewards = () => {
      api
        .getRewards()
        .then((res) => {
          if (res) {
            setRewards(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getRewards();
  }, []);

  return (
    <div className="app">
      <Header
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        handleLogout={handleLogout}
      />
      <Main
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleSignup={handleSignup}
        handleLogin={handleLogin}
        handleCreatePass={handleCreatePass}
        handleRedemption={handleRedemption}
        redemptions={redemptions}
        rewards={rewards}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        currentPass={currentPass}
        setCurrentPass={setCurrentPass}
      />
      <Footer />
    </div>
  );
}

export default App;
