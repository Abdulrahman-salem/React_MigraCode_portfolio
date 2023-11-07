// students
export const URL_STUDENTS = "http://localhost:3001/students";
export const QUERY_TO_FETCH_NEXT_PAGE_STUDENTS = `offset=`;
export const QUERY_FILTER_STUDENTS = `filterBy`;
export const QUERY_FILTER_STUDENTS_BY_A_TO_Z = `a-z`;
export const QUERY_FILTER_STUDENTS_BY_Z_TO_A = `z-a`;
export const URL_FILTER_STUDENT_BY_NAME = `${URL_STUDENTS}?studentFullName=`;

// projects
export const URL_PROJECTS = "http://localhost:3001/projects";
export const QUERY_TO_FETCH_NEXT_PAGE_PROJECTS = `nextpage=`;
export const QUERY_FILTER_PROJECTS = `orderby`;
export const QUERY_FILTER_PROJECTS_BY_A_TO_Z = `a-z`;
export const QUERY_FILTER_PROJECTS_BY_Z_TO_A = `z-a`;
export const QUERY_FILTER_PROJECTS_BY_OLDEST_TO_NEWEST = `date-a-z`;
export const QUERY_FILTER_PROJECTS_BY_NEWEST_TO_OLDEST = `date-z-a`;
