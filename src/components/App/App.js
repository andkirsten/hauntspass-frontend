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
  const [events, setEvents] = useState([]);
  const [rewards, setRewards] = useState([]);

  const handleSignup = async (data) => {
    setLoading(true);
    try {
      const res = await registerUser(data);
      if (res) {
        handleLogin({ email: data.email, password: data.password });
        setError(null);
      } else {
        setError(res.message);
      }
    } catch (err) {
      console.log(err);
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
        } else {
          setError(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    navigate("/pass");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    setIsLogged(false);
    navigate("/");
  };

  const handleCreateEvent = (data) => {
    console.log(data);
    api
      .createEvent(data, token)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegisterPass = (props) => {
    const { donationId, passAmt } = props;
    api
      .registerPass(donationId, passAmt, token)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreateReward = (props) => {
    const {
      eventId,
      rewardTitle,
      rewardLocation,
      rewardDescription,
      rewardImageUrl,
      rewardExtras,
      rewardTerms,
    } = props;
    api
      .createReward(
        {
          eventId,
          rewardTitle,
          rewardLocation,
          rewardDescription,
          rewardImageUrl,
          rewardExtras,
          rewardTerms,
        },
        token
      )
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateReward = (props) => {
    const { title, location, description, imageUrl, extras, terms } = props;
    api
      .updateReward(
        title,
        location,
        description,
        imageUrl,
        extras,
        terms,
        token
      )
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRedemption = (props) => {
    console.log(currentPass);
    const { rewardId } = props;
    //get current pass id from currentPass
    api
      .createRedemption(rewardId, { passId: currentPass.id }, token)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //eslint-disable-next-line
  const getRedemption = (props) => {
    const { redemptionId } = props;
    api
      .getRedemption(redemptionId, token)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
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
    } else {
      setIsLogged(false);
    }
  }, [setCurrentUser, setCurrentPass]);

  useEffect(() => {
    if (token) {
      api
        .getEvents(token)
        .then((res) => {
          if (res) {
            setEvents(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      api
        .getRewards(token)
        .then((res) => {
          if (res) {
            setRewards(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

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
        handleCreateEvent={handleCreateEvent}
        handleRegisterPass={handleRegisterPass}
        handleCreateReward={handleCreateReward}
        handleUpdateReward={handleUpdateReward}
        handleRedemption={handleRedemption}
        rewards={rewards}
        events={events}
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
