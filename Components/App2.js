import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Categories from './Categories';
import { Header, Footer } from './Layouts/index';
import { food_categories, foodItems, positions } from '../store.js';
import { connect } from 'tls';


export default class AppPage extends Component {
    state = {
        food_category: 'Beef',
        restaurants: []
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    fetchRestaurants = () => {
        axios
            .get('http://localhost:3001/allrest')
            .then( response => {
                this.setState({ restaurants:response.data });
            })
            .catch( error => {
                console.log(error);
            });
    }

    //method to get foodItems based on their category
    getItemsByCategories() {
        return Object.entries(
            this.state.foodItems.reduce((foodItems, item) => {
                const { food_categories } = item

                foodItems[food_categories] = foodItems[food_categories]
                    ? [...foodItems[food_categories], item]
                    : [item]

                return foodItems
            }, {})
        )
    }

    handleCategorySelected = food_categories => {
        this.setState(
            {food_category: food_categories}
        )
    }

    handlePositionChosen = positions => {
        this.setState(
            {positions: positions}
        )
    }

    render() {
        //const foodItems = this.getItemsByCategories()
        const {food_category} = this.state;
        return <Fragment>
            <Header
              foodItems={foodItems}
              onSelect={this.handleCategorySelected}
              food_category={food_category}
            />
            <ul>
                {this.state.restaurants.map(rest => <li>{rest.createdAt}</li>)}
            </ul>
            <Categories
                foodItems={foodItems}
                food_category={food_category}
            />
            <Footer positions = { positions }
                    onSelect = {this.handlePositionChosen}
            />
        </Fragment>
    }
}
