import React from "react";

// React Router
import {Routes, Route, Outlet, Navigate} from "react-router-dom";

// Layouts
import PageLayout from "./components/LayoutContainer/MainLayout";
import DashboardLayout from "./components/LayoutContainer/DashboardLayout";
import AuthLayout from "./components/LayoutContainer/AuthLayout";

// Auth Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Reset from "./pages/Auth/Reset";
import NewPassword from "./pages/Auth/New-Password";

// Main Pages
import Home from "./pages/Main/Home";
import Garages from "./pages/Main/Garages";
import Garage from "./pages/Main/Garage";
import Items from "./pages/Main/Items";
import Item from "./pages/Main/Item";

// Dashboard PAges
import DashboardHome from "./pages/Dashboard/Home"
import Account from "./pages/Dashboard/Account";
import Analytics from "./pages/Dashboard/Analytics";
import DashboardGarages from "./pages/Dashboard/Garages";
import DashboardGarage from "./pages/Dashboard/Garage";
import DashboardItems from "./pages/Dashboard/Items";
import ItemManager from "./pages/Dashboard/Item-Manager";
import NewItem from "./pages/Dashboard/New-Item";
import Tier from "./pages/Dashboard/Tier";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*">
          <Route path="home" element={<PageLayout><Home /></PageLayout>} />
          <Route path="garages" element={<PageLayout><Garages /></PageLayout>} />
          <Route path="garage" element={<PageLayout><Garage /></PageLayout>} />
          <Route path="items" element={<PageLayout><Items /></PageLayout>} />
          <Route path="item" element={<PageLayout><Item /></PageLayout>} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Route>
        <Route path="auth/*">
          <Route path="login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="register" element={<AuthLayout><Register /></AuthLayout>} />
          <Route path="reset" element={<AuthLayout><Reset /></AuthLayout>} />
          <Route path="new-password" element={<AuthLayout><NewPassword /></AuthLayout>} />
          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </Route>
        <Route path="dashboard/*">
          <Route path="home" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
          <Route path="account" element={<DashboardLayout><Account /></DashboardLayout>} />
          <Route path="analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
          <Route path="garages" element={<DashboardLayout><DashboardGarages /></DashboardLayout>} />
          <Route path="garage" element={<DashboardLayout><DashboardGarage /></DashboardLayout>} />
          <Route path="items" element={<DashboardLayout><DashboardItems /></DashboardLayout>} />
          <Route path="new-item" element={<DashboardLayout><NewItem /></DashboardLayout>} />
          <Route path="item-manager" element={<DashboardLayout><ItemManager /></DashboardLayout>} />
          <Route path="tier" element={<DashboardLayout><Tier /></DashboardLayout>} />
          <Route path="*" element={<Navigate replace to="/dashboard/home" />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
