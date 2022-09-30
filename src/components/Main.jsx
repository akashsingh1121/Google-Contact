import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { Box, Drawer, DrawerBody,Text, DrawerContent, Table, Thead, useDisclosure, Tr, Th, Flex, Td, Tbody, Heading, Img } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Deletedata, Getdata } from '../redux/action';
import {MdDelete} from "react-icons/md";
import {GrEdit} from "react-icons/gr"
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../styles/Main.css"

function Main() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [side,setSide] = useState(false);
    const data = useSelector(store=>store.Getdata.users);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [search,setSearch] = useState('')
    
    console.log(data);
   
useEffect(()=>{
    if(isOpen){
        setSide(true)
    }else{
        setSide(false);
        onClose()
    }
})

useEffect(()=>{
  dispatch(Getdata())
},[dispatch])

const handledelete = (e) =>{
   dispatch(Deletedata(e._id))
}

const singleuser = (e) =>{
    nav(`/user/${e._id}`)
}
const updateuser = (e) =>{
  nav(`/update/${e._id}`)
}

const handlesearch = (e) =>{
  setSearch(e.target.value)
}
 

  return (
    <Box>
        <Box className='navbar'>
          <Navbar onclick={onOpen} onchange={handlesearch}/>
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
        <div className='content' style={{width:side?"80%":"100%",marginLeft:side?"340px":"0px"}} >
           <Table size={"md"}>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th className='phoneview'>Email</Th>
                    <Th className='phoneview'>Number</Th>
                    {/* <Th className='phoneview'>Company</Th> */}
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
              {data?.filter(e=>e.name.toLowerCase().includes(`${search}`)).map(e=>
                
                <Tr cursor={"pointer"} >
                  <Td onClick={()=>singleuser(e)}><Flex>
                    {e.image?<Img src={e.image} w={'40px'} border={"none"} borderRadius={"25px"}/>:null}
                    <Text ml={"5px"} pt={"8px"} fontWeight={500}>{e.name}</Text>
                    </Flex>
                  </Td>
                  <Td className='phoneview'>{e.email}</Td>
                  <Td className='phoneview'>{e.number}</Td>
                  {/* <Td className='phoneview'>{e.company}</Td> */}
                  <Td><Flex w="60px" justifyContent={"space-around"}><MdDelete onClick={()=>handledelete(e)}/><GrEdit onClick={()=>updateuser(e)}/></Flex></Td>
                  {/* <Td><GrEdit/></Td> */}
                </Tr>)}
            </Tbody>
           </Table>
        </div>
        </Flex>
    </Box>
  )
}

export default Main