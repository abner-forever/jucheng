const non = ()=>{}
const authLogin =()=>{
    let userInfo = JSON.parse(localStorage.getItem('userInfo')||'{}')
    return userInfo
}   
export default {
    authLogin
}