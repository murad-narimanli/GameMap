import React from 'react';
import {connect} from 'react-redux'
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Routes from "./Layout/Routes/Routes";

function App(props) {
    return (
        <div>
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    );
}

export default connect()(App);
