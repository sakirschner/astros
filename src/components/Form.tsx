import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";

type FormValues = {
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
};

export default function Form() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(newValue);
  };

  return (
    <div className="container form-container">
      <div className="field">
        <label className="label form-label">NAME</label>
        <div className="control">
          <input
            className="input form-field"
            type="text"
            name="name"
            value={formValues.name ?? ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label form-label">EMAIL</label>
        <div className="control">
          <input
            className="input form-field"
            name="email"
            type="email"
            value={formValues.email ?? ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label form-label">SUBJECT</label>
        <div className="control">
          <input
            className="input form-field"
            name="subject"
            value={formValues.subject ?? ""}
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label form-label">MESSAGE</label>
        <div className="control">
          <textarea
            className="textarea form-field"
            name="message"
            value={formValues.message ?? ""}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-danger is-light btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
