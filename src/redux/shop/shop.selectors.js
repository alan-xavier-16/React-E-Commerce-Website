import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/* 
Function takes the SHOP_DATA object and gets the keys as an array.
Then it maps over the keys, and returns the array of collections
*/
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

/* Function maps over the collections based on the url parameter (e.g. /hats) and return the matching collection, i.e. hats */
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );
