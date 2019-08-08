import React, { Component } from 'react';
import Header from 'Header';
import SearchPanel from 'SearchPanel';
import PostList from 'PostList';
import {data} from 'static-data';
import 'App.css';

class App extends Component {
    state = {
        menu1: false,
        menu2: false,
        menu3: false,
        showCalender: false,
        /* query: "[stories][popularity][all-time]" */
    }

    updateQuery = (query) => {
        /* 

          * If first **click** on the button clear the **query** state.

          * Then update the state for specific click **[query].

          * And keep appending to the old [query] state.

          * Based on the query value(** using if-else condition).

          * Calculating What to append to the old query state, **** this.setState({ query: [query] }) ****

          * Calculation of Time(Logic (** using moment.js))
             ** All-Time (based on popularity)
             ** Last-24H-hours (calculation based on current time)
             ** Past-Week (calculate based on time right now, (** past 7 days))
             ** Past-Month (calculate time, past one month)
             ** Past-Year (calculate the time, ** past one year from now on)

                     this.setState({ query: [query] }, () => {
                        // call fetchstories function
                     });


       */
    }

    dropDownHandler = (element) => {
        this.dropDownElement = element;
    }

    showCalenderHandler = () => {
        this.setState({ showCalender: true }, () => {
            document.addEventListener('click', this.closeCalender);
        });
    }

    closeCalender = (event) => {
        if (!this.dropDownElement.contains(event.target)) {
            this.setState({ showCalender:false }, () => {
                document.removeEventListener('click', this.closeCalender);
            });
        }
    }

    customDateRange = (fromDate, toDate) => {

        /* Building the query
        ** get the old query state
        ** Updated by other clicks
        */
        /* fetchdata */
    }
    
    showMenuHandler = (menu) => {
        this.setState({ [menu]: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = (event) => {
        if (!this.dropDownElement.contains(event.target)) {
            this.setState({ menu1:false, menu2:false, menu3:false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }
        
    render() {
        return (
            <div className="App">
              <Header/>
              <SearchPanel showMenuHandler={this.showMenuHandler}
                           dropDownHandler={this.dropDownHandler}
                           updateQuery={this.updateQuery}
                           showCalender={this.showCalender}
                           menu1={this.state.menu1}
                           menu2={this.state.menu2}
                           menu3={this.state.menu3}/>
              <PostList posts_data={data}/>
            </div>
        );
    }
}

export default App;
