import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ContactInfo from "./components/ContactInfo";
import Contactform from "./components/Contactform";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />}>
          <Route path="Info" element={<ContactInfo />} />
          <Route path="form" element={<Contactform />} />
          <Route path="*" element={<Contactform />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
