import React from "react";
import ReactPaginate from "react-paginate";
import { useAppState } from "../app-context";

const PaginatedItems = () => {
    const { state, dispatch } = useAppState();

    const pageCountHandler = (event) => {
        dispatch({
            type: "UPDATE_PAGE",
            payload: {
                page: event.selected,
                active: event.selected
            }
        });
    };

    return ( <
        ReactPaginate previousLabel = { "<<" }
        nextLabel = { ">>" }
        breakLabel = { "..." }
        breakClassName = { "break-me" }
        pageCount = { state.nbPages }
        marginPagesDisplayed = { 2 }
        pageRangeDisplayed = { 5 }
        onPageChange = { pageCountHandler }
        containerClassName = { "pagination" }
        pageLinkClassName = { "page-link" }
        activeClassName = { "active" }
        />
    );
}

export default PaginatedItems;