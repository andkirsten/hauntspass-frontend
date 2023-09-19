import React from "react";
import "./PassForm.css";
import useForm from "../../hooks/useForm";

const PassForm = (props) => {
  const { values, handleChange } = useForm({
    donationId: "",
    passAmt: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegisterPass(values);
  };

  return (
    <div className="pass-form">
      <h2 className="pass-form__title">Get A Haunts Pass</h2>
      <div className="p-6 space-y-4">
        <p>Redeem your donation reciept to get your Haunts Pass</p>
        <p>
          One haunts pass will cover multiple people, but the donation amount
          must be at least $15 per person in your group/family.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="donationId" className="text-gray-600">
            Receipt Reference
          </label>
          <input
            type="text"
            id="donationId"
            className="w-full input input-bordered"
            placeholder="Enter Receipt Reference"
            name="donationId"
            value={values.donationId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="passAmt" className="text-gray-600">
            Number of People
          </label>
          <input
            type="number"
            id="passAmt"
            className="w-full input input-bordered"
            placeholder="Enter Number of People"
            name="passAmt"
            value={values.passAmt}
            onChange={handleChange}
          />
        </div>
        {props.error && (
          <div className="p-6 space-y-4">
            <p>{props.error}</p>
          </div>
        )}
        <div>
          <button
            type="button"
            className="login__button w-full btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassForm;
