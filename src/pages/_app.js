import '@/styles/globals.css'

import UIWrapper from '../Components/UI/UIWrapper'
import { MantineProvider } from '@mantine/core'

import { DefaultSeo } from 'next-seo';
export default function App({ Component, pageProps }) {
  return <>
  
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{
    colors: {
     whiteM: ["#fff"],
     redM: ["#E31937"],
     grayM: ["#C9CBCC", "#AEB0B2", "#717074"],
    }
  }}>
    
  <UIWrapper>

   
   <Component {...pageProps} />
 
   
  </UIWrapper>
  </MantineProvider>
  </>
}
