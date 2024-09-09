import axios from 'axios';

async function fetchSubtitles(searchTerm, orderingField) {
  const response = await axios.get('/api/subtitles/', {
    params: {
      search: searchTerm,         // Search keyword
      ordering: orderingField     // Ordering field, e.g., 'rating' or '-number_of_downloads'
    }
  });
  return response.data;  // The filtered or ordered list of subtitles
}
