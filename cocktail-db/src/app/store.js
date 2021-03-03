import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/Slider/sliderSlice";

const rootReducer = {
	slider: sliderReducer,
};

export default configureStore({
	reducer: rootReducer,
});
