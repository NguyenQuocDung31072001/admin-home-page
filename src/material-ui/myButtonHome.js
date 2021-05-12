import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtonsHome() {
  const classes = useStyles();
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    history.replace("/login");
  };

  return (
    <div className={classes.root}>
      <h1>welcome home page</h1>
      <p>email : {localStorage.getItem("email")}</p>
      <p>username: {localStorage.getItem("user")}</p>
      <p>password: {localStorage.getItem("pass")}</p>
      <Button variant="contained" color="primary" onClick={logout}>
        logout
      </Button>
    </div>
  );
}
