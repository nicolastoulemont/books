import React from 'react'
import { render } from '../utils'
import { fakeBook } from '../data'
import { BookThumbnail } from '../../components/BookThumbnail'

describe('Home page', () => {
  it('Correct rendering of book elements', () => {
    const { getByText, getByAltText } = render(
      <BookThumbnail book={fakeBook} />,
      {}
    )
    const cover = getByAltText(fakeBook.description)
    expect(cover).toBeInTheDocument()
    const title = getByText(fakeBook.title)
    expect(title).toBeInTheDocument()
    const authorName = getByText(fakeBook.authorName)
    expect(authorName).toBeInTheDocument()
    const moreInfoLink = getByText('More information')
    expect(moreInfoLink).toHaveAttribute('href', `/${fakeBook.id}`)
  })
})
