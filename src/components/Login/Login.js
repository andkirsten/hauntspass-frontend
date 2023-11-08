import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { loginUser, verifyToken } from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Login(props) {
  const { setToken, setIsLogged } = props;
  const { setCurrentUser } = useContext(CurrentUserContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
        setError(err.error);
      });
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(values);
  };

  return (
    <div className="login bg-slate-200">
      <h2 className="login__title pt-4">Login</h2>
      <form className="login__form space-y-4 px-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full input input-bordered"
            placeholder="Email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-primary">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full input input-bordered"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {error && <div className="error-message">{error}</div>}

        <div>
          <button
            type="submit"
            className={`text-white w-full btn ${
              loading ? "btn-disabled" : "btn-primary"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
      <p className="login__signup pt-1">
        Need an account?{" "}
        <Link className="link" to="/signup">
          Sign up now
        </Link>
      </p>
    </div>
  );
}

export default Login;
