import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ApplyPage from "../pages/ApplyPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<ApplyPage />} />
    </Routes>
  );
}

export default AppRoutes;