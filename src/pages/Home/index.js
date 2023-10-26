import "./index.scss";
import NavBar from "../../components/NavBar/NavBar";
import Description from "../../components/Description_home/Description_home";
import ProjectsHome from "../../components/Projects_home/Projects_home";

import StudentsHome2 from "../../components/Students_home2/Students_home2";


function Home() {
    return (
      <div className="home_page">
        {/* <p className="red">Home page</p>
        <p>env: {process.env.REACT_APP_SAME_NUMBER}</p> */}
        <>
          <NavBar />
          <Description />
          <ProjectsHome />
          
          <StudentsHome2 />
        </>
        </div>
    );
}

export default Home;
