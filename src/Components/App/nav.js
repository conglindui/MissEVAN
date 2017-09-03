import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component{
	constructor(prop){
		super(prop);
	}


	render(){
		return <nav>
			<ul>
				<li><NavLink to="/list">音单</NavLink></li>
				<li><NavLink to="/recommend">推荐</NavLink></li>
				<li><NavLink to="/type">分类</NavLink></li>
			</ul>
		</nav>
	}
}

export default Nav;