import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const MyForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Це поле обов'язкове для заповнення"),
    email: Yup.string()
      .email("Введіть коректний email")
      .required("Це поле обов'язкове для заповнення"),
    phone: Yup.string()
      .matches(
        /^\d{12}$/,
        "Некоректний формат телефону. Телефон повинен бути довжиною 12 цифр"
      )
      .required("Це поле обов'язкове для заповнення"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box className="formik">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          color="secondary"
          margin="normal"
          id="name"
          name="name"
          label="Ім'я"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          color="secondary"
          margin="normal"
          id="email"
          name="email"
          label="Електронна пошта"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          color="secondary"
          margin="normal"
          id="phone"
          name="phone"
          label="Телефон"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Button
          color="secondary"
          type="submit"
          variant="contained"
        >
          Відправити
        </Button>
      </form>
    </Box>
  );
};

export default MyForm;
