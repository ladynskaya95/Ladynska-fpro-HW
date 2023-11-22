import React from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const ContactForm = ({ onSave, onCancel }) => {
  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      username: "",
      phone: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Обов'язкове поле";
      }
      if (!values.phone) {
        errors.phone = "Обов'язкове поле";
      }
      return errors;
    },
    onSubmit: (values) => {
      onSave(values);
      formik.resetForm();
      console.log(values); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Форма додавання контакту</h2>
      <label>
        <TextField
          label="Ім'я"
          variant="filled"
          color="success"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <div>{formik.errors.name}</div>}
      </label>
      <label>
        <TextField
          label="Прізвище"
          variant="filled"
          color="success"
          type="text"
          id="lastName"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </label>
      <label>
        <TextField
          label="Телефон"
          variant="filled"
          color="success"
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone && <div>{formik.errors.phone}</div>}
      </label>
      <Box className="buttons">
        <Button variant="contained" color="success" type="submit">
          Зберегти
        </Button>
        <Button
          variant="contained"
          color="error"
          type="button"
          onClick={onCancel}
        >
          Скасувати
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
