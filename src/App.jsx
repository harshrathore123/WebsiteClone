import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import PlatformCoreService from "./component/PlatformCoreService";
import Layout from "./component/Layout";
import './App.css';
import ServiceChat from "./component/ServiceChat";
import DeveloperHome from "./component/DeveloperHome";
import Resources from "./component/Resources";
import Pricing from "./component/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/platform/core-services"
            element={<PlatformCoreService />}
          />
          <Route
            path="/service/chat"
            element={<ServiceChat/>}
          />
          <Route
            path="developer/developerhome"
            element={<DeveloperHome/>}
          />
          <Route
            path="resources/careers"
            element={<Resources/>}
          />
          <Route
            path="price/pricing"
            element={<Pricing/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
