export interface Book {
  id: string
  cover: string
  isbn: string
  title: string
  subtitle: string
  author: string
  published: string
  publisher: string
  pages: number
  description: string
  website: string
}

export type OtherBooksFromSameAuthor = Array<{ id: string; title: string }>

export interface BookWithMetaData extends Book {
  authorName: string
  otherBooksFromSameAuthor: OtherBooksFromSameAuthor
}
