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
import axios from 'axios'


//overriding mui Textfield component to custome css
const CssTextField = styled(TextField)({
    "& input":{
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
    "root":{    color: "#ffffff",
},
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
  const { showPass, emailErr, disableButton } = formStates;
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
      console.log("haha");
      changeStatus({ ...formStates, disableButton: false });
    } else {
      console.log("kkk");
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

  const submitForm = async () => {
   await axios.post('http://localhost:9999/login',inputValues)
 console.log('fff')
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
          error={false}
          helperText="Incorrect entry."
          variant="outlined"
        ></CssTextField>

        <CssTextField
          fullWidth
          label="password"
          margin="normal"
          value={inputValues.password}
          onChange={handlePasswordInput}
          variant="outlined"
          type={showPass ? "password" : "text"}
          error={false}
          helperText="Incorrect entry."
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
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></CssTextField>
      </div>
      <div className="my-lg">
        <small style={{ color: green[500] }}>Forgot your password ?</small>
      </div>
      <div className="text-center mt-lg">
        <Button
          variant="contained"
          className="px-lg"
          disabled={disableButton}
          onClick={submitForm}
          startIcon={<Login />}
        >
          Log in
        </Button>
      </div>
      <div className="text-center">
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
          <div className="text-center my-lg">
            <Button
            style={{ textTransform: "none" }}
            color="success"
            >
              Not yet customer?
              </Button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
