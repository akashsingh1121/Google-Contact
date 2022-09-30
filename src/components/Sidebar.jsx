import {useRef, useState} from 'react'
import { Box,Popover,PopoverBody, PopoverCloseButton,PopoverContent,PopoverHeader,PopoverTrigger,PopoverArrow,PopoverFooter, Button, Text, Flex,useDisclosure,ModalBody,ModalContent, ModalCloseButton,ModalHeader, ModalOverlay,Modal, Input } from '@chakra-ui/react'
import {HiOutlineUser} from "react-icons/hi"
import {BiExport,BiImport} from "react-icons/bi"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Exportdata, Importdata } from '../redux/action'

function Sidebar() {
  const [formdata,setFormdata] = useState();
  const dispatch = useDispatch();
  const main = new FormData();
  const total = useSelector(store=>store.Getdata.users);


  if(formdata){
    main.append("csv",formdata)
  }

  const submitfile = (e)=>{
     setFormdata(e.target.files[0])
  }
  const postinputfile = () =>{
    dispatch(Importdata(main));
  }
  const downloadfile = () =>{
    dispatch(Exportdata());
  }
  console.log(total)

  return (
    <Box p={6}>
        <NavLink to={"/newuser"}>
        <Button
         backgroundColor={"white"}
         borderRadius={"20px"}
         border={"none"}
         boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}>
            Create Contact</Button></NavLink>
        <Box  p={2}>
          <NavLink to={"/"}>
           <Flex w={"100px"} justifyContent={"space-around"} ml={"5px"} mt={'10px'}>
               <HiOutlineUser size={"20px"}/> <Text fontSize={"18px"} fontWeight={500}>Contacts: </Text><Text fontSize={"18px"} fontWeight={500} ml={"10px"}>{total?.length}</Text>
            </Flex></NavLink>
           <Flex  w={"100px"} cursor="pointer" justifyContent={"space-around"} mt={'10px'} >
               <BiImport size={"20px"}/> <CustomModal content={"Please select a CSV file. Your File should have Name, Image and Number."} buttonText1={"Import"} buttonText2={"Import"} heading={"Import"} change={submitfile} click={postinputfile}/> 
            </Flex>
           <Flex cursor={"pointer"}  w={"100px"} justifyContent={"space-around"} mt={"10px"} className="export">
               <BiExport size={"20px"}/><CustomModal buttonText1={"Export"} input={"none"} buttonText2={"Download File"} heading={"Export Contact"} content={"File will be download as CSV format"} click={downloadfile}/>
             </Flex>
        </Box>
    </Box>
  )
}

export default Sidebar

function CustomModal ({content,buttonText1,buttonText2,heading,input,change,click}){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitdata = () =>{
    click();
    onClose();
  }
  return(
    <Box>
      <Text fontSize={"20px"} fontWeight={500} onClick={onOpen}>
        {buttonText1}
      </Text>
    <Modal isOpen={isOpen} onClose={onClose} size={["xs","sm","sm","md"]}>
    <ModalOverlay />
    <ModalContent mr={[2,0,0,0]}>
      <ModalHeader>{heading}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
          <Text>{content}</Text>
          <Input type="file" mt={4} name="csv" display={input} onChange={change}/>
          <Button colorScheme='blue' mt={4} onClick={submitdata} >
             {buttonText2}
          </Button> 
      </ModalBody>
    </ModalContent>
  </Modal></Box>
  )
}