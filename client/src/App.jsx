import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comps/Header";
import Community from "./pages/Community";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import NoMatchRoute from "./pages/NoMatchRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-[calc(100vh-65px)] bg-slate-200 dark:bg-gray-900 dark:text-white">
        <div className="bg-slate-200 dark:bg-gray-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="*" element={<NoMatchRoute />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
