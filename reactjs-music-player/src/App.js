import "./App.css";
import Genres from "./components/Genres/Genres";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Search from "./components/Search/Search";
import SideBar from "./components/SideBar/SideBar";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import TopSongs from "./components/TopSongs/TopSongs";

function App() {
	return (
		<div className="container">
			<SideBar />

			<div className="content">
				<Header />

				<Search />

				<div className="bottom-content">
					<div className="playlist">
						<div className="left-side">
							<TopAlbums />

							<div className="left-side-bottom">
								<Genres />

								<TopSongs />
							</div>
						</div>

						<Player />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
