import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const useStudentContext = () => {
  return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);


  return (
    <StudentContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};
