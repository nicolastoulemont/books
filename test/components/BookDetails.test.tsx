import React from 'react'
import { render } from '../utils'
import { fakeBook } from '../data'
import { BookDetails } from '../../components/BookDetails'

describe('Book details page', () => {
  it('Correct rendering of book elements', () => {
    const { getByText, getByAltText } = render(
      <BookDetails book={fakeBook} />,
      {}
    )

    const cover = getByAltText(fakeBook.description)
    expect(cover).toBeInTheDocument()
    const title = getByText(fakeBook.title)
    expect(title).toBeInTheDocument()
    const authorName = getByText(fakeBook.authorName)
    expect(authorName).toBeInTheDocument()
    const isbn = getByText(`ISBN: ${fakeBook.isbn}`)
    expect(isbn).toBeInTheDocument()
    const firstOtherBook = getByText(fakeBook.otherBooksFromSameAuthor[0].title)
    expect(firstOtherBook).toBeInTheDocument()
    expect(firstOtherBook).toHaveAttribute(
      'href',
      `/${fakeBook.otherBooksFromSameAuthor[0].id}`
    )
    const backToListLink = getByText('Back to list')
    expect(backToListLink).toHaveAttribute('href', '/')
  })
})
