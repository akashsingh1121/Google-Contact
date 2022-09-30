import {PUT_DATA_FAL,PUT_DATA_REQ,PUT_DATA_SUC, EXPORT_FILE_REQ, EXPORT_FILE_SUC, EXPORT_FILE_FAL, GET_DATA_FAL, POST_DATA_FAL, POST_DATA_REQ, POST_DATA_SUC, GET_DATA_REQ, GET_DATA_SUC, DEL_DATA_FAL,DEL_DATA_SUC,DEL_DATA_REQ, SINGLE_DATA_REQ, SINGLE_DATA_SUC, SINGLE_DATA_FAL, IMPORT_FILE_REQ, IMPORT_FILE_SUC, IMPORT_FILE_FAL } from "./action"


const initstate = {
    isError:{},
    isLoading:false,
    Getdata : [],
    current :{},
    deleteddata:{},
    postdata:{},
    importfile:{},
    exportfile:{},
    putdata:{}
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
          case IMPORT_FILE_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case IMPORT_FILE_SUC : 
          return{
            ...state,
            isLoading : false,
            importfile : payload
          }  
        case IMPORT_FILE_FAL : 
          return{
            ...state,
            isLoading : false,
            isError:payload
          }
          case EXPORT_FILE_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case EXPORT_FILE_SUC : 
          return{
            ...state,
            isLoading : false,
            exportfile : payload
          }  
        case EXPORT_FILE_FAL : 
          return{
            ...state,
            isLoading : false,
            isError:payload
          }
          case POST_DATA_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case POST_DATA_SUC : 
          return{
            ...state,
            isLoading : false,
            postdata : payload
          }  
        case POST_DATA_FAL : 
          return{
            ...state,
            isLoading : false,
            isError:payload
          }
          case PUT_DATA_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case PUT_DATA_SUC : 
          return{
            ...state,
            isLoading : false,
            putdata : payload
          }  
        case PUT_DATA_FAL : 
          return{
            ...state,
            isLoading : false,
            isError:payload
          }    
         case SINGLE_DATA_REQ : 
          return{
            ...state,
            isLoading : true
          }
        case SINGLE_DATA_SUC : 
          return{
            ...state,
            isLoading : false,
            current : payload
          }  
        case SINGLE_DATA_FAL : 
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