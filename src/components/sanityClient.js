import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ek0xmsyw',  // Taken from your CLI config
  dataset: 'production',  // Same dataset
  apiVersion: '2023-09-01',  // Use a date string for versioning (can be today's date)
  useCdn: true,  // Enable CDN for faster response times
});
