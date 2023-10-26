import React from "react"
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";

function AboutUs() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="AboutUs">
            <div class="container">
        <h1>About Migracode Barcelona</h1>
        <p>Migracode Barcelona is a coding school and tech community that provides free coding courses and job opportunities to refugees and migrants.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to empower newcomers in the tech industry and foster diversity and inclusion in the European tech scene.</p>

        <h2>Our Team</h2>
        <p>We have a passionate and dedicated team of educators, mentors, and volunteers who support our students throughout their journey.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch, you can reach us at <a href="mailto:info@migracode.org">info@migracode.org</a>.</p>
    </div>

            </main>
        </>
    );
}
export default AboutUs;

   