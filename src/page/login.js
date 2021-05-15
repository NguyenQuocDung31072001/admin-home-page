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
