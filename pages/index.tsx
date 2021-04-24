import Head from 'next/head'
import { useBooksQuery } from '../data/fetchFn'
import { Spinner, Box, Flex, Grid } from '@chakra-ui/react'
import { BookThumbnail } from '../components'

export default function Home() {
  const { data, isLoading } = useBooksQuery()

  return (
    <>
      <Head>
        <title>Book list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" width="100%" minH="100vh">
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
