import "./index.scss";

function Home() {
    return (
        <div>
            <p className="red">Home page</p>
            <p>env: {process.env.REACT_APP_SAME_NUMBER}</p>
        </div>
    );
}

export default Home;
