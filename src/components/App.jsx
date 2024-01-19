import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="catalog" element={<div>Catalog</div>} />
        <Route path="favorites" element={<div>Favourites</div>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};
