import React, {Component} from "react";

class Nav extends Component{
    render(){
        return(
            <div>
                <nav clas="nav">
                    <a href="#" title="sebastian" class="logo"> 
                        <figure> 
                            <svg fill="none" height="71" width="40" >
                                <path d="M18 0h4v38h-4z" fill="#9c9c9c" class="cable"></path>
                                <g fill="#126bd3">
                                    <path d="M0 54h40v14H0zM0 40h4v14H0zM36 40h4v14h-4z"></path>
                                    <path d="M15.667 38h8.666L40 54H0z"></path>
                                </g>
                                <path d="M3 71h34v-3H3z" fill="#c4c4c4"></path>
                            </svg> 
                        </figure> 
                    </a> 
                <ul class="menu"> 
                    <li>
                        <a href="#work">Work</a>
                    </li> 
                    <li>
                        <a href="#about">About</a>
                    </li> 
                </ul> 
            </nav> 
            </div>
        )
    }
}

export default Nav;