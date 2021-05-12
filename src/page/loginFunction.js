import { useState } from "react";
import { useHistory } from "react-router-dom";
function LoginFunction(props) {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const history = useHistory();
  function setEmailAccount(e) {
    setEmail(e.target.value);
  }
  function setUsername(e) {
    setUser(e.target.value);
  }
  function setPassword(e) {
    setPass(e.target.value);
  }

  const toHome = () => {
    if (user !== "" && Pass !== "" && email !== null) {
      if (
        email.indexOf("@gmail.com") === email.length - 10 &&
        email.indexOf("@gmail.com") !== -1
      ) {
        localStorage.setItem("email", email);
        localStorage.setItem("user", user);
        localStorage.setItem("pass", Pass);
        history.replace("/home");
      } else {
        setEmail("");
        setUser("");
        setPass("");
      }
    } else {
      setEmail("");
      setUser("");
      setPass("");
    }
  };
  return (
    <div>
      nhập email{" "}
      <input
        type="text"
        value={email}
        onChange={setEmailAccount}
        placeholder="example@gmail.com"
      ></input>
      <br />
      nhập username{" "}
      <input
        type="text"
        value={user}
        onChange={setUsername}
        placeholder="username"
      ></input>
      <br />
      nhập password{" "}
      <input
        type="text"
        value={Pass}
        onChange={setPassword}
        placeholder="password"
      ></input>
      <br />
      <button onClick={toHome}>login</button>
    </div>
  );
}
export default LoginFunction;
