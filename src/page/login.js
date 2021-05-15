import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  OutlinedInput,
  InputLabel,
  makeStyles,
  Theme,
  FormHelperText,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 420,
      margin: `${theme.spacing(0)} auto`,
    },
    card: {
      width: "100%",
      marginTop: theme.spacing(10),
      borderRadius: 16,
      padding: 10,
    },
    loginBtn: {
      fontWeight: 700,
      marginTop: 10,
      textTransform: "none",
      borderRadius: 16,
      backgroundColor: "#2196F3",
      height: 40,
    },
    header: {
      marginTop: theme.spacing(3),
    },
    title: {
      fontWeight: 700,
    },
    label: {
      fontWeight: 700,
      color: "#000000",
      textAlign: "left",
      paddingLeft: 16,
    },
    input: {
      borderRadius: 16,
      marginTop: 4,
      marginBottom: 15,
    },
    otherAction: {
      display: "flex",
      justifyContent: "space-around",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
      fontWeight: 700,
    },
  })
);
export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const onSubmit = () => {
    if (username === "" || password === "") {
      setIsErr(true);
      setHelperText("Vui lòng nhập đầy đủ thông tin");
    } else {
    }
  };
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [helperText, setHelperText] = useState("");
  //   useEffect(() => {
  //     if (user) navigate("/");
  //   }, [user, navigate]);

  const handleKeyUpPassword = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div>
      <form className={classes.container}>
        <Card elevation={4} className={classes.card} raised>
          <CardHeader
            classes={{ root: classes.header, title: classes.title }}
            title="Đăng nhập"
          />
          <CardContent>
            <div>
              <InputLabel className={classes.label}>Tên đăng nhập:</InputLabel>
              <OutlinedInput
                classes={{ root: classes.input }}
                error={isErr}
                id="username"
                type="text"
                margin="dense"
                placeholder="Vd. Admin"
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
                autoFocus
                required
              />
            </div>
            <div>
              <InputLabel className={classes.label}>Mật khẩu:</InputLabel>
              <OutlinedInput
                classes={{ root: classes.input }}
                error={isErr}
                id="password"
                type="password"
                margin="dense"
                placeholder="******************************"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                onKeyUp={handleKeyUpPassword}
              />
            </div>
            <FormHelperText error={isErr}>{helperText}</FormHelperText>
            <Button
              className={classes.loginBtn}
              variant="contained"
              color="primary"
              onClick={onSubmit}
              fullWidth
            >
              Đăng nhập
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
