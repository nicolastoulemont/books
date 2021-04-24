import { render } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyles } from '../styles/GlobalStyles'

const queryClient = new QueryClient()

const Providers = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
