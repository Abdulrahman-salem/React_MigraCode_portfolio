import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const studentsStateSlice = createSlice({
    name: "studentsStateSlice",
    initialState: initialState,
    reducers: {
        fetchingStudents: (state) => {
            return {
                ...state,
                isFetching: true,
            };
        },
        endFoFetchingStudents: (state) => {
            return {
                ...state,
                isFetching: false,
            };
        },
        resetStudentsState: (state) => {
            return initialState;
        },
    },
});

export const { fetchingStudents, endFoFetchingStudents, resetStudentsState } =
    studentsStateSlice.actions;

export default studentsStateSlice.reducer;
