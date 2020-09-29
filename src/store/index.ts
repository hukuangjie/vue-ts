import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { AAboutState } from "./module/about";

interface AIRootState {
  about: AAboutState;
}

export default new Vuex.Store<AIRootState>({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {}
});
