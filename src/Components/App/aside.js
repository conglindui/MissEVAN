import React,{Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import {NavLink} from "react-router-dom";

class Aside extends Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return <div>
			<ReactCSSTransitionGroup
			transitionName="hide"
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}
			>
				{
					this.props.isShow?
					<aside>
						<ul onClick={()=>{
							this.props.event();
						}}>
							<li>
								<NavLink to="/user/login">点击登录</NavLink>
							</li>
							<li>
								<NavLink to="/recommend">M-主站</NavLink>
							</li>
							<li>
								<NavLink to="/new">M-新闻</NavLink>
							</li>
						</ul>
						
					</aside>
					:
					null
				}
			</ReactCSSTransitionGroup>
			
		</div>
	}
}

export default Aside;