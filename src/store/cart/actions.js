
import {UPDATE_CART_TICKETS} from './mutations-types'

import api from '@util/api'

const actions = {
    async addTickets(context,payload){
        let result = await api.addTickets(payload)

        if(result.code === 200){
            context.commit({
                type:UPDATE_CART_TICKETS,
                tickets: result.tickets
            })
        }
    }
}
export default actions