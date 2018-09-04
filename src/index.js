import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home';
import Perfumes from './perfumes';
import SuggestPerfumes from './suggestPerfumes';
import PerfumeHouses from './perfumeHouses';
import ContactUs from './contactUs';
import Profiles from './profiles';
import Notes from './notes';
import PerfumeDetails from './perfumeDetails';


class App extends React.Component{
    render(){
        return(
            <div class="container">
                <h1>Hello To New App</h1>      
                 
                <ul class="nav nav-tabs">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/perfumes">Perfumes</a></li>
                    <li><a href="/notes">Notes</a></li>
                    <li><a href="/perfumeHouses">Houses</a> </li>
                    <li><a href="/contactUs">Contact Us</a> </li>
                    <li><a href="/suggestPerfumes">Suggest Perfumes</a> </li>
                    <li><a href="/profile">Profile</a> </li>
                </ul>

                <div>
                    <Route path='/home' component={Home} />
                    <Route path='/perfumes' component={Perfumes}/>
                    <Route path='/notes' component={Notes}/>
                    <Route path='/perfumeHouses' component={PerfumeHouses}/>
                    <Route path='/contactUs' component={ContactUs}/>
                    <Route path='/suggestPerfumes' component={SuggestPerfumes}/>
                    <Route path='/profile' component={Profiles}/>
                    <Route path='/perfumeDetails/:id' component={PerfumeDetails}/>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

