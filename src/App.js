import "./App.css";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/MainCard/MainCard";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="">
        <div className={"col1"}>
          <MainCard />
        </div>
        <div className={"col2"}>
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
