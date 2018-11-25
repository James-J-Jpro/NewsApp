import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import JSON from './db'

//Components
import Header from './component/header'
import NewsList from './component/news_list';

class App extends Component{
    state = {
        news: JSON
    }

    render(){
        return (            
            <div>
                <Header />
                <NewsList news = {this.state.news}>
                    <h2>The news are:</h2>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/> , document.getElementById('root'))
