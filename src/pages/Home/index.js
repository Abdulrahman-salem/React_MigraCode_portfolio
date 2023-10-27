import "./index.scss";
import NavBar from "../../components/NavBar/NavBar";
import Description from "../../components/Description_home/Description_home";
// import ProjectsHome from "../../components/Projects_home/Projects_home";
// import StudentHome from "../../components/Students_home/Student_home";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";

function Home() {
    return (
      <div className="home_page">
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
