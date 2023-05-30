import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Membership from "../pages/Membership";
import MapPage from "../pages/MapPage";
import QuestionsPage from "../pages/QuestionsPage";
import NotFound from "../pages/NotFound";
import GaragePage from "../pages/GaragePage";
import ProfilePage from "../pages/ProfilePage";
import { LoginGuard, SiteGuard } from "../pages/Guard/Guard";
import SearchGarages from "../pages/SearchGarages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage title="Home Page" />} />
        <Route
          path="/membership"
          element={
            <LoginGuard>
              <Membership />
            </LoginGuard>
          }
        />
        <Route
          path="/map"
          element={
            <SiteGuard>
              <MapPage />
            </SiteGuard>
          }
        />
        <Route
          path="/map/:problem/:carType"
          element={
            <SiteGuard>
              <MapPage />
            </SiteGuard>
          }
        />
        <Route
          path="/questions"
          element={
            <SiteGuard>
              <QuestionsPage />
            </SiteGuard>
          }
        />
        <Route
          path="/garage/:id"
          element={
            <SiteGuard>
              <GaragePage />
            </SiteGuard>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <SiteGuard>
              <ProfilePage />
            </SiteGuard>
          }
        />
        <Route
          path="/search-garages"
          element={
            <SiteGuard>
              <SearchGarages />
            </SiteGuard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
