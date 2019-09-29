import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./Collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <h2>Collection PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
