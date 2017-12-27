import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div>
                   <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                        <div className="container">
                            <Link to="/" className="navbar-brand">Luis Manzanero</Link>
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto"> 
                                    <li className="nav-item">
                                        <NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/" className="nav-link"><i className="fa fa-home"></i> Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/resume" className="nav-link"><i className="fa fa-graduation-cap"></i> Resume</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/work" className="nav-link"><i className="fa fa-folder-open"></i> Work</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/contact" className="nav-link"><i className="fa fa-envelope"></i> contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/blog" className="nav-link"><i className="fa fa-pencil"></i> Blog</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>           
                    <div>
                </div>
            </div>
        );
    }
}

export default NavBar;