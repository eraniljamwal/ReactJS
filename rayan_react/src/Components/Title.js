import React from 'react';
import NavComponent from './NavComponent';
import {Link} from 'react-router-dom';

function Title(props) {
    return (<div>
                <NavComponent />
                <h1>
                    <Link to="/">{props.title}</Link>
                </h1>
            </div>)
}

export default Title;