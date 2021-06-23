import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./../apis/userApi";
import StorageKey from "./../constants/storage-key";

export const register = createAsyncThunk("users/register", async (payload) => {
	//call API to register
	const data = await userApi.register(payload);

	const dataUser = data.data;
	//save data to local storage
	localStorage.setItem(StorageKey.TOKEN, dataUser.jwt);
	localStorage.setItem(StorageKey.USER, JSON.stringify(dataUser.user));

	//return user data
	return dataUser.user;
});

export const login = createAsyncThunk("users/login", async (payload) => {
	//call API to register
	const data = await userApi.login(payload);

	const dataUser = data.data;
	//save data to local storage
	localStorage.setItem(StorageKey.TOKEN, dataUser.jwt);
	localStorage.setItem(StorageKey.USER, JSON.stringify(dataUser.user));

	//return user data
	return dataUser.user;
});

const userSlice = createSlice({
	name: "user",
	initialState: {
		current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
		setting: {},
	},
	reducers: {
		logout(state) {
			//clear local storage
			localStorage.removeItem(StorageKey.USER);
			localStorage.removeItem(StorageKey.TOKEN);

			//clear current state
			state.current = {};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.current = action.payload;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.current = action.payload;
			});
	},
	// extraReducers: {
	// 	[register.fulfilled]: (state, action) => {
	// 		state.current = action.payload;
	// 	},

	// 	[login.fulfilled]: (state, action) => {
	// 		state.current = action.payload;
	// 	},
	// },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; //default export
