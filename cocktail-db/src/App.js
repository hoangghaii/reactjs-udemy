import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HeaderIndex from "./components/Header/HeaderIndex";
import Banner from "./features/Banner/Banner";
import Product from "./features/Product/Product";
import Slider from "./features/Slider/Slider";

function App() {
	return (
		<Fragment>
			<div className="flex" id="dribbleShot">
				<div className="main px-16 border-r border-gray-200">
					<HeaderIndex />

					<Banner />

					<Slider />

					<Product />
				</div>
			</div>

			<ToastContainer
				limit={3}
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>
		</Fragment>
	);
}

export default App;
