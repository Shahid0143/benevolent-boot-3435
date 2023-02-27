import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  
import {FcGoogle} from 'react-icons/fc';
import { Link, Navigate } from 'react-router-dom';
import {auth,provider} from '../config'
import { signInWithPopup } from 'firebase/auth';
  
  export default function SimpleCard() {

    const[value,setValue]=useState('')
    const[login,setLogin]=useState(false)

    const handleLogin=()=>{
  
        signInWithPopup(auth,provider).then((data)=>
        {
        setValue(data.user.email)
        console.log(data.user)
        setLogin(true)
        localStorage.setItem('email',data.user.email)
        localStorage.setItem('login',true)
        localStorage.setItem('data',JSON.stringify(data))
        })

    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>

                <hr />
                
      {  value?  <Navigate to={'/'}/>:<Button style={{backgroundColor:"blue"}}  leftIcon={<FcGoogle/>}
                  onClick={handleLogin}
                >Google</Button>}
                 <Text>If you don't have Account <Link to="/signup" style={{color:'blue'}}><strong>Register here!</strong></Link></Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }