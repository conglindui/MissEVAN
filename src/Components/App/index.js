import React,{Component} from "react";

import Nav from "./nav";
import Aside from "./aside";
import Header from "./header";
import Footer from "./footer";

import "./index.scss";



class App extends Component{
	constructor(prop){
		super(prop);

		this.state={
			isShow:false
		}
	}


	render(){
		return <div id="missevan">
			<Header event={this.handleClick.bind(this)}></Header>
			<Nav></Nav>
			<Aside isShow={this.state.isShow} event={this.handleClick.bind(this)}></Aside>

			<section>
				{this.props.children}
			</section>
			
			<Footer></Footer>
		</div>
	}

	handleClick(){
		//每次取反
		this.setState({
			isShow:!this.state.isShow
		})
	}

}

export default App;