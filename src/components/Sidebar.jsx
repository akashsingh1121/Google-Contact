import React from 'react'
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import {HiOutlineUser} from "react-icons/hi"
import {BiExport,BiImport} from "react-icons/bi"

function Sidebar() {
  return (
    <Box p={6}>
        <Button
         backgroundColor={"white"}
         borderRadius={"20px"}
         boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}>
            Create Contact</Button>
        <Box  p={4}>
           <Flex w={"100px"} justifyContent={"space-around"} ml={"5px"} mt={'10px'}>
               <HiOutlineUser size={"20px"}/> <Text fontSize={"18px"} fontWeight={500}>Contacts</Text>
            </Flex>
           <Flex  w={"100px"} justifyContent={"space-around"} mt={'10px'}>
               <BiImport size={"20px"}/> <Text fontSize={"18px"} fontWeight={500} >Import</Text>
            </Flex>
           <Flex  w={"100px"} justifyContent={"space-around"} mt={"10px"}>
               <BiExport size={"20px"}/><Text fontSize={"18px"} fontWeight={500} >Export</Text>
             </Flex>
        </Box>
    </Box>
  )
}

export default Sidebar

