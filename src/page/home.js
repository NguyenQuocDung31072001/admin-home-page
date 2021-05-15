// import React from "react"
// import { useHistory } from "react-router-dom"

// function Home(props) {
// 	const history = useHistory()
// 	const logout = () => {
// 		localStorage.removeItem("email")
// 		localStorage.removeItem("user")
// 		localStorage.removeItem("pass")
// 		history.replace("/login")
// 	}
// 	return (
// 		<div>
// 			<h1>welcome home page</h1>
// 			<h2>email : {localStorage.getItem("email")}</h2>
// 			<h2>username: {localStorage.getItem("user")}</h2>
// 			<h2>password: {localStorage.getItem("pass")}</h2>
// 			<button onClick={logout}>logout</button>
// 		</div>
// 	)
// }
// export default Home
import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  return <div>Home Page</div>;
}
export default Home;
