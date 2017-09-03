import React,{Component} from "react";
import "./login.scss"

class Login extends Component{
	constructor(prop){
		super(prop);
	}


	render(){
		return <div>
		<div id = "container">
			<p className = "from-mz">登录 MissEvan</p>
			<input type = "text" placeholder = "手机号/邮箱" className = "from-user"/>
			<input type = "password" placeholder = "密码" className = "from-password"/>
			<div className = "contor">
			<input type="checkbox" className = "from-checkbox"/>
			<span className = "from-jzw">记住我</span>
			<span className = "from-wjmm">忘记密码?</span>
			</div>
			<button className = "from-dl">登录</button>
			<button className = "from-zc">注册</button>
			</div>
		</div>
	}
}



export default Login;