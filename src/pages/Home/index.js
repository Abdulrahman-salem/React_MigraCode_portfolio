import "./index.scss";
import NavBar from "../../components/NavBar/NavBar";
import Description from "../../components/Description_home/Description_home";
import ProjectsHome from "../../components/Projects_home/Projects_home";
import StudentHome from "../../components/Students_home/Student_home";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards";
import { useStudentContext } from "../../components/StudentData"; 

function Home() {
  const { studentData } = useStudentContext();
  console.log(studentData);
const filteredStudents = studentData.slice(0, 3);
// if (studentData.length === 0) {
//   return <div>Loading...</div>;
// }

  return (
    <div className="home_page">
      <>
        <NavBar />
        <Description />
        <Cards allData={filteredStudents} onClickGoTo="/student" />
<StudentHome/>
        <Footer />
      </>
    </div>
  );
}

export default Home;
