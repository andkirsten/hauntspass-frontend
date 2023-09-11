import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";

import api from "../../utils/api";
import { registerUser, loginUser, verifyToken } from "../../utils/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState(null);

  const handleRegister = async (registerData) => {
    try {
      setLoading(true);
      const userData = await registerUser(registerData);
      setCurrentUser(userData.user);
      setToken(userData.token);
      localStorage.setItem("authToken", userData.token);
      api.defaults.headers.common.authorization = `Bearer ${userData.token}`;
      setLoading(false);
      setIsLogged(true);
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  const handleLogin = async (loginData) => {
    try {
      setLoading(true);
      const userData = await loginUser(loginData);
      setCurrentUser(userData.user);
      setToken(userData.token);
      localStorage.setItem("authToken", userData.token);
      api.defaults.headers.common.authorization = `Bearer ${userData.token}`;
      setLoading(false);
      setIsLogged(true);
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    api.defaults.headers.common.authorization = null;
    setIsLogged(false);
  };

  const handleVerify = async () => {
    const userData = await verifyToken();
    setCurrentUser(userData.user);
    setToken(userData.token);
    localStorage.setItem("authToken", userData.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.token}`;
    setIsLogged(true);
  };

  useEffect(() => {
    handleVerify(token)
      .then((res) => {
        setToken(token);
        setCurrentUser(res.user);
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    if (currentUser) {
      api
        .get(`/pass/${currentUser._id}`)
        .then((res) => {
          setPass(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentUser]);

  return (
    <div className="app">
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <Main
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        pass={pass}
        setPass={setPass}
      />
      <Footer />
    </div>
  );
}

export default App;
