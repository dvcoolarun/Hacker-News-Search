import React, { Component } from 'react';
import Header from '../components/Header';
import moment from 'moment';
import SearchPanel from  '../containers/SearchPanel';
import PostList from '../components/PostList';
import ReactPaginate from 'react-paginate';
import fetchData from '../api';
import '../containers/App.css';

const AppContext = React.createContext();

class App extends Component {
    state = {
        menu1: false,
        menu2: false,
        menu3: false,
        showCalender: false,
        query: "",
        data: [],
        searchDropDownValue: "Stories",
        byDropDownValue: "Popularity",
        forDropDownValue: "All Time",
        tagFilter: "(story,comment,poll)",
        sortFilter: "popularity",
        numericFilter: "created_at_i>1171843200",
        fromDate: "",
        toDate: "",
        nbHits: "",
        processingTimeMS: "",
        page: 0,
        nbPages: 0,
        active: 0
    }

    componentDidMount() {
        fetchData(this.state.query,
                  this.state.tagFilter,
                  this.state.sortFilter,
                  this.state.numericFilter,
                  this.state.page
                 ).then(value =>
                        this.setState({
                            data: value.hits,
                            nbHits: value.nbHits,
                            processingTimeMS: value.processingTimeMS,
                            page: value.page,
                            nbPages: value.nbPages
                        }));
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter,
                      this.state.page
                     ).then(value =>
                            this.setState({
                                data: value.hits,
                                nbHits: value.nbHits,
                                processingTimeMS: value.processingTimeMS,
                                page: value.page,
                                nbPages: value.nbPages
                            }));
        });
    };

    pageCountHandler = (object) => {
        this.setState({
            page: object["selected"],
            active: object["selected"]
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter,
                      this.state.page
                     ).then(value =>
                            this.setState({
                                data: value.hits,
                                nbHits: value.nbHits,
                                processingTimeMS: value.processingTimeMS,
                                page: value.page,
                                nbPages: value.nbPages,
                            }));
        });
    }
    
    updateTagFilter = (event, tag) => {
        this.setState({
            [event.target.name]: event.target.value,
            tagFilter: tag
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter,
                      this.state.page
                     ).then(value =>
                            this.setState({
                                data: value.hits,
                                nbHits: value.nbHits,
                                processingTimeMS: value.processingTimeMS,
                                page: value.page,
                                nbPages: value.nbPages
                            }));
        });
    };
        
    updateSortFilter = (event, sort) => {
        this.setState({
            [event.target.name]: event.target.value,
            sortFilter: sort
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter,
                      this.state.page
                     ).then(value =>
                            this.setState({
                                data: value.hits,
                                nbHits: value.nbHits,
                                processingTimeMS: value.processingTimeMS,
                                page: value.page,
                                nbPages: value.nbPages
                            }));
        });
    };

    updateNumFilter = (event, filter) => {
        let filterMap = {
            "all-time": 1171843200,
            "last-24-hours": 1,
            "past-week": 7,
            "past-month": 30,
            "past-year": 365
        };
        let timeStamp = Math.floor(Date.now() / 1000);
        let updatedTimestamp = timeStamp - (filterMap[filter]
                                            * 24 * 60 * 60);
        if (filter !== "all-time") {
            this.setState({
                [event.target.name]: event.target.value,
                numericFilter: "created_at_i>" + updatedTimestamp
            }, () => {
                fetchData(this.state.query,
                          this.state.tagFilter,
                          this.state.sortFilter,
                          this.state.numericFilter,
                          this.state.page
                         ).then(value =>
                                this.setState({
                                    data: value.hits,
                                    nbHits: value.nbHits,
                                    processingTimeMS: value.processingTimeMS,
                                    page: value.page,
                                    nbPages: value.nbPages
                                }));
            });
        }
        else {
            this.setState({
                [event.target.name]: event.target.value,
                numericFilter: "created_at_i>" + filterMap[filter]
            }, () => {
                fetchData(this.state.query,
                          this.state.tagFilter,
                          this.state.sortFilter,
                          this.state.numericFilter,
                          this.state.page
                         ).then(value =>
                                this.setState({
                                    data: value.hits,
                                    nbHits: value.nbHits,
                                    processingTimeMS: value.processingTimeMS,
                                    page: value.page,
                                    nbPages: value.nbPages
                                }));
            });
        }
    };

    dropDownHandler = (element) => {
        this.dropDownElement = element;
    };
    
    showMenuHandler = (menu) => {
        this.setState({
            [menu]: true
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    closeMenu = (event) => {
        if (!this.dropDownElement.contains(event.target)) {
            this.setState({
                menu1:false,
                menu2:false,
                menu3:false
            }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    };

    showCalenderHandler = (event) => {
        this.setState({
            showCalender: true,
            [event.target.name]: event.target.value
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    closeCalender = (event) => {
        if (!this.dropDownElement.contains(event.target)) {
            this.setState({
                showCalender:false
            }, () => {
                document.removeEventListener('click', this.closeCalender);
            });
        }
    };

    customDateRange = () => {        
        const fromDateTimeStamp = Math.floor(
            moment(this.state.fromDate).format(
                    "X"));

        const toDateTimeStamp = Math.floor(
            moment(this.state.toDate).format(
                "X"));
        
        this.setState({
            numericFilter: "created_at_i>"
                + fromDateTimeStamp 
                + "," 
                + "created_at_i<"
                + toDateTimeStamp
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter,
                      this.state.page
                     ).then(value =>
                            this.setState({
                                data: value.hits,
                                nbHits: value.nbHits,
                                processingTimeMS: value.processingTimeMS,
                                page: value.page,
                                nbPages: value.nbPages
                            }));
        });
    };

    render() {
        return (
            <div className="App">
              <AppContext.Provider
                value = {{
                    value: this.state.query,
                    showMenuHandler: this.showMenuHandler,
                    dropDownHandler:this.dropDownHandler,
                    updateTagFilter:this.updateTagFilter,
                    updateSortFilter:this.updateSortFilter,
                    updateNumFilter:this.updateNumFilter,
                    showCalender:this.state.showCalender,
                    menu1:this.state.menu1,
                    menu2:this.state.menu2,
                    menu3:this.state.menu3,
                    searchDropDownValue:this.state.searchDropDownValue,
                    byDropDownValue:this.state.byDropDownValue,
                    forDropDownValue:this.state.forDropDownValue,
                    customDateRange:this.customDateRange,
                    fromDate:this.state.fromDate,
                    toDate:this.state.toDate,
                    onChange:this.onChange,
                    showCalenderHandler:this.showCalenderHandler,
                    nbHits:this.state.nbHits,
                    processingTimeMS:this.state.processingTimeMS,
                    page:this.state.page,
                    posts_data:this.state.data
                }}
              >
                <Header />
                <SearchPanel />
                <PostList />
                <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={this.state.nbPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.pageCountHandler}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-link'}
                  activeClassName={'active'}
                />
              </AppContext.Provider>
            </div>
        );
    }
};

export default App;
export {AppContext};
