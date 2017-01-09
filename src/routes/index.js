import React from 'react';
import { Route } from 'react-router';
import AppScreen from '../containers/AppScreen';
import HomeScreen from '../containers/HomeScreen';
import NewCollectionScreen from '../containers/NewCollectionScreen';
import CollectionScreen from '../containers/CollectionScreen';
import CollectionsScreen from '../containers/CollectionsScreen';

const getRoutes = () => (
  <Route>
    <Route path="/" component={HomeScreen} />
    { /* App routes */ }
    <Route component={AppScreen}>
      <Route path="/collections" component={CollectionsScreen} />
      <Route path="/collections/new" component={NewCollectionScreen} />
      <Route path="/collections/:id" component={CollectionScreen} />
    </Route>
  </Route>
);

export default getRoutes;
