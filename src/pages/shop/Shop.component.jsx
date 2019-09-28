import React from "react";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default Shop;
