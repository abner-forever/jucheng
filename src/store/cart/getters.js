const getters = {
    totalNum : (state,getters) =>{
        // console.log('getter');
        
        // let total = 0;
        // for(let item in state.tickets){
        //     total+=item.num
        // }

        // console.log('getters');
        // console.log(state,getters);
        
        return getters.totalNum
    }
}

export default getters