const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';
const HN_SORT_BY_DATE= 'https://hn.algolia.com/api/v1/search_by_date?query=';

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

const fetchData = (query, tagFilter, sortFilter, numericFilter, page) => {
    return (
        sortFilter === "popularity"
            ? (
                fetch(HN_BASE_URL +
                      query +
                      "&tags=" +
                      tagFilter +
                      "&numericFilters=" +
                      numericFilter +
                      "&page=" +
                      page) 
                
                    .then(handleErrors)
                    .then(response => response.json())
                    .catch(error => console.log(error))
            )
            : (
                fetch(HN_SORT_BY_DATE +
                      query +
                      "&tags=" +
                      tagFilter +
                      "&numericFilters=" +
                      numericFilter +
                      "&page=" +
                      page)
                
                    .then(handleErrors)
                    .then(response => response.json())
                    .catch(error => console.log(error))
            )
    );
};

export default fetchData;

      
