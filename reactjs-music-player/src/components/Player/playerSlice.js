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
		},

		setListSong: (state, song) => {
			if (
				state.listSongs &&
				state.listSongs.find((ele) => ele.id === song.payload["id"])
			)
				return;

			state.listSongs.push(song.payload);
		},
	},
});

export const { setCurrentSong, setListSong } = playerSlice.actions;
export default playerSlice.reducer;
