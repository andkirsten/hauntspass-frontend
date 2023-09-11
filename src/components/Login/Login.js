import React from "react";
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
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
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full btn btn-primary"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
