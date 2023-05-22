import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Membership from "../pages/Membership";
import MapPage from "../pages/MapPage";
import QuestionsPage from "../pages/QuestionsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage title="Home Page" />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
