import React from 'react';
import { Route } from 'react-router';
import AppScreen from '../containers/AppScreen';
import EnsureLoggedIn from '../containers/EnsureLoggedIn';
import HomeScreen from '../containers/HomeScreen';
import NewCollectionScreen from '../containers/NewCollectionScreen';
import CollectionScreen from '../containers/CollectionScreen';
import CollectionsScreen from '../containers/CollectionsScreen';

export default (
  <Route component={AppScreen}>
    <Route path="/" component={HomeScreen} />
    { /* App routes */ }
    <Route path="/collections" component={CollectionsScreen} />
    <Route path="/collections/:id" component={CollectionScreen} />

    <Route component={EnsureLoggedIn}>
      <Route path="/new" component={NewCollectionScreen} />
    </Route>
  </Route>
);
