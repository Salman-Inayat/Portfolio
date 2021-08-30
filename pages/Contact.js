import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles/Contact.module.css";
import { useFormControls } from "../components/ContactFormControls";
import { makeStyles } from "@material-ui/core/styles";
import Typer from "../components/Typer";
import Fade from "react-reveal";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid_container: {
    minWidth: "100%",
    margin: "20px 0px",
    padding: "0px 30px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
    // [theme.breakpoints.up("lg")]: {
    //   height: "95vh",
    //   margin: "50px 0px",
    // },
  },
  button: {
    width: theme.spacing(20),
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
    margin: "10px 15px 0px 0px",
    border: "1px solid rgb(225, 181, 11)",
    color: "rgb(225, 181, 11)",
    fontWeight: "bold",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "rgb(225, 181, 11)",
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      "&:focus": {
        backgroundColor: "rgb(225, 181, 11)",
        color: "black",
      },
    },
    // [theme.breakpoints.up("lg")]: {
    //   width: "250px",
    //   height: " 50px",
    //   fontSize: "1.3rem",
    //   border: "2px solid rgb(225, 181, 11)",
    // },
  },
  form_container: {
    padding: theme.spacing(10),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2.5),
    },
  },
  multilineColor: {
    color: "rgb(214, 173, 12)",
    borderColor: "rgb(214, 173, 12) !important",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderRadius: "10px 10px 3px 3px",
    borderColor: "rgb(214, 173, 12) !important",
    // [theme.breakpoints.up("lg")]: {
    //   borderWidth: "2px",
    // },
  },
  cssLabel: {
    color: "rgba(202, 195, 195, 0.87)",
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "2rem",
    // },
  },
  cssOutlinedInput: {
    color: "rgb(225, 181, 11)",
    "&$cssFocused $notchedOutline": {
      borderColor: "rgb(214, 173, 12) !important",
    },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "2rem",
    // },
  },
  root: {
    backgroundColor: "rgb(83, 86, 91)",
    borderRadius: "10px 10px 3px 3px",
    margin: "10px 0px",
    "& .MuiFormLabel-root": {
      color: "rgb(214, 173, 12)",
    },
    // "&:focus": {},
  },

  cssFocused: { borderRadius: "10px 10px 3px 3px" },
  gif: {
    height: "85%",
    // [theme.breakpoints.up("lg")]: {
    //   height: "120%",
    //   width: "60%",
    // },
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
    <Grid container className={classes.grid_container}>
      <Grid item md={12}>
        <Typer text="Contact" />
      </Grid>
      <Grid item md={6} sm={12} xs={12} className={classes.grid}>
        <object
          type="image/svg+xml"
          data="/contact-gif.svg"
          height={400}
          width={400}
          className={classes.gif}
          alt="contact"
        >
          svg-animation
        </object>
      </Grid>
      <Grid item md={6} sm={12} xs={12} className={classes.form_container}>
        <Fade right>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <TextField
                  key={index}
                  onChange={handleInputValue}
                  fullWidth
                  name={inputFieldValue.name}
                  label={inputFieldValue.label}
                  error={errors[inputFieldValue.name.length > 0]}
                  multiline={inputFieldValue.multiline ?? false}
                  rows={inputFieldValue.rows ?? 1}
                  variant="outlined"
                  className={classes.root}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  autoComplete="none"
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
              className={classes.button}
            >
              Send Message
            </Button>
          </form>
        </Fade>
      </Grid>
      <Grid item md={12}>
        <Typer text="/Contact" />
      </Grid>
    </Grid>
  );
};

export default Contact;
