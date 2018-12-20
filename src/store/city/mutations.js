
import { CHANGE_CITY } from './mutations-types'

export default {
    [CHANGE_CITY] :(state,payload)=>{
        state.currentcity = payload.currentcity
        
        if(payload.cities){
            state.cities = payload.cities
        }
        if(payload.hotcities){
            state.hotcities = payload.hotcities
        }
    }
}