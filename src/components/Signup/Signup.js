import React, { useState, useContext } from "react";
import "./Signup.css";
import useForm from "../../hooks/useForm";
import { registerUser, loginUser, verifyToken } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Signup = (props) => {
  const { setToken, setIsLogged } = props;
  const { setCurrentUser } = useContext(CurrentUserContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = async (data) => {
    setLoading(true);
    try {
      const res = await registerUser(data);
      if (res) {
        loginUser({ email: data.email, password: data.password })
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
            console.log(err.message);
            setError(err.message);
          });
      }
    } catch (err) {
      console.log(err);
      setError(err.error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(values);
  };

  return (
    <div className="signup bg-slate-200">
      <h2 className="signup__title pt-4">Sign Up</h2>
      <form className="space-y-4 px-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-primary">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full input input-bordered"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
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
            name="password"
            className="w-full input input-bordered"
            placeholder="Password must be at least 8 characters"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {error && <div className="signup__error">{error}</div>}

        <div>
          <button
            type="submit"
            className={`signup__button w-full btn ${
              loading ? "btn-disabled" : "btn-primary"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
      <p className="signup__login pt-1">
        Already have an account?{" "}
        <Link className="link" to="/login">
          Login Now
        </Link>
      </p>
    </div>
  );
};

export default Signup;
