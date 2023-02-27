import React, { useEffect, useState } from 'react'

import{
  SimpleGrid,
  Box,
  Center,
  VStack,
  Img,
  Text,
  Button,
  Select,
 

} from "@chakra-ui/react"
import Navbar from '../Components/Navbar'


function Addcard() {
    const [data,setData]=useState([])
    const localdata=JSON.parse(localStorage.getItem("data"))||[]
   
    useEffect(()=>{
        setData(localdata)
    },[])
    const Remove=(item)=>{
      localdata = localdata.filter(function (ele) {
        return ele.id != item.id;
      })
      localStorage.setItem("favourites", JSON.stringify(localdata));;
      setData(localdata)
    }
    return (
    
        <div >

          <Navbar/>
          <div className='kick'>
          <h1 ><strong>CARD ITEM</strong></h1>
          </div>
          <div style={{padding:"10px"}} className="sortingButtons">
           
           
          </div>
         
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
                    <h5 style={{color:"teal"}} className="name" fontSize={"20px"} fontWeight="bold">{item.name}</h5>
                    <h5
                    h={"150px"}
                    lineHeight="1.5em"
                    height={"4em"}
                    overflow={"hidden"}
                    
                    className="description">{item.description}</h5>
                    <Text className="cost">{item.price}</Text>
                   <Button onClick={(item)=>Remove(item)}>Remove</Button>
                 
                  
                   
                    
                  </VStack>
                </Box>
              ))}
              </SimpleGrid>
           
            </div>
           
          )
          
        
      
    }
    
    export default Addcard