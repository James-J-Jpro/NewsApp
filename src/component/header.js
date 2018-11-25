import React, {Component} from 'react'
import '../css/styles.css'

class Header extends Component{

    state = {
        keywords : ''
    }

    handleInputChange = (event) => {
        this.setState({
            keywords: event.target.value
        });
    }

    render(){

        return (
            <header>
                <div className='logo'>Logo</div>
                <input type="text" onChange={this.handleInputChange}/>
            </header>
        )
    }
}
  
export default Header;