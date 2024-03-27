import React from 'react';
import Categories from './Categories';
import FoodData from './FoodData';
import Country from './Country';
import ABCD from './ABCD';
import { Form } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            <FoodData></FoodData>
            <Country></Country>
            <ABCD></ABCD>
            <Form></Form>
        </div>
    );
};

export default Home;