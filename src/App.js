import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Header from "./component/header/Header";
import Home from "./component/home/Home";

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
