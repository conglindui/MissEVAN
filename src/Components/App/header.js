import React,{Component} from "react";

class Header extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return <header>
            <div className="content">
                <a alt="MissEvan" href="/">
                    <i className="logo"></i>
                </a>
                <div className="actions">
                    <form className="search-input" action="">
                        <span></span>
                        <input type="search" />
                    </form>
                    <span className="btn-cancle">取消</span>
                    <a href="/search">
                        <i className="search"></i>
                    </a>
                    <i className="menu" onClick={()=>{
                    	this.props.event();
                    }}></i>
                </div>
            </div>

        </header>
    }
}

export default Header;