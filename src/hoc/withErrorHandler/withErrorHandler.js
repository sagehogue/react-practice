import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Util from '../Util/Util';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        componentDidMount() {
            axios.interceptors.response.use()
        }

        render() {
            return (
                <Util>
                    <Modal show>
                        Something didn't behave as expected!
                    </Modal>
                    <WrappedComponent {...props} />
                </Util>
            );
        }
    }
}
    
    

export default withErrorHandler;