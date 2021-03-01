import logo from "./logo.svg";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import ListenningCard from "./components/ListenningCard/ListenningCard";
import PlayerIndex from "./components/Player/PlayerIndex";
import ListenningCardCenter from "./components/ListenningCard/ListenningCardCenter/ListenningCardCenter";
// import Player from "./components/Player/Player";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: "#d500f9",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<audio
				id="audio-element"
				autoPlay
				src="https://www.last.fm/music/Imagine+Dragons/_/Believer"
			></audio>
			{/* <Player
			//   currentSongIndex={currentSongIndex}
			//   setCurrentSongIndex={setCurrentSongIndex}
			//   nextSongIndex={nextSongIndex}
			//   songs={songs}
			/> */}
			<ListenningCard />
			{/* <PlayerIndex /> */}
			{/* <ListenningCardCenter /> */}
		</ThemeProvider>
	);
}

export default App;
