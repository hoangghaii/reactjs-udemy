import "./App.css";
import HeaderIndex from "./components/Header/HeaderIndex";
import Banner from "./features/Banner/Banner";
import Product from "./features/Product/Product";
import Slider from "./features/Slider/Slider";

function App() {
	return (
		<div className="flex" id="dribbleShot">
			<div className="main px-16 border-r border-gray-200">
				<HeaderIndex />

				<Banner />

				<Slider />

				<Product />
			</div>
		</div>
	);
}

export default App;
