import React, { useEffect, useState } from 'react'

import axios from "axios"
import{
  SimpleGrid,
  Box,
  Center,
  VStack,
  Img,
  Text,
  Button,
 
} from "@chakra-ui/react"

function Mens() {
    const[data,setData]=useState([])
    const getdata=()=>{
       return axios.get(" http://localhost:8080/men").then((res)=>{

setData(res.data)

          
        })
       
      
    }
    useEffect(()=>{
        getdata()
    })
  return (
    <div id='card'>
      <h1>SHOP ALL MEN'S</h1>

       
      <SimpleGrid columns={4} p={10} gap={5} className="main_container">
      {data.map((item)=>(
        <Box className="mens"
        key={item.id}
        borderRadius={"10px"}
        boxShadow={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        
        >
          <Center>
            <Img 
            borderRadius={"10px"}
            height={"300px"}
            width={"300px"}
            src={item.image}
            />
          </Center>

          <VStack spacing={2} p={2}>
            <Button 
            style={{border:"0.1px solid black",backgroundColor:"black",color:"white"}}
            >Quick Shop</Button>
            <Text 
            h={"150px"}
            lineHeight="1.5em"
            height={"4em"}
            overflow={"hidden"}
            
            className="description">{item.description}</Text>
            <Text className="name" fontSize={"20px"} fontWeight="2px">{item.name}</Text>
            <Text className="cost">{item.price}</Text>
            
            
           
           
            
          </VStack>
        </Box>
      ))}
      </SimpleGrid>
      
    </div>
  )
}

export default Mens