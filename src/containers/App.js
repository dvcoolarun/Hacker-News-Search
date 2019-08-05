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
        menu3: false
    }

    showMenuHandler = (menu) => {
        this.setState({ [menu]: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = (event, menu) => {
        if (!this.dropDownMenu.contains(event.target)) {
            this.setState({ [menu]: false }, () => {
                document.removeEventListener('click', this.closeMenu(menu));
            });
        }
    }
    
    dropDownHandler = (element) => {
        this.dropDownMenu = element;
    }
    
    render() {
        return (
            <div className="App">
              <Header/>
              <SearchPanel showMenuHandler={this.showMenuHandler}
                           dropDownHandler={this.dropDownHandler}
                           menu1={this.state.menu1}
                           menu2={this.state.menu2}
                           menu3={this.state.menu3}/>
              <PostList posts_data={data}/>
            </div>
        );
    }
}

export default App;
