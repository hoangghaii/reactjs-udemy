import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./../apis/userApi";

export const register = createAsyncThunk("users/register", async (payload) => {
	//call API to register
	const data = await userApi.register(payload);

	const dataUser = data.data;
	//save data to local storage
	localStorage.setItem("access_token", dataUser.jwt);
	localStorage.setItem("user", JSON.stringify(dataUser.user));

	//return user data
	return dataUser.user;
});

const userSlice = createSlice({
	name: "user",
	initialState: {
		current: {},
		setting: {},
	},
	reducers: {},
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.current = action.payload;
		},
	},
});

const { reducer } = userSlice;
export default reducer; //default export
