import React,{Component} from "react";

import Nav from "./nav";
import Aside from "./aside";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import "./index.scss";


class App extends Component{
	constructor(prop){
		super(prop);
	}


	render(){
		return <div id="missevan">
			<Header></Header>
			<Nav></Nav>
			<Aside></Aside>
			<Main></Main>
			<Footer></Footer>
		</div>
	}
}

export default App;