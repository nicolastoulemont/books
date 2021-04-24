import faker from 'faker'

faker.seed(10)

export const fakeBook = {
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  subtitle: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  cover: faker.image.imageUrl(),
  website: faker.internet.url(),
  pages: faker.datatype.number(),
  published: faker.datatype.datetime().toISOString(),
  publisher: faker.company.companyName(),
  isbn: faker.datatype.uuid(),
  author: `${faker.name.title()}. ${faker.name.firstName()} ${faker.name.lastName()}`,
  authorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  otherBooksFromSameAuthor: [...Array(3)].map(() => ({
    id: faker.datatype.uuid(),
    title: faker.name.title(),
  })),
}
