import jwt from 'jsonwebtoken'

export const curr_user = localStorage.user ? JSON.parse(localStorage.user) : false
export const headers = { headers: { 'authorization': localStorage.token } }
export const token = localStorage.token

export const expireTokenCheck = () => {
    //Decode the local token
    var decodedToken = jwt.decode(localStorage.token, { complete: true });
    
    var dateNow = new Date();
    //JWT stored in seconds, not milliseconds for some reason, so x 1000
    var expirationDate = new Date(decodedToken.payload.exp * 1000)
    
    if (expirationDate.getTime() < dateNow.getTime()) { return true }
    else {return false}
}