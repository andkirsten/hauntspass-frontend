import { useState } from "react";

export default function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return { values, handleChange, setValues };
}
