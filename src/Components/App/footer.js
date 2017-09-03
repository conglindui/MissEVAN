import React,{Component} from "react";

class Footer extends Component{
	constructor(prop){
		super(prop);
	}


	render(){
		return <div id="footer">
		<ul>
			<li className = "MemberPage">
				<span>客户端</span>
				<span className = "from-cat"></span>
				<span>返回顶部</span></li>
			<li className = "button">MissEvan弹幕音频网 京ICP备:14055174号-1</li>
		</ul>
		</div>
	}
}


export default Footer;