import axios from "axios"
import {GET_BURNERS,DELETE_BURNER,ADD_BURNER} from "./types"


export const getBurners = ()=>dispatch =>{
    axios.get('/api/burners/')
    .then(res =>{
        dispatch({
            type:GET_BURNERS,
            payload:res.data
        })
    })
    .catch(e=>{
        console.log(e)
    })
}

export const deleteBurner=(burnerID)=>dispatch=>{
    axios.delete(`/api/burners/${burnerID}/`)
    .then(res=>{
        dispatch({
            type:DELETE_BURNER,
            payload:burnerID
        })
    })
    .catch(e => console.log(e))
}

export const addBurner = burner =>dispatch=>{
    axios.post('/api/burners/',burner)
    .then(res=>dispatch({
        type:ADD_BURNER,
        payload:res.data
    }))
    .catch(e=>console.log(e.response.data))
}