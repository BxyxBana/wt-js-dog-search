import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_J03iQwYOR0w9r0p9gIisdFD9J7wofvn0punUVTFmmI5aeM1tlPjGZArrAeX7hdh6';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}
