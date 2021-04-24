import React from 'react'
import NextLink from 'next/link'
import { BookWithMetaData } from 'data/types'
import {
  Image,
  Heading,
  Text,
  Link,
  Flex,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

export function BookDetails({ book }: { book: BookWithMetaData }) {
  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.2) 0px 3px 8px"
      borderRadius="10px"
      p={{ base: 6, lg: 3 }}
      align={{ base: 'center', lg: 'flex-start' }}
      justify="center"
      flexDirection={{ base: 'column', lg: 'row' }}
      width="100%"
      maxW="1200px"
      mx="auto"
      height={{ base: 'auto', lg: '504px' }}
    >
      <Image
        src={book.cover}
        fallbackSrc={book.cover}
        alt={book.description}
        height={{ base: 'auto', lg: '100%' }}
        maxH={{ base: '400px', lg: 'none' }}
        objectFit="cover"
        width={{ base: '100%', lg: 'auto' }}
        borderRadius="10px"
      />
      <Flex
        width={{ base: '100%', lg: 'auto' }}
        flex="1"
        align="flex-start"
        justify="space-between"
        flexDir="column"
        height="100%"
        mt={{ base: 3, lg: 0 }}
        ml={{ base: 0, lg: 3 }}
      >
        <Box>
          <Heading as="h1" size="xl" mb={6}>
            {book.title}
          </Heading>
          <Text mb={1}>{book.authorName}</Text>
          <Text>ISBN: {book.isbn}</Text>
          {book.otherBooksFromSameAuthor.length > 0 ? (
            <Box mt={3}>
              <Heading as="h2" size="sm">
                {`Other book${
                  book.otherBooksFromSameAuthor.length > 1 ? 's' : ''
                } from the same author:`}
              </Heading>
              <UnorderedList ml={0}>
                {book.otherBooksFromSameAuthor.map((otherBook) => (
                  <ListItem listStyleType="none" my={2} key={otherBook.id}>
                    <NextLink href={`/${otherBook.id}`} passHref>
                      <Link color="blue.700" fontSize="sm">
                        {otherBook.title}
                      </Link>
                    </NextLink>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ) : null}
        </Box>

        <NextLink passHref href="/">
          <Link
            color="blue.700"
            fontSize="sm"
            alignSelf={{ base: 'flex-end', sm: 'flex-end' }}
            justifySelf={{ base: 'baseline' }}
          >
            Back to list
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}
