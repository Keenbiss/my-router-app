import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search for your products"></input>
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
        <Link to="promo">Promo</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
