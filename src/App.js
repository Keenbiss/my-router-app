import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Navbar } from "./Pages/Navbar";
import { Order } from "./Pages/Order";
import { Nopage } from "./Pages/Nopage";
import { Product } from "./Pages/Product";
import { New } from "./Pages/New";
import { Featured } from "./Pages/Featured";
import { Errorboundary } from "./Pages/Errorboundary";
import { Users } from "./Pages/Users";
// import { useFetch } from "./Pages/useFetch";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="about" element={<About></About>}></Route>

        <Route path="order" element={<Order></Order>}></Route>

        <Route path="*" element={<Nopage></Nopage>}></Route>

        <Route path="product" element={<Product></Product>}>
          <Route path="featured" element={<Featured></Featured>}></Route>

          <Route path="new" element={<New></New>}></Route>
        </Route>

        <Route
          path="errorboundary"
          element={<Errorboundary></Errorboundary>}
        ></Route>

        <Route path="users" element={<Users></Users>}></Route>

        {/* <Route path="userfetch" element={<useFetch></useFetch>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
