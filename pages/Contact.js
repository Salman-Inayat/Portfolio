import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles/Contact.module.css";
import { useFormControls } from "../components/ContactFormControls";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    // margin: "30px 20px",
  },
  button: {
    // marginBottom: theme.spacing(2),
    borderRadius: "5em",
    margin: "10px 10px",
    width: theme.spacing(25),
    border: "1px solid green",
  },
  form_container: {
    padding: theme.spacing(10),
    color: "white",
  },
  textfield: {
    backgroundColor: "#c4b5b5",
    borderRadius: "10px 10px 3px 3px",
    margin: "10px 10px",
  },
  placeholder: {
    color: "white",
    margin: "10px",
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "white",
    },
  },
}));

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
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 8,
  },
];

const Contact = () => {
  const classes = useStyles();
  const { errors, handleInputValue, handleFormSubmit, formIsValid } =
    useFormControls();

  return (
    <Grid container style={{ height: "calc(100vh - 85px)" }}>
      <Grid item md={6} sm={12} xs={12} className={classes.grid}>
        <object
          type="image/svg+xml"
          data="/contact-gif.svg"
          height={400}
          width={400}
        >
          svg-animation
        </object>
      </Grid>
      <Grid item md={6} sm={12} xs={12} className={classes.form_container}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                key={index}
                // onBlur={handleInputValue}
                onChange={handleInputValue}
                fullWidth
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                error={errors[inputFieldValue.name.length > 0]}
                multiline={inputFieldValue.multiline ?? false}
                rows={inputFieldValue.rows ?? 1}
                variant="filled"
                color="secondary"
                InputProps={{
                  classes: { input: classes.input },
                }}
                // InputLabelProps={{
                //   style: {
                //     textOverflow: "ellipsis",
                //     whiteSpace: "nowrap",
                //     overflow: "hidden",
                //     width: "100%",
                //     color: "white",
                //     marginRight: "20px",
                //   },
                // }}
                autoComplete="none"
                className={classes.textfield}
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            );
          })}
          <Button
            variant="outlined"
            onSubmit={handleInputValue}
            type="submit"
            color="primary"
            // disabled={!formIsValid()}
            className={classes.button}
          >
            Send Message
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
