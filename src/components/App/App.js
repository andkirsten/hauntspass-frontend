import { useContext } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPassContext } from "../../contexts/CurrentPassContext";
import { verifyToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

function App() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { currentPass, setCurrentPass } = useContext(CurrentPassContext);

  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [redemptions, setRedemptions] = useState(null);
  const [currentRedemption, setCurrentRedemption] = useState(null);

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

  const handleRedemption = (props) => {
    setLoading(true);
    const passId = currentPass.id;
    const rewardId = props;
    const data = { rewardId, passId };

    api
      .createRedemption(data, token)
      .then((res) => {
        if (res) {
          setCurrentRedemption(res);
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
            console.log(err);
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
        handleRedemption={handleRedemption}
        redemptions={redemptions}
        rewards={rewards}
        loading={loading}
        setLoading={setLoading}
        currentPass={currentPass}
        setCurrentPass={setCurrentPass}
        setToken={setToken}
        setIsLogged={setIsLogged}
        token={token}
        currentRedemption={currentRedemption}
      />
      <Footer />
    </div>
  );
}

export default App;
