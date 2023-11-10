import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    offSet: "",
    queryFilterData: "",
    isFetching: false,
};

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
        firstFetchedStudents: (state, action) => {
            return {
                ...state,
                isFetching: false,
                students: action.payload.students,
                offSet: action.payload.offSet,
                queryFilterData: action.payload.queryFilterData,
            };
        },
        fetchMoreStudents: (state, action) => {
            return {
                ...state,
                isFetching: false,
                students: [...state.students, ...action.payload.students],
                offSet: action.payload.offSet,
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

export const {
    fetchingStudents,
    endFoFetchingStudents,
    resetStudentsState,
    firstFetchedStudents,
    fetchMoreStudents,
} = studentsStateSlice.actions;

export default studentsStateSlice.reducer;
