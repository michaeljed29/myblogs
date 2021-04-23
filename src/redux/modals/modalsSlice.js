import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	postForm: {
		isOpen: false,
	},
}

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		setIsOpenPostForm: (state, { payload }) => {
			state.postForm.isOpen = payload
		},
	},
})

export const { setIsOpenPostForm } = modalsSlice.actions

export default modalsSlice.reducer
