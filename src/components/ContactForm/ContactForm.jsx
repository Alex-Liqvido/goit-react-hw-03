// ContactForm.jsx

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

// Функція для форматування номера з тире
const formatPhoneNumber = (value) => {
  const digitsOnly = value.replace(/[^0-9]/g, "");
  if (digitsOnly.length === 7) {
    return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(
      3,
      5
    )}-${digitsOnly.slice(5)}`;
  }
  return value;
};

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^[\d-\s]{7,}$/,
        "Number must contain exactly 7 digits and can include dashes or spaces"
      )
      .test(
        "is-valid-number",
        "Number must contain exactly 7 digits",
        (value) => {
          const digitCount = value.replace(/[^0-9]/g, "").length;
          return digitCount === 7;
        }
      )
      .required("Required"),
  });

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const formattedNumber = formatPhoneNumber(values.number);
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: formattedNumber,
          };
          addContact(newContact);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="Name of new contact"
                className={styles.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="number">Number</label>
              <Field
                id="number"
                name="number"
                placeholder="Phone Number"
                className={styles.input}
              />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;