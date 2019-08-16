import React, { Component } from 'react';
import Header from 'Header';
import moment from 'moment';
import SearchPanel from 'SearchPanel';
import PostList from 'PostList';
import fetchData from '../api';
import 'App.css';

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
        toDate: ""
    }

    componentDidMount() {
        fetchData(this.state.query,
                  this.state.tagFilter,
                  this.state.sortFilter,
                  this.state.numericFilter
                 ).then(value =>
                        this.setState({ data: value.hits }));
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter
                     ).then(value =>
                            this.setState({ data: value.hits }));
        });
    };

    updateTagFilter = (event, tag) => {
        this.setState({
            [event.target.name]: event.target.value,
            tagFilter: tag
        }, () => {
            fetchData(this.state.query,
                      this.state.tagFilter,
                      this.state.sortFilter,
                      this.state.numericFilter
                     ).then(value =>
                            this.setState({ data: value.hits }));
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
                      this.state.numericFilter
                     ).then(value =>
                            this.setState({ data: value.hits }));
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
        if (filter != "all-time") {
            this.setState({
                [event.target.name]: event.target.value,
                numericFilter: "created_at_i>" + updatedTimestamp
            }, () => {
                fetchData(this.state.query,
                          this.state.tagFilter,
                          this.state.sortFilter,
                          this.state.numericFilter
                         ).then(value =>
                                this.setState({ data: value.hits }));
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
                          this.state.numericFilter
                         ).then(value =>
                                this.setState({ data: value.hits }));
            });
        }
    };

    dropDownHandler = (element) => {
        this.dropDownElement = element;
    };
    
    showMenuHandler = (menu) => {
        this.setState({[menu]: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    closeMenu = (event) => {
        if (!this.dropDownElement.contains(event.target)) {
            this.setState({ menu1:false, menu2:false, menu3:false }, () => {
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
            this.setState({ showCalender:false }, () => {
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
                      this.state.numericFilter
                     ).then(value =>
                            this.setState({ data: value.hits }));
        });
    };

    render() {
        return (
            <div className="App">
              <Header onChange={this.onChange} value={this.state.query}/>
              <SearchPanel showMenuHandler={this.showMenuHandler}
                           dropDownHandler={this.dropDownHandler}
                           updateTagFilter={this.updateTagFilter}
                           updateNumFilter={this.updateNumFilter}
                           updateSortFilter={this.updateSortFilter}
                           showCalender={this.state.showCalender}
                           menu1={this.state.menu1}
                           menu2={this.state.menu2}
                           menu3={this.state.menu3}
                           searchDropDownValue={this.state.searchDropDownValue}
                           byDropDownValue={this.state.byDropDownValue}
                           forDropDownValue={this.state.forDropDownValue}
                           customDateRange={this.customDateRange}
                           fromDate={this.state.fromDate}
                           toDate={this.state.toDate}
                           onChange={this.onChange}
                           showCalenderHandler={this.showCalenderHandler}
              />
              <PostList posts_data={this.state.data}/>
            </div>
        );
    }
};

export default App;
