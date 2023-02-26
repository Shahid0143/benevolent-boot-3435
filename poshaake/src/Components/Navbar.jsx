import React from 'react'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Img,
   
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function  Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box className='fix'>
        <Flex
          bg={useColorModeValue('rgb(51,51,51)', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'90px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex style={{color:"teal"}}
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex    flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', 'white')}>
                <div className='osma'>
              <h1><b>POSHAAQUE</b></h1>
              </div>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
          
            direction={'row'}
            spacing={10}>
              <Img width="13%" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt="osam" />
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              color={'white'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={400}
              padding={'1.2rem'}
              color={'white'}
              bg={'red.300'}
              href={'#'}
              _hover={{
                bg: 'black',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'white');
    const linkHoverColor = useColorModeValue('green.400', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack  direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'green.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack style={{color:"black"}} spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS  = [
    {
      label: 'Men',
      children: [
        {
          label: 'Shop All Men',
          href: '/Mens',
        },
        {
          label: 'New Arrivals',
          href: '/Menpage',
        },
        {
          label: 'Best Sellers',
          href: '#',
        },
        {
          label: 'Featured',
          href: '#',
        },
        {
          label: 'jackets & Vests',
          href: '#',
        },
        {
          label: 'Fleece',
          href: '#',
        },
        {
          label: 'Shirts',
          href: '#',
        },
        {
          label: 'Baselayer',
          href: '#',
        },
        {
          label: 'Pants & Shorts',
          href: '#',
        },
        {
          label: 'Big & Tall',
          href: '#',
        },
        {
          label: 'Shoes',
          href: '#',
        },
        
      ],
    },
    {
      label: 'Women',
      children: [
        {
          label: 'Shop All Women',
          href: '#',
        },
        {
          label: 'New Arrival',
          href: '#',
        },
        {
          label: 'Best Sellers',
          href: '#',
        },
        {
          label: 'Featured',
          href: '#',
        },
        {
          label: 'Jackets & Vests',
          href: '#',
        },
        {
          label: 'Fleece',
          href: '#',
        },
        {
          label: 'Tops',
          href: '#',
        },
        {
          label: 'Dresses',
          href: '#',
        },
        {
          label: 'Plus Sizes',
          href: '#',
        },
        {
          label: 'Shoes',
          href: '#',
        },
        {
          label: 'Accessories',
          href: '#',
        },
        
      ],
    },
    {
      label: 'Kids',
      children: [
        {
          label: 'Shop All Kids',
          href: '#',
        },
        {
          label: 'New Arrival',
          href: '#',
        },
        {
          label: 'Best Sellers',
          href: '#',
        },
        {
          label: 'Featured',
          href: '#',
        },
        {
          label: 'Boys',
          href: '#',
        },
        {
          label: 'Girls',
          href: '#',
        },
        {
          label: 'Toddler & Baby',
          href: '#',
        },
        {
          label: 'Jackets & Vests',
          href: '#',
        },
        {
          label: 'Fleece',
          href: '#',
        },
        {
          label: 'Shoes',
          href: '#',
        },
        {
          label: 'Accessories',
          href: '#',
        },
        
      ],
    },
    {
      label: 'Foot Wear',
      children: [
        {
          label: 'Shop All Footwear',
          href: '#',
        },
        {
          label: 'New Arrival',
          href: '#',
        },
        {
          label: 'Best Sellers',
          href: '#',
        },
        {
          label: 'Mens Shoes',
          href: '#',
        },
        {
          label: 'Womens Shoes',
          href: '#',
        },
        {
          label: 'Kids Shoes',
          href: '#',
        },
        {
          label: 'Wide FootWear',
          href: '#',
        },
        {
          label: 'FootWear Finder',
          href: '#',
        },
        {
          label: 'Collection',
          href: '#',
        },        
      ],
    },

    {
     
      label: 'Activity',
      children: [
        {
          label: 'Shop All Activity',
          href: '#',
        },
        {
          label: 'Ski & Snow',
          href: '#',
        },
        {
          label: 'Hiking',
          href: '#',
        },
        {
          label: 'Fishing',
          href: '#',
        },
        {
          label: 'Hunting',
          href: '#',
        },
        {
          label: 'Trail Running',
          href: '#',
        },
        {
          label: 'Golf',
          href: '#',
        },
        {
          label: 'Camping Gear',
          href: '#',
        },
        {
          label: 'Equipment',
          href: '#',
        },
        {
          label: 'Blankets & Bedding',
          href: '#',
        },
      ],
    },

    {
      label: 'Featured',
      children: [
        {
          label: 'New Arrivals',
          href: '#',
        },
        {
          label: 'Best Sellers',
          href: '#',
        },
        {
          label: 'Collection',
          href: '#',
        },
        {
          label: 'Jacket Finder',
          href: '#',
        },
        {
          label: 'Technologies',
          href: '#',
        },
        {
          label: 'Tough Mother Outdoor Guide',
          href: '#',
        },
        {
          label: 'Columbia Ambassadors',
          href: '#',
        },
        {
          label: 'Columbia Greater Rewards',
          href: '#',
        },
      ],

    },
  ];

