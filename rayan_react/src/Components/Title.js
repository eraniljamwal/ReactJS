import React from 'react';


function Title(props) {
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
                        <a className="navbar-brand" href="#">Brillio</a>
                    </div>
                            
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li className="active"><a href="/">View Gallery <span className="sr-only">(current)</span></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Advanced Gallery <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                            </ul>
                        </li>
                        </ul>
                                
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/AddPhoto">Add Photo</a></li>                  
                        </ul>
                    </div>
            </div>
        </nav>
        <h1>{props.title}</h1>);
    </div>
    )
}

export default Title;