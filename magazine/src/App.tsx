import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PublishedMagazines from "./components/PublishedMagazines";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/magazines" element={<PublishedMagazines />} />
    </Routes>
  );
};

export default App;
