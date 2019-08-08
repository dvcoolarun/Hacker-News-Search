const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = (query) =>{
    return (
        fetch(HN_BASE_URL + query)
            .then(response => response.json())
    );
};

export default fetchStories;
      
