import { Avatar, Flex, Box, Input, InputGroup, InputLeftElement, Heading } from '@chakra-ui/react'
import React from 'react'
import {IoMdMenu, IoMdContact} from "react-icons/io"
import {BiHelpCircle} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"
import {GrSearch} from "react-icons/gr"



function Navbar({onclick}) {
  return (
    <Flex  justifyContent={"space-between"} p={4}>
      <Flex>
           <Box onClick={onclick} mt={'5px'}  ><IoMdMenu size={"25px"}/></Box>
           <Box ml={"20px"}><IoMdContact size={"38px"}/></Box>
           <Heading ml={"5px"} mt={"4px"} fontSize={"2xl"}>Contacts</Heading>
      </Flex>
     
      <InputGroup ml={'40px'} w={"50%"}>
       <InputLeftElement
         pointerEvents='none'
         children={<GrSearch/>}
        />
         <Input variant={"filled"}  type='text' placeholder='Search' />
      </InputGroup>
      <Flex w={"20%"} justifyContent={"space-around"}>
          <Box mt={"5px"}><BiHelpCircle size={"20px"}/></Box>
          <Box mt={"5px"}><FiSettings size={"17px"}/></Box>
          <Avatar size={"sm"} src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9' />
      </Flex>
    </Flex>
  )
}

export default Navbar