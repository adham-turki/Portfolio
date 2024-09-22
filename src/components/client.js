
// sanity.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ek0xmsyw',
  dataset: 'production',
  apiVersion: '2024-09-22',
  token: 'skKgARa9fdQXIIxEZm1Q47ze3IBdIngkP8YUlcVfjQbqNu800OqrHU9Wo6bY5MoCIkWFH9OrHZbLrr1drOlyJkN1KWcu5EZ9vYu5YWh2B0F7McIvtJP732mb1s1hT4gBOGRZJqfg3rO3olTtoNYVl9BRZwGALbUMwW293gENhvJFAqpnf52w',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

