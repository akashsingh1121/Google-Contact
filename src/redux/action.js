import axios from "axios";
import fileDownload from "js-file-download";

export const GET_DATA_REQ = "GET_DATA_REQ"
export const GET_DATA_SUC = "GET_DATA_SUC"
export const GET_DATA_FAL = "GET_DATA_FAL"

export const SINGLE_DATA_REQ = "SINGLE_DATA_REQ"
export const SINGLE_DATA_SUC = "SINGLE_DATA_SUC"
export const SINGLE_DATA_FAL = "SINGLE_DATA_FAL"

export const POST_DATA_REQ = "POST_DATA_REQ"
export const POST_DATA_SUC = "POST_DATA_SUC"
export const POST_DATA_FAL = "POST_DATA_FAL"

export const PUT_DATA_REQ = "PUT_DATA_REQ"
export const PUT_DATA_SUC = "PUT_DATA_SUC"
export const PUT_DATA_FAL = "PUT_DATA_FAL"

export const IMPORT_FILE_REQ = "IMPORT_FILE_REQ"
export const IMPORT_FILE_SUC = "IMPORT_FILE_SUC"
export const IMPORT_FILE_FAL = "IMPORT_FILE_FAL"

export const EXPORT_FILE_REQ = "EXPORT_FILE_REQ"
export const EXPORT_FILE_SUC = "EXPORT_FILE_SUC"
export const EXPORT_FILE_FAL = "EXPORT_FILE_FAL"

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

const importfilerequest = () =>{
    return{
        type: IMPORT_FILE_REQ
    }
}

const importfilesuccess = (payload) =>{
    return{
        type: IMPORT_FILE_SUC,
        payload
    }
}

const importfilefailure = (payload) =>{
    return{
        type: IMPORT_FILE_FAL,
        payload
    }
}
const exportfilerequest = () =>{
    return{
        type: EXPORT_FILE_REQ
    }
}

const exportfilesuccess = (payload) =>{
    return{
        type: EXPORT_FILE_SUC,
        payload
    }
}

const exportfilefailure = (payload) =>{
    return{
        type: EXPORT_FILE_FAL,
        payload
    }
}

const singledatarequest = () =>{
    return{
        type: SINGLE_DATA_REQ
    }
}

const singledatasuccess = (payload) =>{
    return{
        type: SINGLE_DATA_SUC,
        payload
    }
}

const singledatafailure = (payload) =>{
    return{
        type: SINGLE_DATA_FAL,
        payload
    }
}

const postdatarequest = () =>{
    return{
        type: POST_DATA_REQ
    }
}

const postdatasuccess = (payload) =>{
    return{
        type: POST_DATA_SUC,
        payload
    }
}

const postdatafailure = (payload) =>{
    return{
        type: POST_DATA_FAL,
        payload
    }
}

const putdatarequest = () =>{
    return{
        type: PUT_DATA_REQ
    }
}

const putdatasuccess = (payload) =>{
    return{
        type: PUT_DATA_SUC,
        payload
    }
}

const putdatafailure = (payload) =>{
    return{
        type: PUT_DATA_FAL,
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
        axios("https://contactbackend-k3oa.onrender.com/users").then(res=>dispatch(getdatasuccess(res.data)))
        .catch(err=>dispatch(getdatafailure(err)))
    }
}

export const Singlegetdata = (id) =>{
    return(dispatch)=>{
        dispatch(singledatarequest());
        axios(`https://contactbackend-k3oa.onrender.com/users/${id}`).then(res=>dispatch(singledatasuccess(res.data)))
        .catch(err=>dispatch(singledatafailure(err)))
    }
}


export const Deletedata = (id) =>{
    return(dispatch)=>{
        dispatch(deletedatarequest());
        axios.delete(`https://contactbackend-k3oa.onrender.com/users/${id}`).then(res=>{
            dispatch(deletedatasuccess(res.data))
            dispatch(Getdata())
        })
        .catch(err=>dispatch(deletedatafailure(err)))
    }
}

export const Postdata = (data) =>{
    return(dispatch)=>{
        dispatch(postdatarequest());
        const headers = {
            "content-type" : "application/json"
        }
        axios.post(`https://contactbackend-k3oa.onrender.com/users`,data,{headers}).then(res=>{
            dispatch(postdatasuccess(res.data));
            dispatch(Getdata())
            alert("Contact Added Successfully");
        })
        .catch(err=>{
            dispatch(postdatafailure(err));
            alert(err.message);
        })
    }
}

export const Putdata = (id,data) =>{
    return(dispatch)=>{
        dispatch(putdatarequest());
        const headers = {
            "content-type" : "application/json"
        }
        axios.put(`https://contactbackend-k3oa.onrender.com/users/${id}`,data,{headers}).then(res=>{
            dispatch(putdatasuccess(res.data));
            dispatch(Getdata())
            alert("Contact Updated Successfully");
        })
        .catch(err=>{
            dispatch(putdatafailure(err));
            alert(err.message);
        })
    }
}

export const Importdata = (data) =>{
    return(dispatch)=>{
        dispatch(importfilerequest());
        const headers = {
            "Content-Type": "multipart/form-data",
          }
        axios.post(`https://contactbackend-k3oa.onrender.com/upload`,data,{headers}).then(res=>{
            dispatch(importfilesuccess(res.data));
            alert(res.data.results);
            dispatch(Getdata())
        })
        .catch(err=>{
            dispatch(importfilefailure(err))
            alert(err.message)
        })
    }
}

export const Exportdata = () =>{
    return(dispatch)=>{
        dispatch(exportfilerequest());
        axios.get("https://contactbackend-k3oa.onrender.com/export").then(res=>dispatch(exportfilesuccess(fileDownload(res.data,"Contact.csv"))))
        .catch(err=>dispatch(exportfilefailure(err)))
    }
}

