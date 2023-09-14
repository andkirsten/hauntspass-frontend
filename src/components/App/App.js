import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { registerUser, loginUser, verifyToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const { currentUser, setCurrentUser } = useCurrentUser();

  const navigate = useNavigate();
  // eslint-disable-next-line
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState(null);

  const handleSignup = async (data) => {
    setLoading(true);
    try {
      const userData = await registerUser(data);
      if (userData) {
        handleLogin({ email: userData.email, password: userData.password });
        setError(null);
      } else {
        setError("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  };

  const handleLogin = async (data) => {
    console.log(data);
    setLoading(true);

    try {
      const loggedInData = await loginUser(data);
      console.log(loggedInData);
      setCurrentUser(loggedInData.data.user);
      setToken(loggedInData.token);
      localStorage.setItem("authToken", loggedInData.token);
      setIsLogged(true);
      navigate("/pass");
      setLoading(false);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    setIsLogged(false);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      verifyToken(token)
        .then((res) => {
          console.log(res);
          setToken(token);
          setCurrentUser({
            data: { name: res.name, email: res.email, id: res._id },
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
  }, [setCurrentUser]);

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
