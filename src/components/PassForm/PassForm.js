import React, { useState, useContext } from "react";
import "./PassForm.css";
import useForm from "../../hooks/useForm";
import receiptRef from "../../images/receiptRef.png";
import { CurrentPassContext } from "../../contexts/CurrentPassContext";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const PassForm = (props) => {
  const { token } = props;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setCurrentPass } = useContext(CurrentPassContext);

  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    receiptRef: "",
  });

  const handleCreatePass = (receiptRef) => {
    setLoading(true);
    api
      .createPass(receiptRef, token)
      .then((res) => {
        if (res) {
          setCurrentPass(res);
          setLoading(false);
          navigate("/pass");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.error);
        console.log(err.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreatePass(values);
  };

  return (
    <div className="pass-form">
      <h2 className="pass-form__title">Get A Haunts Pass</h2>
      <div className="p-6 space-y-4">
        <p>Redeem your donation receipt to get your Haunts Pass</p>
        <p>
          One haunts pass will cover multiple people, but the donation amount
          must be at least $20 per household. Enter your receipt reference
          number from your donation confirmation email below.
        </p>
      </div>
      <form className="space-y-4 max-w-lg">
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
        {error && (
          <div className="pass-error">
            <p>{error}</p>
          </div>
        )}
        <div>
          <button
            type="button"
            className={`w-full btn ${loading ? "btn-disabled" : "btn-primary"}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
      <img src={receiptRef} alt="receipt reference" className="receiptRef" />
    </div>
  );
};

export default PassForm;
