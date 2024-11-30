import { faker } from '@faker-js/faker';

export const generateBooks = (seed, language, likes, reviews, count) => {
    faker.seed(seed); // Reproducibilidad
    faker.locale = language;

    const books = [];
    for (let i = 0; i < count; i++) {
        const isbn = faker.string.uuid();
        const title = faker.lorem.words(3);
        const author = `${faker.person.firstName()} ${faker.person.lastName()}`;
        const publisher = faker.company.name();
        const likesCount = Math.random() < likes % 1 ? Math.ceil(likes) : Math.floor(likes);
        const reviewsCount = Math.random() < reviews % 1 ? Math.ceil(reviews) : Math.floor(reviews);

        books.push({
            id: i + 1,
            isbn,
            title,
            author,
            publisher,
            likes: likesCount,
            reviews: reviewsCount,
        });
    }
    return books;
};
