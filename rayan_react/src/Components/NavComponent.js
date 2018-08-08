import React from 'react';
import {Link} from 'react-router-dom';
function NavComponent(props) {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">                   
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Brillio</a>
                    </div>
                            
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link className="" to='/'>View Gallery</Link>
                            </li>
                            <li> 
                                <Link className="" to='/AddPhoto'>Add Photo</Link>
                            </li>                  
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
    )
}

export default NavComponent;