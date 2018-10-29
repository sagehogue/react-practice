import React from 'react';

import Util from '../../hoc/Util';
import classes from './Layout.module.css'
const layout = (props) => (
    <Util>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Util>
)  

export default layout