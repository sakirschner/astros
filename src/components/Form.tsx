import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "bulma/css/bulma.min.css";

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

  const handleSubmit = async () => {
    if (formValues.email && formValues.name && formValues.message) {
      const params = {
        name: formValues.name,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
      };
      console.log(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        process.env.REACT_APP_USER_ID
      );
      await emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID ?? "",
          process.env.REACT_APP_TEMPLATE_ID ?? "",
          params,
          process.env.REACT_APP_USER_ID ?? ""
        )
        .then(
          (response) => {
            Swal.fire({
              icon: "success",
              title: "MESSAGE SENT",
            });
            setFormValues({
              name: null,
              email: null,
              subject: null,
              message: null,
            });
          },
          (error) => {
            console.error(error.text);
            Swal.fire({
              icon: "error",
              title: "SOMETHING WENT WRONG",
              text: error.text,
            });
          }
        );
    }
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
            required
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
            required
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
            required
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          {formValues.email && formValues.message && formValues.name ? (
            <button
              className="button is-danger is-light btn"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          ) : (
            <button className="button is-danger is-light btn" disabled>
              SUBMIT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
