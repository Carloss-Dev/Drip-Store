import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home/Home";
import { Products } from "../src/pages/Products/Products";
import { Categories } from "../src/pages/Categories/Categories";
import { Requests } from "../src/pages/Requests/Requests";
import { Carousel } from "../src/components/Carousel/Carousel";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/pedidos" element={<Requests />} />
        <Route path="/carrossel" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
};
