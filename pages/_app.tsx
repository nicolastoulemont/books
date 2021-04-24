import { QueryClientProvider, QueryClient } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyles } from 'styles/GlobalStyles'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
