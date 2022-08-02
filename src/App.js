import Header from "./components/Header/Header";
import './App.css';
import Activities from "./components/Activities/Activities";
import AboutUs from "./components/AboutUs/AboutUs";
import Hotels from "./components/Hotels/Hotels";

function App() {
  return (
    <div className="App">
      <Header />
      <Activities />
      <AboutUs />
      <Hotels />
    </div>
  );
}

export default App;
