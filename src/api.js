import axios from 'axios';

//fetch data

const searchImages = async (term) => {
   const response =  await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID rMPFKK8U7lR10h_DZY8eWxmWuXBOoQxTkZKE8bUjW6Q'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;