import Header from "./components/Header/Header";
import './App.css';
import Activities from "./components/Activities/Activities";
import AboutUs from "./components/AboutUs/AboutUs";
import Hotels from "./components/Hotels/Hotels";
import Feedback from "./components/Feedback/Feedback";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Activities />
        <AboutUs />
        <Hotels />
        <Feedback />
      </Layout>
    </div>
  );
}

export default App;
