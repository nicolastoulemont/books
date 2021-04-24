import Head from 'next/head'
import { useBooksQuery } from '../data/fetchFn'
import { BookThumbnail } from '../components'
import {
  Spinner,
  Box,
  Flex,
  Grid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'

export default function Home() {
  const { data, isLoading, error } = useBooksQuery()

  return (
    <>
      <Head>
        <title>Book list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" width="100%" minH="100vh">
        {error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Something went wrong</AlertTitle>
            <AlertDescription>Contact support</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        ) : null}
        {isLoading ? (
          <Flex width="100%" align="center" justify="center">
            <Spinner />
          </Flex>
        ) : null}
        <Grid
          templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2, 1fr)' }}
          gap={6}
          p={3}
          maxW="1200px"
          mx="auto"
        >
          {data?.map((book) => (
            <BookThumbnail key={book.id} book={book} />
          ))}
        </Grid>
      </Box>
    </>
  )
}
