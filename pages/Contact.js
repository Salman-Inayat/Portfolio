import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles/Contact.module.css";
import { useFormControls } from "../components/ContactFormControls";
import { makeStyles } from "@material-ui/core/styles";
import Typer from "../components/Typer";

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
  },
  button: {
    width: theme.spacing(20),
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
    margin: "10px 15px 0px 0px",
    border: "1px solid rgb(225, 181, 11)",
    color: "rgb(225, 181, 11)",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "rgb(225, 181, 11)",
      color: "black",
    },
  },
  form_container: {
    padding: theme.spacing(10),
    color: "white",
  },
  multilineColor: {
    color: "rgb(214, 173, 12)",
    borderColor: "rgb(214, 173, 12) !important",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderRadius: "10px 10px 3px 3px",
    borderColor: "rgb(214, 173, 12) !important",
  },
  cssLabel: {
    color: "rgba(202, 195, 195, 0.87)",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "rgb(214, 173, 12) !important",
    },
  },
  root: {
    backgroundColor: "rgb(83, 86, 91)",
    borderRadius: "10px 10px 3px 3px",
    margin: "10px 0px",
    "& .MuiFormLabel-root": {
      color: "rgb(214, 173, 12)",
    },
  },

  cssFocused: {},
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
                // className={classes.textfield}
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
      <Grid item md={12}>
        <Typer text="/Contact" />
      </Grid>
    </Grid>
  );
};

export default Contact;
