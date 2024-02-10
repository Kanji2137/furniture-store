import React from "react";
import {useParams, useLocation} from 'react-router-dom';

import Filter from "./Filter/Filter";

function CatalogPage({searchQueryDefault}) {
  const {searchQuery} = useParams();
  const location = useLocation();
  const isFromSearchBar = location.pathname.includes('/search');
  const finalSearchQuery = isFromSearchBar ? searchQueryDefault : searchQuery || '';
  const showFilterCategories = finalSearchQuery === "";

  const { room } = location.state !== null ? location.state : { room: "all" };

  return (
      <section className="catalogPage">
        <div className="catalogPage__title">Catalog</div>
        <Filter room={room} searchQuery={finalSearchQuery} showFilterCategories={showFilterCategories}/>
      </section>
  );
}

export default CatalogPage;