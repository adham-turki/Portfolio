import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ek0xmsyw',  // Your Sanity project ID
  dataset: 'production',  // The dataset you're using (default is 'production')
  apiVersion: '2024-09-22',  // Use the latest API version or specify one
  token: 'skKgARa9fdQXIIxEZm1Q47ze3IBdIngkP8YUlcVfjQbqNu800OqrHU9Wo6bY5MoCIkWFH9OrHZbLrr1drOlyJkN1KWcu5EZ9vYu5YWh2B0F7McIvtJP732mb1s1hT4gBOGRZJqfg3rO3olTtoNYVl9BRZwGALbUMwW293gENhvJFAqpnf52w',  // Your token if using private
  useCdn: true,  // Enable the CDN for faster reads
});
