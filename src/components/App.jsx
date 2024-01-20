import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Favorites } from "../pages/Favorites";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};
