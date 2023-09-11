import React from "react";
import useForm from "../../hooks/useForm";

const Signup = (props) => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    donationId: "",
    numPasses: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSignup(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
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
            <label htmlFor="confirmPassword" className="text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full input input-bordered"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="donationId" className="text-gray-600">
              Donation ID
            </label>
            <input
              type="text"
              id="donationId"
              className="w-full input input-bordered"
              placeholder="Donation ID"
              value={values.donationId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="numPasses" className="text-gray-600">
              Number of Passes
            </label>
            <input
              type="number"
              id="numPasses"
              className="w-full input input-bordered"
              placeholder="Number of Passes"
              value={values.numPasses}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full btn btn-primary"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
