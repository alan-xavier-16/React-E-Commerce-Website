import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/* Function maps over the collections based on the url parameter (e.g. /hats) and return the matching collection, i.e. hats */
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
