/**
 * Created by Administrator on 2017-11-27.
 */

import * as type from './mutations_type'

export default {
  [type.INITDATA] (state) {
    state.itemNum = 0
    state.nowTime = 0
    state.answerId = []
  }
}
