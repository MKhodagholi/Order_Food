import React, { useContext } from "react";

import classes from "./Form.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import useInput from "../../hooks/use-Input";
import useHttp from "../../hooks/use-http";
import CartContext from "../../context/Cart-Context";

const Form = (props) => {
  const context = useContext(CartContext);
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => {
    return value.includes("@") && value.length > 1;
  };
  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput(isNotEmpty);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  const formIsValid = usernameIsValid && passwordIsValid && emailIsValid;
  const formReset = () => {
    usernameReset();
    passwordReset();
    emailReset();
  };

  const inputBlur = () => {
    usernameBlurHandler();
    passwordBlurHandler();
    emailBlurHandler();
  };
  const { isLoading, error, sendRequest: sendRequest } = useHttp();
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    inputBlur();
    if (!formIsValid) return;
    sendRequest({
      url: "https://react-edf45-default-rtdb.firebaseio.com/order",
      method: "POST",
      body: { username, email, password },
    });
    console.log(error);
    formReset();
  };

  const errorElement = <p className={classes.error}>Please Fill The Blank</p>;

  const confrimAction = () => {
    if (!formIsValid) return;
    props.onHideCart();
    context.removeAllItem();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <Card className={classes.form}>
        <div className={classes["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {usernameHasError && errorElement}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
          />
          {passwordHasError && errorElement}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
          {emailHasError && errorElement}
        </div>
        <div className={classes["form-action"]}>
          <Button onClick={props.onHideCart}>Close</Button>
          <Button onClick={confrimAction}>Confrim</Button>
        </div>
      </Card>
    </form>
  );
};

export default Form;
