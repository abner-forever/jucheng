
import { CHANGE_CITY } from './mutations-types'

export default {
    [CHANGE_CITY] :(state,payload)=>{
        state.currentcity = payload.currentcity
        
        if(payload.cities){
            state.cities = payload.cities
        }
    }
}