import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  nextPage: "",
  queryFilterData: "",
  urlFetchingData: "",
  isFetching: false,
};

const projectsStateSlice = createSlice({
  name: "projectsStateSlice",
  initialState: initialState,
  reducers: {
    fetchingProjects: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    firstFetchedProjects: (state, action) => {
      return {
        ...state,
        isFetching: false,
        projects: action.payload.projects,
        nextPage: action.payload.nextPage,
        //   homeData: action.payload.homeData,
        queryFilterData: action.payload.queryFilterData
          ? action.payload.queryFilterData
          : "",
      };
    },
    fetchMoreProjects: (state, action) => {
      return {
        ...state,
        isFetching: false,
        projects: [...state.projects, ...action.payload.projects],
        nextPage: action.payload.nextPage,
        //   homeData: [...action.payload.homeData],
      };
    },
    endFoFetchingProjects: (state) => {
      return {
        ...state,
        isFetching: false,
      };
    },
    resetProjectsState: (state) => {
      return initialState;
    },
  },
});

export const {
  fetchingProjects,
  firstFetchedProjects,
  fetchMoreProjects,
  endFoFetchingProjects,
  resetProjectsState,
} = projectsStateSlice.actions;

export default projectsStateSlice.reducer;
