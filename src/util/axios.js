import axios from 'axios'

const ajax =(options,all)=>{
    options.params = options.params||{}

    return axios(options)
        .then(res =>{
            if(res.data.code=== 1){
                console.log('data success access');
            }else{
                console.log('data failed access');
            }
            return all ? res :res.data
        })
        .catch(err=>{
            console.log('access error');
            return err
        })
}

export default ajax