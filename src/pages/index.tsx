import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Image, Text, Stack, Spinner } from '@chakra-ui/react'
import { Header } from '../components/Header'
import Link from 'next/link'

export default function Home() {

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
    >
      <Header />
      <Flex
        w="100%"
        h='368'
        alignSelf="center"
        justifyContent="center"
      >
        <Image src='Banner.svg' alt='banner' />
      </Flex>
      <Flex
        w="1160"
        h='145'
        alignSelf="center"
        justifyContent="center"
        px={4}
        py={6}
        pl={8}
      >
        <Image src='traveltypes.svg' alt='banner' />
      </Flex>
      <Flex
        w="1160"
        h="145"
        alignSelf='center'
        justifyContent='center'
        px={4}
        py={8}
        flexDir='column'
      >
        <Stack spacing="4">
          <Text fontSize="2xl" textAlign='center' >Vamos Nessa ?</Text>
        </Stack>
      </Flex>
      <Flex
        w="80%"
        h='368'
        alignSelf="center"
        justifyContent="center"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={'fade'}
          pagination={{
            "clickable": true
          }}
          navigation={true}
          className="mySwiper"
          parallax={true}
        >
          <SwiperSlide>
            <Flex
              position="relative"
            >
              <img src={'americanorte.jpg'} />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                position="absolute"
              >
                <Flex
                  position="relative"
                  alignSelf="center"
                  bg="blackAlpha.500"
                  color="white"
                >

                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                  >
                    <Link href={{ pathname: '/continent', query: { continente: 'an' } }}>
                      América do Norte
                    </Link>
                  </Text>

                </Flex>
                <Flex
                  position='relative'
                  alignSelf="center"
                  justifyContent="center"
                  bg="blackAlpha.500"
                  color="white"
                  pt={4}
                >
                  <Text>O Continente mais antigo</Text>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              position="relative"
            >
              <img src={'americasul.jpg'} />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                position="absolute"
              >
                <Flex
                  position="relative"
                  alignSelf="center"
                  fontSize="3xl"
                  bg="blackAlpha.500"
                  color="white"
                >
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"

                  >
                    <Link href={{ pathname: '/continent', query: { continente: 'as' } }}>
                      América do Sul
                    </Link>
                  </Text>
                </Flex>
                <Flex
                  position='relative'
                  alignSelf="center"
                  justifyContent="center"
                  bg="blackAlpha.500"
                  color="white"
                  pt={4}
                >
                  O continente mais antigo
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              position="relative"
            >
              <img src={'asia.jpg'} />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                position="absolute"
              >
                <Flex
                  position="relative"
                  alignSelf="center"
                  fontSize="3xl"
                  bg="blackAlpha.500"
                  color="white"
                >
                  <Link href={{ pathname: '/continent', query: { continente: 'asia' } }}>
                    Asia
                  </Link>
                </Flex>
                <Flex
                  position='relative'
                  alignSelf="center"
                  justifyContent="center"
                  bg="blackAlpha.500"
                  color="white"
                  pt={4}
                >
                  O continente mais antigo
                </Flex>
              </Flex>
            </Flex>

          </SwiperSlide>
          <SwiperSlide>
            <Flex
              position="relative"
            >
              <img src={'africa.jpg'} />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                position="absolute"
              >
                <Flex
                  position="relative"
                  alignSelf="center"
                  fontSize="3xl"
                  bg="blackAlpha.500"
                  color="white"
                >
                  <Link href={{ pathname: '/continent', query: { continente: 'africa' } }}>
                    África
                  </Link>
                </Flex>
                <Flex
                  position='relative'
                  alignSelf="center"
                  justifyContent="center"
                  bg="blackAlpha.500"
                  color="white"
                  pt={4}
                >
                  O continente mais antigo
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              position="relative"
            >
              <img src={'Europe_slide.svg'} />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                position="absolute"
              >
                <Flex
                  position="relative"
                  alignSelf="center"
                  fontSize="3xl"
                  bg="blackAlpha.500"
                  color="white"
                >
                  <Link href={{ pathname: '/continent', query: { continente: 'eu' } }}>
                    Europa
                  </Link>
                </Flex>
                <Flex
                  position='relative'
                  alignSelf="center"
                  justifyContent="center"
                  bg="blackAlpha.500"
                  color="white"
                  pt={4}
                >
                  O continente mais antigo
                </Flex>
              </Flex>
            </Flex>

          </SwiperSlide>
          <SwiperSlide>
            <Flex
              position="relative"
            >
              <img src={'oceania.jpg'} />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                position="absolute"
              >
                <Flex
                  position="relative"
                  alignSelf="center"
                  fontSize="3xl"
                  bg="blackAlpha.500"
                  color="white"
                >
                  <Link href={{ pathname: '/continent', query: { continente: 'oceania' } }}>
                    Oceania
                  </Link>
                </Flex>
                <Flex
                  position='relative'
                  alignSelf="center"
                  justifyContent="center"
                  bg="blackAlpha.500"
                  color="white"
                  pt={4}
                >
                  O continente mais antigo
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>

      </Flex>
    </Flex >

  )
}
