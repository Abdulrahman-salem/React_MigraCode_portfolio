import React, { useState, useContext } from "react";

const ProjectContext = React.createContext({});

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

    export const ProjectProvider = ({children}) => {
    const [projectData, setProjectData] = useState({
      projects: [],
      nextPage: "",
    });


    
      return (
        // console.log(`ProjectProvider data: ${projectData}`)
        <ProjectContext.Provider value={ {projectData, setProjectData} }>
          {children}
        </ProjectContext.Provider>
      );
    }