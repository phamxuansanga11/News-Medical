import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.scss";
import LayoutOther from "./Layout/LayoutOther/LayoutOther";
import NotFound from "./Components/Pages/NotFound/NotFound";
import LayoutHeader from "./Layout/LayoutHeaderPage/LayoutHeader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/content/:id" element={<LayoutOther />}></Route>
      <Route path="/news/:page" element={<LayoutHeader />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
