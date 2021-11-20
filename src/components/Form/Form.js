import React from "react";

import classes from "./Form.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Form = () => {
  return (
    <form>
      <Card className={classes.form}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes["form-action"]}>
          <Button>Submit</Button>
        </div>
      </Card>
    </form>
  );
};

export default Form;
