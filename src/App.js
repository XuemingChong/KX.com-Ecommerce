import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/general/Topbar";
import Sidebar from "./components/general/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import UserGroup from "./pages/users/UserGroup";
import UserInfo from "./pages/users/UserInfo";
import ProdManage from "./pages/products/ProductManagement";
import AdminCreation from "./pages/admin/AdminCreation";
import Pie from "./pages/charts/Pie";
import Line from "./pages/charts/Line";
import Geo from "./pages/charts/Geo";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/userGroup" element={<UserGroup />} />
              <Route path="/userInfo" element={<UserInfo />} />
              <Route path="/prodManage" element={<ProdManage />} />
              <Route path="/adminCreation" element={<AdminCreation />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />}/>
              <Route path="/geo" element={<Geo />}/>
              {/* <Route path="/form" element={<Form />}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
