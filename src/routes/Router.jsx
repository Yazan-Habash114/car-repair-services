import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Membership from "../pages/Membership";
import MapPage from "../pages/MapPage";
import QuestionsPage from "../pages/QuestionsPage";
import NotFound from "../pages/NotFound";
import GaragePage from "../pages/GaragePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage title="Home Page" />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/map/" element={<MapPage />} />
        <Route path="/map/:problem/:carType" element={<MapPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/garage/:id" element={<GaragePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
