import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Categories from './Categories';
import { Header, Footer } from './Layouts/index'; 

export default class extends Component {
    render() {
        return <Fragment>
            <Header />
            <Categories />
            <Footer />
        </Fragment>
    }
}
