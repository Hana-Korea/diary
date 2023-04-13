import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Diary from "../components/Diary";
import Layout from "../components/Layout";
import MainPage from "../components/MainPage";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diary" element={<Diary />} />
      </Route>
    </Routes>
  );
}

export default Router;
