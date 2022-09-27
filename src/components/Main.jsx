import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { Box, Drawer, DrawerBody, DrawerContent, Table, Thead, useDisclosure, Tr, Th, Flex, Td, Tbody } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Getdata } from '../redux/action';

function Main() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [side,setSide] = useState(false);
    const data = useSelector(store=>store.Getdata.users);
    const dispatch = useDispatch()
    
    console.log(data);
   
useEffect(()=>{
    if(isOpen){
        setSide(true)
    }else{
        setSide(false)
    }
})

useEffect(()=>{
  dispatch(Getdata())
},[dispatch])


  return (
    <Box>
        <Box>
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
        <Box ml={side ? "340px" : "0px"} w={side ? "80%" : "100%"}>
           <Table>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Number</Th>
                    <Th>Company</Th>
                </Tr>
            </Thead>
            <Tbody>
              {data?.map(e=>
                <Tr>
                  <Td>{e.name}</Td>
                  <Td>{e.email}</Td>
                  <Td>{e.number}</Td>
                  <Td>{e.company}</Td>

                </Tr>)}
            </Tbody>
           </Table>
        </Box>
        </Flex>
    </Box>
  )
}

export default Main