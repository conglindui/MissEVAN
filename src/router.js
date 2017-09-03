//路由模块
import {
  HashRouter as Router, //起一个别名
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom' // 包含 这两个HashRouter 和BrowserRouter
import React from "react"; //引入react 解析jsx语法

import App from "./Components/App"; //index.js 可以省略
import New from "./Components/New"; //index.js 可以省略
import List from "./Components/List"; //index.js 可以省略
import Recommend from "./Components/Recommend"; //index.js 可以省略
import Type from "./Components/Type"; //index.js 可以省略
import Reg from "./Components/User/reg"; //index.js 可以省略
import Login from "./Components/User/login"; //index.js 可以省略



const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/new" component={New}/>
				<Route path="/list" component={List}/>
				<Route path="/recommend" component={Recommend}/>
				<Route path="/type" component={Type}/>
				<Route path="/user" render={()=>
							<Switch>
								<Route path="/user/reg" component={Reg}/>
								<Route path="/user/login" component={Login}/>
								<Redirect from ="/user" to="/user/login"/>
							</Switch>
					}/>
				<Redirect from ="/" to="/recommend"/>
			</Switch>
		</App>
	</Router>
) 

export default router;