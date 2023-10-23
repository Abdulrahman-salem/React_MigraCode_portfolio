import "./index.scss";
import NavBar from "../../components/NavBar/NavBar";
import Description from "../../components/Description_home/Description_home";
import ProjectsHome from "../../components/Projects_home/Projects_home";

function Home() {
    return (
      <div className="home_page">
        {/* <p className="red">Home page</p>
        <p>env: {process.env.REACT_APP_SAME_NUMBER}</p> */}
        <>
          <NavBar />
          <Description />
          <ProjectsHome/>
        </>
        </div>
    );
}

export default Home;
