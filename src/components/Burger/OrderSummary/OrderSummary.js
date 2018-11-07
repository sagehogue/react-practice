import React, { Component } from 'react';

import Util from '../../../hoc/Util/Util';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
componentWillUpdate() {
}

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            })
        return (
            <Util>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <strong><p>Total Price: {this.props.price.toFixed(2)}</p></strong>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Util>
        )
    }
}

export default OrderSummary;