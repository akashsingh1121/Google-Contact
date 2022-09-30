import { Route, Routes } from "react-router";
import Main from "./Main";
import Newdata from "./Newdata";
import Singleuser from "./Singleuser";
import Update from "./Update";


export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/user/:_id" element={<Singleuser/>} />
            <Route path="/update/:_id" element={<Update/>} />
            <Route path="/newuser" element={<Newdata/>} />
        </Routes>
    )
}