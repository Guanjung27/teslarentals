
import { Link } from 'react-router-dom';

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Homepage() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Tesla
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              MarketPlace
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Buy and Sell at the tip of your fingers
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link to="/signup">
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign Up
            </Button>
            </Link>
            <Link to="/login">
            <Button rounded={'full'}>Login</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={ 'cover'}
           src={
            "https://149494764.v2.pressablecdn.com/wp-content/uploads/2021/07/Tesla-Logo-Hero.jpeg"
          }
        />
      </Flex>
    </Stack>
  );
}