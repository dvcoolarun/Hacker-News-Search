import axios from 'axios';

const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';
const HN_SORT_BY_DATE = 'https://hn.algolia.com/api/v1/search_by_date?query=';

const handleErrors = (error) => {
    if (error.response) {
        throw new Error(error.response.data);
    } else if (error.request) {
        throw new Error('No response received from the server.');
    } else {
        throw new Error('An error occurred while making the request.');
    }
};

const fetchData = async(query, tagFilter, sortFilter, numericFilter, page) => {
    const url = sortFilter === 'popularity' ? HN_BASE_URL : HN_SORT_BY_DATE;

    try {
        const response = await axios.get(`${url}${query}&tags=${tagFilter}&numericFilters=${numericFilter}&page=${page}`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
};

export default fetchData;