import React from 'react'
import { GridItem, Image, Heading, Text, Link, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BookWithMetaData } from 'data/types'

export function BookThumbnail({ book }: { book: BookWithMetaData }) {
  return (
    <GridItem
      boxShadow="rgba(0, 0, 0, 0.2) 0px 3px 8px"
      borderRadius="10px"
      p={{ base: 6, sm: 3 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: 'column', sm: 'row' }}
      height={{ base: 'auto', sm: '150px' }}
      transition="box-shadow 0.3s ease-in-out"
      _hover={{
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 12px',
      }}
    >
      <Image
        src={book.cover}
        fallbackSrc={book.cover}
        alt={book.description}
        height={{ base: 'auto', sm: '100%' }}
        maxH={{ base: '150px', sm: 'none' }}
        objectFit="cover"
        width={{ base: '100%', sm: 'auto' }}
        borderRadius="10px"
      />
      <Flex
        width={{ base: '100%', sm: 'auto' }}
        flex="1"
        align="flex-start"
        justify="flex-start"
        flexDir="column"
        height="100%"
        mt={{ base: 3, sm: 0 }}
        ml={{ base: 0, sm: 3 }}
      >
        <Heading size="md">{book.title}</Heading>
        <Text>{book.authorName}</Text>
        <NextLink passHref href={`/${book.id}`}>
          <Link
            color="blue.700"
            fontSize="sm"
            alignSelf={{ base: 'flex-end', sm: 'flex-start' }}
          >
            More information
          </Link>
        </NextLink>
      </Flex>
    </GridItem>
  )
}
