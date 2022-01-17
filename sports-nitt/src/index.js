import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Sportsfete from "./pages/sportfete/Sportsfete";
import ComingSoon from "./pages/ComingSoon";
import Team from "./pages/teamsPage/Team";

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/achievements" component={ComingSoon} />
				<Route path="/blogs" component={ComingSoon} />
				<Route path="/gallery" component={ComingSoon} />
				<Route path="/teams" component={Team} />
				<Route path="/events" component={ComingSoon} />
				<Route path="/sportsfete" component={Sportsfete} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
