import axios from 'axios'
import { Indicator } from 'mint-ui'
const ajax = (options, all) => {
    options.params = options.params || {}

    if (options.loading) {
        Indicator.open({
            spinnerType: 'triple-bounce'
        })
    }

    return axios(options)
        .then(res => {

            if (options.loading) Indicator.close();
            return all ? res : res.data
        })
        .catch(err => {
            console.log('access error');
            if (options.loading) Indicator.close();
            return err
        })
}

const request = (options, all) => {
    options.params = options.params || {}
    let _react = options.react === undefined ? true : options.react
    return axios(options)
        .then(res => {
            if (res.data.msg === 'ok') {
                if (_react) console.log('data success access');
            } else {
                if (_react) console.log('data success access');
            }
            return all ? res : res.data
        })
        .catch(err => {
            console.log('access error');
            return err
        })
}
export {
    ajax,
    request
}