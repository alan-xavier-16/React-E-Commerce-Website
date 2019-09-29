import { createSelector } from "reselect";

/* String ID and Number ID map for routing to CollectionPage based on the Id of the collection*/
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/* Function maps over the collections based on the url parameter (e.g. /hats) and return the matching collection, i.e. hats */
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
