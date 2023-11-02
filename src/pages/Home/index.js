import "./index.scss";
import NavBar from "../../components/NavBar/NavBar";
import Description from "../../components/Description_home/Description_home";
// import ProjectsHome from "../../components/Projects_home/Projects_home";
// import StudentHome from "../../components/Students_home/Student_home";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";
// import { useLocation } from "react-router-dom";

function Home() {
    // const {state} = useLocation()
    return (
      <div className="home_page">
        {/* {console.log(state)} */}
        {/* <p className="red">Home page</p>
        <p>env: {process.env.REACT_APP_SAME_NUMBER}</p> */}
        <>
          <NavBar />
          <Description />
           <Cards/>
          {/* <Pagination/> */} 
          {/* <StudentHome />
          <ProjectsHome/> */}
          <Footer/>
        </>
        </div>
    );
}

export default Home;
