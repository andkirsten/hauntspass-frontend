import React from "react";
import "./Login.css";
import useForm from "../../hooks/useForm";

const Login = (props) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleLogin(values);
  };

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="text-gray-600">
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
          <label htmlFor="password" className="text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full input input-bordered"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{props.error}</div>
        <div>
          <button
            type="button"
            className="login__button w-full btn btn-primary"
            onClick={handleSubmit}
          >
            {props.isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
