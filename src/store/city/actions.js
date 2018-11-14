import { ajax } from '@util/axios'

import { CHANGE_CITY } from './mutations-types'

export default {

    async getCurrentPosition(context) {

        let cityId = 12
        let cityName = '全国'
        //定位当前城市
        // https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=<用户的key>
        let currentcity = await ajax({
            url: 'https://restapi.amap.com/v3/ip?key=905edbfa201ce838e62dc5ee4e145c3e',
        })

        //获取城市列表信息
        let cities = await ajax({
            url: '/jz/Index/getCityList',
            method: 'post',
        })
        if (currentcity) {
            cityName = currentcity.city.replace('市', '')
            for (let i = 0; i < cities.city_list.length; i++) {
                if (cities.city_list[i] === cityName) {
                    cityId = cities.city_list[i].id
                    break
                }
            }

        }

        context.commit({
            type: CHANGE_CITY,
            cities: cities.city_list,
            currentcity: { cityId, cityName }
        })
    }
}