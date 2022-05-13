// import {reqSearchList} from '@/api';


const state = {
  isCollapse:false,
};
const mutations = {
  CHANGECOLLAPSE(state){
    state.isCollapse = !state.isCollapse;
  }
};
const actions = {
};
const getters = {};


export default {
  state,
  mutations,
  actions,
  getters
};