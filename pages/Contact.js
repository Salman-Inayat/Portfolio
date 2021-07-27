import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles/Contact.module.css";
import { useFormControls } from "../components/ContactFormControls";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "subject",
    label: "Subject",
    id: "my-subject",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 8,
  },
];

const Contact = () => {
  const { errors, handleInputValue, handleFormSubmit, formIsValid } =
    useFormControls();

  return (
    <div>
      <Grid container>
        <Grid item md={3} sm={12} xs={12}></Grid>
        <Grid item md={5} sm={12} xs={12}>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <TextField
                  key={index}
                  onBlur={handleInputValue}
                  onChange={handleInputValue}
                  fullWidth
                  name={inputFieldValue.name}
                  label={inputFieldValue.label}
                  error={errors[inputFieldValue.name]}
                  multiline={inputFieldValue.multiline ?? false}
                  rows={inputFieldValue.rows ?? 1}
                  autoComplete="none"
                  // {...(errors[inputFieldValue.name] && {
                  //   error: true,
                  //   helperText: errors[inputFieldValue.name],
                  // })}
                />
              );
            })}
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              disabled={!formIsValid()}
            >
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item md={4} sm={12} xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
