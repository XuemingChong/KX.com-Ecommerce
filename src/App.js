import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UserGroup from "./pages/userGroup/UserGroup";
import UserInfo from "./pages/UserInfo";
import ProdManage from "./pages/productManagement/ProductManagement"
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";

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
              <Route path="/" element={<Dashboard />}/>
              <Route path="/userGroup" element={<UserGroup />}/>
              <Route path="/userInfo" element={<UserInfo />}/>
              <Route path="/prodManage" element={<ProdManage />}/>
              {/* <Route path="/bar" element={<Bar />}/> */}
              {/* <Route path="/form" element={<Form />}/> */}
              {/* <Route path="/line" element={<Line />}/> */}
              {/* <Route path="/pie" element={<Pie />}/> */}
              {/* <Route path="/faq" element={<FAQ />}/> */}
              {/* <Route path="/geography" element={<Geography />}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
