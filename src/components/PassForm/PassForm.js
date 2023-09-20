import React from "react";
import "./PassForm.css";
import useForm from "../../hooks/useForm";

const PassForm = (props) => {
  const { values, handleChange } = useForm({
    receiptRef: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleCreatePass(values);
  };

  return (
    <div className="pass-form">
      <h2 className="pass-form__title">Get A Haunts Pass</h2>
      <div className="p-6 space-y-4">
        <p>Redeem your donation receipt to get your Haunts Pass</p>
        <p>
          One haunts pass will cover multiple people, but the donation amount
          must be at least $15 per person in your group/family.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="receiptRef" className="text-gray-600">
            Receipt Reference
          </label>
          <input
            type="text"
            id="receiptRef"
            className="w-full input input-bordered"
            placeholder="Enter Receipt Reference"
            name="receiptRef"
            value={values.receiptRef}
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
