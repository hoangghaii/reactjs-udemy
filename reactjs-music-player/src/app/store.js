import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../components/Player/playerSlice";

const rootReducer = {
	player: playerSlice,
};

export default configureStore({
	reducer: rootReducer,
});
