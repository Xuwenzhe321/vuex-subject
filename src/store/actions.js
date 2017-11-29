/**
 * Created by Administrator on 2017-11-27.
 */
export default {
  initData ({ commit }) { commit('INIT_DATA') },

  addItem ( { commit, state }, param) {
    console.log(param)
    commit('REMEBER_ITEM', param)
    if(state.itemNum < state.problems.length) {
      commit('ADD_ITEM',1)
    }
  }
}
