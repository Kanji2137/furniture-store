import React from "react";
import {useSelector} from "react-redux";
import Product from "../CatalogPage/Product/Product";

function WishlistPage() {
  const wishlistItems = useSelector(state => state.wishlist.itemsList);
  return (
      <div>
        {wishlistItems.map((item, index) => (
            <Product name={item.name} url={item.url} price={item.price} description={item.description }/>
        ))}
      </div>
  );
}

export default WishlistPage;