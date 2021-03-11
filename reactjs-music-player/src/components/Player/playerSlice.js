import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	current: {},
	listSongs: [],
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		setCurrentSong: (state, song) => {
			state.current = song;
			state.listSongs.push(song);
		},
	},
});

export const { setCurrentSong } = playerSlice.actions;
export default playerSlice.reducer;
