import { faker } from '@faker-js/faker';

export const generateBooks = (seed, language, likes, reviews, count) => {
    faker.seed(seed); // Reproducibilidad
    faker.locale = language; // Cambia el idioma dinámicamente

    const genres = {
        en: ['Mystery', 'Adventure', 'Love', 'Dreams', 'Shadows', 'War', 'Destiny'],
        de: ['Geheimnis', 'Abenteuer', 'Liebe', 'Träume', 'Schatten', 'Krieg', 'Schicksal'],
        fr: ['Mystère', 'Aventure', 'Amour', 'Rêves', 'Ombres', 'Guerre', 'Destinée'],
    };

    const books = [];
    for (let i = 0; i < count; i++) {
        const isbn = faker.string.uuid();

        // Generar título basado en género e idioma
        const genre = faker.helpers.arrayElement(genres[language] || genres['en']);
        const adjective = faker.word.adjective();
        const title = `${adjective.charAt(0).toUpperCase() + adjective.slice(1)} ${genre}`;

        // Generar autor y editor adaptados al idioma
        const author = `${faker.person.firstName()} ${faker.person.lastName()}`;
        const publisher = faker.company.name();

        // Generar likes y reviews
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
