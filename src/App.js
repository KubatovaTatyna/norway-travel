import Header from "./components/Header/Header";
import './App.css';
import Activities from "./components/Activities/Activities";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Activities />
      <AboutUs />
    </div>
  );
}

export default App;
