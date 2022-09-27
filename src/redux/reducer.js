import { GET_DATA_FAL, GET_DATA_REQ, GET_DATA_SUC, DEL_DATA_FAL,DEL_DATA_SUC,DEL_DATA_REQ } from "./action"


const initstate = {
    isError:{},
    isLoading:false,
    Getdata : []
}


export const reducer = (state = initstate,action) =>{ 
    const {type,payload} = action

    switch(type){
        case GET_DATA_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case GET_DATA_SUC : 
          return{
            ...state,
            isLoading : false,
            Getdata : payload
          }  
        case GET_DATA_FAL : 
          return{
            ...state,
            isLoading : false,
            isError:payload
          }
         case DEL_DATA_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case DEL_DATA_SUC : 
          return{
            ...state,
            isLoading : false,
            deleteddata : payload
          }  
        case DEL_DATA_FAL : 
          return{
            ...state,
            isLoading : false,
            isError:payload
          }     
        default : 
           return{
            ...state
           }  
    }
}