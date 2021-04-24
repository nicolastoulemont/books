import { DATA_SOURCE_URL, DEFAULT_QUERY_CONFIG } from '../config'
import { Book, BookWithMetaData, OtherBooksFromSameAuthor } from './types'
import { useQuery } from 'react-query'
import fetch from 'node-fetch'

const getAuthorNameAndTitle = (author: string) =>
  author.includes('.') ? author.split('. ')[1] : author

type BookLookUp = Record<string, OtherBooksFromSameAuthor>

function addBookMetaData(books: Array<Book>): Array<BookWithMetaData> {
  const bookLookUpByAuthorName: BookLookUp = books.reduce((acc, book) => {
    const authorName = getAuthorNameAndTitle(book.author)
    if (acc[authorName]) {
      acc[authorName] = [...acc[authorName], { id: book.id, title: book.title }]
    } else {
      acc[authorName] = [{ id: book.id, title: book.title }]
    }

    return acc
  }, {})

  const booksWithMetaData = books?.map((book) => {
    const authorName = getAuthorNameAndTitle(book.author)
    return {
      ...book,
      authorName,
      otherBooksFromSameAuthor: bookLookUpByAuthorName[authorName].filter(
        (otherBook) => otherBook.id !== book.id
      ),
    }
  })
  return booksWithMetaData
}

async function fetchBooks(): Promise<Array<BookWithMetaData> | undefined> {
  try {
    const res = await fetch(DATA_SOURCE_URL)
    const json = (await res.json()) as { books: Array<Book> }
    return json.books ? addBookMetaData(json.books) : []
  } catch (error) {
    if (process.env.NODE_ENV === 'production') {
      // handle error logging based on the chosen error logging service (for example: sentry or others)
    } else {
      console.error(error)
      throw new Error(error)
    }
  }
}

export const useBooksQuery = () =>
  useQuery('books', fetchBooks, DEFAULT_QUERY_CONFIG)
