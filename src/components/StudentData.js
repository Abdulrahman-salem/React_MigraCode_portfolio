import React, { useState, useContext } from "react";

const StudentContext = React.createContext();

export const useStudentContext = () => {
  return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
  const [allData, setAllData] = useState({
    students: [],
    offSet: "",
  });
  return (
    <StudentContext.Provider value={{ allData, setAllData }}>
      {children}
    </StudentContext.Provider>
  );
};
