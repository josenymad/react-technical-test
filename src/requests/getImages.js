import axios from "axios";

const getImages = async (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    const endpoint = `https://images-api.nasa.gov/search?q=${query}`;
    try {
      const response = await axios.get(endpoint);
      const searchResults = response.data.collection.items;
      const imagesInSearchResults = searchResults.filter(
        (item) => item.data[0].media_type === "image"
      );
      const imageLinks = imagesInSearchResults.map(
        (image) => image.links[0].href
      );
      return imageLinks;
    } catch (error) {
      console.log(error);
    }
  }
};

export default getImages;
