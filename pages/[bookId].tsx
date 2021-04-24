import Head from 'next/head'
import { useBooksQuery } from '../data/fetchFn'
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'
import { BookDetails } from '../components'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export default function BookDetailsPage() {
  const { data, error } = useBooksQuery()
  const { query, push } = useRouter()

  const currentBook = useMemo(() => {
    if (!data || !(query && query.bookId)) return
    return data.find((book) => book.id === query.bookId)
  }, [data, query])

  // Wrong id -> redirect to list
  if (data && query?.bookId && !currentBook) {
    push('/')
  }

  return (
    <>
      <Head>
        <title>
          {currentBook
            ? `${currentBook.title} by ${currentBook.authorName}`
            : 'Book details page'}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" width="100%" minH="100vh" p={3}>
        {error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Something went wrong</AlertTitle>
            <AlertDescription>Contact support</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        ) : null}
        {currentBook ? (
          <BookDetails book={currentBook} />
        ) : (
          <Box
            // Skeleton placeholder
            width="100%"
            maxW="1200px"
            height="504px"
            mx="auto"
            boxShadow="rgba(0, 0, 0, 0.2) 0px 3px 8px"
            borderRadius="10px"
          />
        )}
      </Box>
    </>
  )
}
