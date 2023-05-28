import { Component } from "react";
import './search-box.style.css'

class SearchBox extends Component{
    render(){
        return(
            <input className={this.props.className} type='search' placeholder={this.props.placeHolder} onChange={this.props.onChangeHandeler}/>
        )
    }
}

export default SearchBox