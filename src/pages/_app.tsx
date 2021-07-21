import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import 'swiper/swiper.min.css';
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import { makeServer } from "../services/mirage"


// import Swiper core and required modules
import SwiperCore, {
  EffectFade, Navigation, Pagination, Mousewheel, Keyboard, Parallax
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Mousewheel, Keyboard, Parallax]);


import "../styles/styles.css"

import { QueryClient, QueryClientProvider } from 'react-query';

if (process.env.NODE_ENV == 'development') {
  makeServer();
}

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
