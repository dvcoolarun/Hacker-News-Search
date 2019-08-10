import React, { Component } from 'react';
import Header from 'Header';
import SearchPanel from 'SearchPanel';
import PostList from 'PostList';
import fetchData, { fetchDataByDate } from '../api';
import 'App.css';

class App extends Component {
    state = {
        menu1: false,
        menu2: false,
        menu3: false,
        clickCount: 0,
        showCalender: false,
        query: "",
        data: [],
        searchDropDownValue: "Stories",
        byDropDownValue: "Popularity",
        forDropDownValue: "All Time",
        tagFilter: "",
        sortFilter: "",
        numericFilter: ""
    }

    componentDidMount() {
        fetchData(this.state.query)
            .then(value => this.setState({ data: value.hits }));
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            fetchData(this.state.query)
                .then(value => this.setState({ data: value.hits }));
        });
    };

    updateTagFilter = (event, tag) => {
        this.setState({
            [event.target.name]: event.target.value,
            tagFilter: tag
        }, () => {
            console.log(this.state.tagFilter);
        });
    };
    
    updateNumFilter = (event, filter) => {
        this.setState({
            [event.target.name]: event.target.value,
            numericFilter: filter
        }, () => {
            console.log(this.state.numericFilter);
        });
    };

    updateSortFilter = (event, sort) => {
        this.setState({
            [event.target.name]: event.target.value,
            sortFilter: sort
        }, () => {
            console.log(this.state.sortFilter);
        });

    }

    dropDownHandler = (element) => {
        this.dropDownElement = element;
    };

    showCalenderHandler = () => {
        this.setState({ showCalender: true }, () => {
            document.addEventListener('click', this.closeCalender);
        });
    };

    closeCalender = (event) => {
        if (!this.dropDownElement.contains(event.target)) {
            this.setState({ showCalender:false }, () => {
                document.removeEventListener('click', this.closeCalender);
            });
        }
    };

    customDateRange = (fromDate, toDate) => {

        /* Building the query
        ** get the old query state
        ** Updated by other clicks
        */
        /* fetchdata */
    };
    
    showMenuHandler = (menu) => {
        this.setState({ [menu]: true }, () => {
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
        
    render() {
        return (
            <div className="App">
              <Header onChange={this.onChange} value={this.state.query}/>
              <SearchPanel showMenuHandler={this.showMenuHandler}
                           dropDownHandler={this.dropDownHandler}
                           updateTagFilter={this.updateTagFilter}
                           updateNumFilter={this.updateNumFilter}
                           updateSortFilter={this.updateSortFilter}
                           showCalender={this.showCalender}
                           menu1={this.state.menu1}
                           menu2={this.state.menu2}
                           menu3={this.state.menu3}
                           searchDropDownValue={this.state.searchDropDownValue}
                           byDropDownValue={this.state.byDropDownValue}
                           forDropDownValue={this.state.forDropDownValue}
              />
              <PostList posts_data={this.state.data}/>
            </div>
        );
    }
};

export default App;
