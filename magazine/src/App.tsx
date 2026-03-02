import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PublishedMagazines from "./components/PublishedMagazines";
import "./index.css";
import AboutPage from "./components/AboutPage";
import ContactUsPage from "./components/ContactUsPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/magazines" element={<PublishedMagazines />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
};

export default App;
