import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Grid } from "@mui/material";
import ElementMainSection from "./components/ElementMainSection";
import ScriptTextCont from "./containers/ScriptTextCont";

function App() {
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <Counter />
		//     <p>
		//       Edit <code>src/App.tsx</code> and save to reload.
		//     </p>
		//     <span>
		//       <span>Learn </span>
		//       <a
		//         className="App-link"
		//         href="https://reactjs.org/"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         React
		//       </a>
		//       <span>, </span>
		//       <a
		//         className="App-link"
		//         href="https://redux.js.org/"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         Redux
		//       </a>
		//       <span>, </span>
		//       <a
		//         className="App-link"
		//         href="https://redux-toolkit.js.org/"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         Redux Toolkit
		//       </a>
		//       ,<span> and </span>
		//       <a
		//         className="App-link"
		//         href="https://react-redux.js.org/"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         React Redux
		//       </a>
		//     </span>
		//   </header>
		// </div>
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<ScriptTextCont />
				</Grid>
				<Grid item xs={8}>
					<ElementMainSection />
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
