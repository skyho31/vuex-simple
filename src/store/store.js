// store.js
import Vue from 'vue';
import Vuex from 'vuex';

// store module
import grid from './modules/grid/';

Vue.use(Vuex);

const modules = {
  grid,
}

export const store = new Vuex.Store({ modules });