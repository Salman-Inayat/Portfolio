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
    name: "Subject",
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
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
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
                  name={inputFieldValue.name}
                  label={inputFieldValue.label}
                  multiline={inputFieldValue.multiline ?? false}
                  rows={inputFieldValue.rows ?? 1}
                  autoComplete="none"
                  {...(errors[inputFieldValue.name] && {
                    error: true,
                    helperText: errors[inputFieldValue.name],
                  })}
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

            {/* <TextField fullWidth id="standard-basic" label="Name" />
            <TextField fullWidth label="Email" />
            <TextField fullWidth label="Subject" />
            <TextField
              fullWidth
              label="Subject"
              multiline
              variant="outlined"
              rows={8}
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button> */}
            {/* <input
              name="name"
              type="text"
              placeholder="Name*"
              variant="outlined"
              // onChange={handleChange}
              className="contact-form-input"
              style={{ width: "100%" }}
            />
            <input
              name="email"
              placeholder="Email*"
              type="email"
              variant="outlined"
              className="contact-form-input"
              // onChange={handleChange}
            />
            <br />
            <input
              name="subject"
              placeholder="Subject*"
              type="text"
              variant="outlined"
              className="contact-form-input"
              // onChange={handleChange}
              style={{ width: "100%", marginTop: "0px" }}
            />
            <br />
            <textarea
              name="message"
              variant="outlined"
              aria-label="message"
              placeholder="Your Message*"
              rows={10}
              className="message-text"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #cc19ff",
              }}
            />
            <br />
            <button>
              <a
                style={{
                  textDecoration: "none",
                  color: "#800080",
                  textAlign: "center",
                  fontSize: "17px",
                }}
                href="/"
              >
                Contact Us
              </a>
            </button> */}
          </form>
        </Grid>
        <Grid item md={4} sm={12} xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
