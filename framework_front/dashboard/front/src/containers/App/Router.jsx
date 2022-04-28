import { Routes, Route, Navigate, Outlet } from "react-router-dom"

// Components
import Dashboard from "../Dashboard"
import Profile from "../Profile"
import Wallet from "../Wallet"
import Login from "../Login"
import Signup from "../Signup"
import Layout from "../Layout"

function PrivateRoute({ children, isLoggedIn }){
  return isLoggedIn ? (<Layout>{children}</Layout>) : <Navigate to="/login" />
}

function PublicRoute({ children, isLoggedIn}){
  return !isLoggedIn ? children : <Navigate to="/" />
}

export default function Router() {
  return (
    <Routes>
      // Private Routes
      <Route
        path="/"
        element={<PrivateRoute isLoggedIn={true} > <Dashboard /> </PrivateRoute>}
      />
      <Route
        path="/profile"
        element={<PrivateRoute isLoggedIn={true} > <Profile /> </PrivateRoute>}
      />
      <Route
        path="/wallet"
        element={<PrivateRoute isLoggedIn={true} > <Wallet /> </PrivateRoute>}
      />
      // Public Routes
      <Route
        path="/login"
        element={<PublicRoute isLoggedIn={false} > <Login /> </PublicRoute>}
      />
      <Route
        path="/signup"
        element={<PublicRoute isLoggedIn={false} > <Signup /> </PublicRoute>}
      />
    </Routes>
  )
}