import React, { useState } from "react";

function DynamicForm({ onSubmit, fields, textButton }) {
  const [formValues, setFormValues] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formValues[field.name] || ""}
          onChange={handleInputChange}
        />
      ))}
      <button type="submit">{textButton}</button>
    </form>
  );
}

export default DynamicForm;
