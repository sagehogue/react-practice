import React, { Component } from 'react';

import Util from '../../hoc/Util';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.25,
    cheese: 0.5,
    meat: 1,
    bacon: .75
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3,
        purchasable: false,
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({purchasable: sum > 0})
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}) 
        this.updatePurchaseState(updatedIngredients); 
    }

    removeIngredientHandler = (type) => {
        console.log('remove Ing fired!')
        const oldCount = this.state.ingredients[type];
        let updatedCount;
        oldCount > 0 ? updatedCount = oldCount - 1 : updatedCount = oldCount;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}) 
        this.updatePurchaseState(updatedIngredients);
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0
        }
        return (
            <Util>
                <Modal />
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo} purchasable={this.state.purchasable} price={this.state.totalPrice} />
            </Util>
        );
    }
}

export default BurgerBuilder