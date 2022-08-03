import Header from "./components/Header/Header";
import './App.css';
import Activities from "./components/Activities/Activities";
import AboutUs from "./components/AboutUs/AboutUs";
import Hotels from "./components/Hotels/Hotels";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Activities />
      <AboutUs />
      <Hotels />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
