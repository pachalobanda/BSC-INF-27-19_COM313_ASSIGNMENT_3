import {
  Button,
  Checkbox,
  TextField,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { alpha, styled, createTheme } from "@mui/material/styles";
import { grey, green } from "@mui/material/colors";

import Login from "@mui/icons-material/Login";
import Google from "./assets/Google";

import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//importing axios for communicating with backend
import axios from "axios";

//overriding mui Textfield component to custome css
const CssTextField = styled(TextField)({
  "& input": {
    color: "#ffffff",
  },
  "& label": {
    color: "grey",
  },
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    color: "#ffffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "1px",
      color: "#ffffff",

      borderColor: "grey",
    },
    root: { color: "#ffffff" },
    "&:hover fieldset": {
      borderWidth: "2px",
      color: "#ffffff",

      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
      color: "#ffffff",
    },
  },
});

const FormCard = () => {
  const rememberMe = false;
  var [formStates, changeStatus] = useState({
    showPass: false,
    emailErr: false,
    passErr: false,
    disableButton: true,
  });
  const { showPass, emailErr, disableButton, passErr } = formStates;
  var [inputValues, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValues;

  const handleClickShowPassword = () => {
    const { showPass } = formStates;
    changeStatus({ ...formStates, showPass: !showPass });
  };

  const validateForm = () => {
    if (email != "" && password != "") {
      changeStatus({ ...formStates, disableButton: false });
    } else {
      if (!disableButton) {
        changeStatus({ ...formStates, disableButton: true });
      }
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailInput = (event) => {
    validateForm();

    const { email } = inputValues;
    const char = event.target.value;
    setValues({ ...inputValues, email: char });

    // console.log(inputValues.email)
  };
  const handlePasswordInput = (event) => {
    validateForm();
    const { password } = inputValues;

    const char = event.target.value;
    setValues({ ...inputValues, password: char });

    // console.log(inputValues.email)
  };

  const handleOnBlur = (evt) => {
    if (email.length < 0) {
      changeStatus({ ...formStates, emailErr: true });
    }
  };
  const submitForm = async () => {
    await axios.post("http://localhost:9999/login", inputValues);
    console.log("fff");
  };
  return (
    <div className="my-card card-shadow">
      <h2>Login</h2>
      <div>
        <CssTextField
          fullWidth
          label="email*"
          margin="normal"
          value={inputValues.email}
          onChange={handleEmailInput}
          onBlur={handleOnBlur}
          error={emailErr}
          helperText={emailErr ? "Please provide an email address." : ""}
          variant="outlined"
        ></CssTextField>
        <div style={{ marginTop: "10px" }}>
          <CssTextField
            fullWidth
            label="password"
            margin="normal"
            value={inputValues.password}
            onChange={handlePasswordInput}
            variant="outlined"
            type={showPass ? "password" : "text"}
            error={passErr}
            helperText={passErr ? " Please provide a password." : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPass ? (
                      <VisibilityOff
                        sx={{
                          color: "#fff",
                        }}
                      />
                    ) : (
                      <Visibility
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></CssTextField>
        </div>
      </div>
      <div className="my-lg">
        <small style={{ color: green[500] }}>Forgot your password ?</small>
      </div>
      <div className="flex-center mt-lg">
        <div>
           <Button
          variant="contained"
          className="px-lg"
          sx={{
            color: "white",
            backgroundColor: "#546e7a",
            width: "160px",
            height: "36px",
            paddingTop: "0px",
            paddingBottom: "0px",
          }}
          disabled={disableButton}
          onClick={submitForm}
          startIcon={<Login />}
        >
          Log in
        </Button>{" "}
        <div className="">
          <Checkbox
            {...rememberMe}
            sx={{
              color: grey[300],
              "&.Mui-checked": {
                color: green[500],
              },
            }}
          />
          <span>Remember me</span>
        </div>
        </div>
       
      </div>

      <div>
        <div className="my-lg">
          <Divider>or</Divider>
          <div className="text-center my-lg">
            <Button
              style={{ textTransform: "none" }}
              variant="contained"
              startIcon={<Google />}
              color="success"
            >
              Login with google
            </Button>
          </div>
        </div>
        <div className="text-center">
          <small style={{ color: green[500] }}>Not yet a customer?</small>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
