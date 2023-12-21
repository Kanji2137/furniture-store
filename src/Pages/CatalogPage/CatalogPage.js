import React from "react";
import {useParams, useLocation} from 'react-router-dom';

import Filter from "./Filter/Filter";

function CatalogPage({searchQueryDefault}) {
  const {searchQuery} = useParams();
  const location = useLocation();
  const isFromSearchBar = location.pathname.includes('/search');
  const finalSearchQuery = isFromSearchBar ? searchQueryDefault : searchQuery || '';

  return (
      <section className="catalogPage">
        <div className="catalogPage__title">Catalog</div>
        <Filter searchQuery={finalSearchQuery} showFilterCategories={true}/>
      </section>
  );
}

export default CatalogPage;