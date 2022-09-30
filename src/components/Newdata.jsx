import { Box, Button, Flex, Heading, Img, Text, DrawerContent, useDisclosure,Drawer,DrawerBody, Input, Stack } from "@chakra-ui/react"
import {FaUserCircle} from "react-icons/fa"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useEffect, useState} from "react"
import {HiOutlineUser,HiOutlineMail} from "react-icons/hi"
import {FaBirthdayCake} from "react-icons/fa"
import {MdPhone} from "react-icons/md"
import {BsBuilding}  from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import "../styles/New.css"
import { Postdata } from "../redux/action"
import { useNavigate } from "react-router"




export default function Newdata(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [side,setSide] = useState(false);
    const dispatch = useDispatch();
    const current = useSelector(store=>store);
    const [formdata,setFormdata] = useState();
    const nav = useNavigate();
    console.log(current)

    useEffect(()=>{
        if(isOpen){
            setSide(true)
        }else{
            setSide(false);
            onClose()
        }
    })

    const uploadimage= async(e) =>{
       const file = e.target.files[0];
       const res = await convertbase64(file);
       setFormdata({
        ...formdata,[e.target.name]:res
       })
    }

    const convertbase64 = (file) =>{
        return new Promise ((resolve,reject)=>{
           const filereader = new FileReader();
           filereader.readAsDataURL(file);

           filereader.onload=()=>{
              resolve(filereader.result)
           }

           filereader.onerror = (err)=>{
              reject(err)
           }
        })
    }

    const handlechange = (e) =>{
        const{name,value} = e.target;
        setFormdata({
            ...formdata,[name]:value
        })
    }
   
    const handlesubmit = () =>{
        dispatch(Postdata(formdata));
        nav("/");
    }
  
    return(
        <Box>
        <Box className="navbar">
          <Navbar onclick={onOpen} />
        </Box>
        <Flex>
        <Box>
           <Drawer
            size={"xs"}
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
           >
           <DrawerContent  marginTop={"60px"}>
           <DrawerBody>
             <Sidebar/>
           </DrawerBody>
           </DrawerContent>
           </Drawer>
        </Box>
          <div className='content' style={{width:side?"80%":"100%",marginLeft:side?"340px":"0px"}}>
            <div className="uppernew">
              <Box>
                <FaUserCircle size={"160px"} color={"#cbcdd4"} className="usericon"/>
                <Input type={"file"} w={"200px"} name="image" onChange={uploadimage}/>
              </Box>
              <Button color={"white"} backgroundColor={"blue"} onClick={handlesubmit}>Save</Button>
            </div>
            <Box  borderBottom={"1px solid #cbcdd4"} mt={'20px'}></Box>
             <Stack p={8} spacing={6}>
                <Flex>
                    <HiOutlineUser size={"26px"}/>
                    <Input onChange={handlechange} ml={"20px"} w={"400px"} h={"30"} type="text" placeholder="Name" name="name"/>
                </Flex>
                <Flex>
                    <BsBuilding size={"26px"}/>
                    <Input onChange={handlechange}  ml={"20px"} w={"400px"} h={"30"} type="text" placeholder="Company" name="company"/>
                </Flex>
                <Flex>
                    <HiOutlineMail size={"26px"}/>
                    <Input onChange={handlechange} ml={"20px"} w={"400px"} h={"30"} type="email" placeholder="Email" name="email"/>
                </Flex>
                <Flex>
                    <MdPhone size={"26px"}/>
                    <Input onChange={handlechange} ml={"20px"} w={"400px"} h={"30"} type="number" placeholder="Mobile Number" name="number"/>
                </Flex>
                <Flex>
                    <FaBirthdayCake color="grey" size={"26px"}/>
                    <Input onChange={handlechange} ml={"20px"} w={"400px"} h={"30"} type="date" placeholder="Date Of Birth" name="DOB"/>
                </Flex>
             </Stack>       
           </div> 
          </Flex>
        </Box>
    )
}