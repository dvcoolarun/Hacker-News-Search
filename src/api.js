const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';
const HN_SORT_BY_DATE= 'http://hn.algolia.com/api/v1/search_by_date?';

const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

const fetchData = (query) =>{
    return (
        fetch(HN_BASE_URL + query)
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error))
    );
};

const fetchDataByDate = () => {
    return (
        fetch(HN_SORT_BY_DATE)
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error))
    );
};

export default fetchData;
export { fetchDataByDate };

      
