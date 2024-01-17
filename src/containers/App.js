import React from "react";

import Header from "../components/Header";
import SearchPanel from "./SearchPanel";
import PostList from "../components/PostList";
import PaginatedItems from './../components/PaginatedItems';

import fetchData from "../api";
import { useAppState } from "../app-context";
import "../containers/App.css";

function App() {
  const { state, dispatch } = useAppState();
  const { query, tagFilter, sortFilter, numericFilter, page } = state;

  React.useEffect(() => {
    const abortController = new AbortController();

    fetchData(query, tagFilter, sortFilter, numericFilter, page).then(
      (data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            data: data.hits,
            nbHits: data.nbHits,
            processingTimeMS: data.processingTimeMS,
            page: data.page,
            nbPages: data.nbPages,
          },
        });
      }
    );

    return () => {
      abortController.abort();
    }
  }, [query, page]);

  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <PostList />
      <PaginatedItems />
    </div>
  );
}
export default App;
