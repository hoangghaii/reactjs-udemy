import { Fragment, useState } from "react";
import Camera from "./camera/camera";
import "./style.js";
import { Footer, GlobalStyle, Preview, Root } from "./style.js";

function App() {
	const [isCameraOpen, setIsCameraOpen] = useState(false);
	const [cardImage, setCardImage] = useState();

	return (
		<Fragment>
			<Root>
				{isCameraOpen && (
					<Camera
						onCapture={(blob) => setCardImage(blob)}
						onClear={() => setCardImage(undefined)}
					/>
				)}

				{cardImage && (
					<div>
						<h2>Preview</h2>
						<Preview
							src={cardImage && URL.createObjectURL(cardImage)}
						/>
					</div>
				)}

				<Footer>
					<button onClick={() => setIsCameraOpen(true)}>
						Open Camera
					</button>
					<button
						onClick={() => {
							setIsCameraOpen(false);
							setCardImage(undefined);
						}}
					>
						Close Camera
					</button>
				</Footer>
			</Root>
			<GlobalStyle />
		</Fragment>
	);
}

export default App;
