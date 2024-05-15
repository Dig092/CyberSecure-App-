import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
// import { I18nextProvider } from 'react-i18next';
// import i18next from './i18n';

import HomePage from "./Homepage";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Dashboard";
import AdminVerify from "./Pages/AdminVerify";
// import Menu from "./Components/Menu";

const App = () => {
  return (
    // <I18nextProvider i18n={i18next}>
      // <Suspense fallback="loading">
        <Router>
          {/* <Menu /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AdminVerify" element={<AdminVerify />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      // </Suspense>
    // </I18nextProvider>
  );
};

export default App;
