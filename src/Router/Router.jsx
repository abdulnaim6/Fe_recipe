import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Detailrecipe from "../Page/Detailrecipe";
import Detailvideo from "../Page/Detailvideo";
import Addrecipe from "../Page/Addrecipe";
import Profile from "../Page/Profile";
import Searchpage from "../Page/Searchpage";
import ProtectRoute from "../Components/ProductRoute";
import PublicRoute from "../Components/PublicRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/detailrecipe/:recipe_id" element={<Detailrecipe />} />
        <Route path="/detailvideo/:recipe_id" element={<Detailvideo />} />
        <Route
          path="/addrecipe"
          element={
            <ProtectRoute>
              <Addrecipe />
            </ProtectRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route path="/searchpage" element={<Searchpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
