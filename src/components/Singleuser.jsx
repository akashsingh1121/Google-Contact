import { Box, Button, Flex, Heading, Img, Text, DrawerContent, useDisclosure,Drawer,DrawerBody } from "@chakra-ui/react"
import {MdOutlinePhone,MdOutlineMail} from "react-icons/md"
import {FaBirthdayCake} from "react-icons/fa"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Singlegetdata } from "../redux/action"
import "../styles/Single.css"
import { Deletedata } from "../redux/action"




export default function Singleuser(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [side,setSide] = useState(false);
    const {_id} = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const current = useSelector(store=>store.current)
    console.log(current)

    useEffect(()=>{
        if(isOpen){
            setSide(true)
        }else{
            setSide(false);
            onClose()
        }
    })

    useEffect(()=>{
        dispatch(Singlegetdata(_id))
    },[dispatch]);

    const handledelete = () =>{
      dispatch(Deletedata(current._id));
      alert("Contact Deleted")
      nav("/");
   }
   const updateuser = () =>{
    nav(`/update/${current._id}`)
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
            <div className="upper" >
              <Box className="left">
                <Img w={'180px'} ml={[14,4,4,8]} borderRadius={"60%"} src={current.image} />
                <Heading className="heading" fontSize={"24px"}  fontWeight={500}>{current.name}</Heading>
              </Box>
              <Box mt={["30px","30px", "50px", "50px"]} ml={[14,6,0,0]}>
                <Button onClick={updateuser}  fontSize={"20px"} mt={["20px","20px","20px","30px"]} ml={["10px","10px","10px","10px"]}>Edit</Button> 
                <Button onClick={handledelete} fontSize={"20px"} mt={["20px","20px","20px","30px"]} ml={["10px","10px","10px","10px"]}>Delete</Button>
              </Box>
            </div>
            <Box  borderBottom={"1px solid #cbcdd4"} mt={'50px'}></Box>

            <Box className="down"  mt={'30px'} p={8} w={'500px'} border={"1px solid #cbcdd4"} borderRadius={"10px"}>
                <Heading fontSize={"24px"}>Contact Info</Heading>
                <Flex mt={"10px"}>
                    <Box mt={"3px"}><MdOutlineMail size={"20px"}/></Box>
                    <Text ml={"10px"} cursor={"pointer"} color={"blue.500"} fontWeight={500} onClick={updateuser}>{current.email?current.email:"Add Your Email"}</Text>
                </Flex>
                <Flex mt={"10px"}>
                    <Box mt={"3px"}><MdOutlinePhone size={"20px"}/></Box>
                    <Text ml={"10px"} cursor={"pointer"} color={"blue.500"} fontWeight={500}>{current.number}</Text>
                </Flex>
                <Flex mt={"10px"}>
                    <Box mt={"3px"}><FaBirthdayCake size={"20px"}/></Box>
                    <Text ml={"10px"} cursor={"pointer"} color={"blue.500"} fontWeight={500} onClick={updateuser}>{current.DOB?current.DOB:"Add DOB"}</Text>
                </Flex>
            </Box>
          </div> 
          </Flex>
        </Box>
    )
}