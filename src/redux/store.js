import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects";
import studentsReducer from "./students";

const store = configureStore({
    reducer: {
        projectsState : projectsReducer,
        studentsState : studentsReducer,
    },
});

export default store;
