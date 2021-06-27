import axios from "axios"

const URL_API="http://localhost:4000/type-product/all"
export default function CallApi(endPoint,method,body){

    return axios({
        method:method,
        url:URL_API+`${endPoint}`,
        data:body
    }).catch(err=>{
        console.log(err)
    });
}