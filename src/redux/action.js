import axios from "axios"

export const GET_DATA_REQ = "GET_DATA_REQ"
export const GET_DATA_SUC = "GET_DATA_SUC"
export const GET_DATA_FAL = "GET_DATA_FAL"

export const DEL_DATA_REQ = "DEL_DATA_REQ"
export const DEL_DATA_SUC = "DEL_DATA_SUC"
export const DEL_DATA_FAL = "DEL_DATA_FAL"


const getdatarequest = () =>{
    return{
        type: GET_DATA_REQ
    }
}

const getdatasuccess = (payload) =>{
    return{
        type: GET_DATA_SUC,
        payload
    }
}

const getdatafailure = (payload) =>{
    return{
        type: GET_DATA_FAL,
        payload
    }
}

const deletedatarequest = () =>{
    return{
        type: DEL_DATA_REQ
    }
}

const deletedatasuccess = (payload) =>{
    return{
        type: DEL_DATA_SUC,
        payload
    }
}

const deletedatafailure = (payload) =>{
    return{
        type: DEL_DATA_FAL,
        payload
    }
}

export const Getdata = () =>{
    return(dispatch)=>{
        dispatch(getdatarequest());
        axios("http://localhost:5000/users").then(res=>dispatch(getdatasuccess(res.data)))
        .catch(err=>dispatch(getdatafailure(err)))
    }
}


export const Deletedata = (id) =>{
    return(dispatch)=>{
        dispatch(deletedatarequest());
        axios.delete(`http://localhost:5000/users/${id}`).then(res=>dispatch(deletedatasuccess(res.data)))
        .catch(err=>dispatch(deletedatafailure(err)))
    }
}

