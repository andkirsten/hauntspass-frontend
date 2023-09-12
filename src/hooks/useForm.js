import { useState } from "react";

const useForm = (inputValues) => {
  const [values, setValues] = useState(inputValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return { values, handleChange };
};

export default useForm;
