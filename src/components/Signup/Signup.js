import React from "react";
import "./Signup.css";
import useForm from "../../hooks/useForm";

const Signup = (props) => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSignup(values);
  };

  return (
    <div className="signup">
      <h2 className="signup__title">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="text-gray-600">
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
            name="password"
            className="w-full input input-bordered"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="signup-error">{props.error}</div>

        <div>
          <button
            type="button"
            className="signup__button w-full btn btn-primary"
            onClick={handleSubmit}
          >
            {props.isLoading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
