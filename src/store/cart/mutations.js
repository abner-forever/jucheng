import { UPDATE_CART_TICKETS } from './mutations-types'

import _ from 'lodash'

const mutations ={
    [UPDATE_CART_TICKETS] :(state , payload)=>{
        state.tickets = _.cloneDeep(payload.tickets)
    }
}

export default mutations