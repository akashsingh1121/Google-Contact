import { Avatar, Flex, Box, Input, InputGroup, InputLeftElement, Heading } from '@chakra-ui/react'
import React from 'react'
import {IoMdMenu, IoMdContact} from "react-icons/io"
import {BiHelpCircle} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"
import {GrSearch} from "react-icons/gr";
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Navbar({onclick,onchange}) {
 
  return (
    <Flex  justifyContent={"space-between"} p={4}>
      <Flex>
           <Box onClick={onclick} mt={'5px'}><IoMdMenu size={"25px"}/></Box>
           <Box ml={"20px"} className={"phoneview"}><IoMdContact size={"38px"}/></Box>
           <Link to={"/"}><Heading ml={"5px"} mt={[0,0,"2px","4px"]} fontSize={"2xl"}>Contacts</Heading></Link>
      </Flex>
     
      <InputGroup ml={'40px'} w={"50%"} className="search" mb={"10px"}>
       <InputLeftElement
         pointerEvents='none'
         children={<GrSearch size={"20px"}/>}
        />
         <Input variant={"filled"}  type='text' placeholder='Search'  onChange={onchange}/>
      </InputGroup>
      <Flex w={"20%"} justifyContent={"space-around"} className="profile">
          <Box mt={"5px"}><BiHelpCircle size={"20px"}/></Box>
          <Box mt={"5px"}><FiSettings size={"17px"}/></Box>
          <Avatar size={"sm"} src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9' />
      </Flex>
    </Flex>
  )
}

export default Navbar