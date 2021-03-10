import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
	name: "slider",
	initialState: {
		current: "",
	},
	reducers: {
		setSliceIndex: (state, strCategory) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes

			state.current = strCategory;
		},
	},
});

// Action creators are generated for each case reducer function
const { actions, reducer } = sliderSlice;
export const { setSliceIndex } = actions;
export default reducer; //default export
