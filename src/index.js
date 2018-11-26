import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import JSON from './db'

//Components
import Header from './component/header'
import NewsList from './component/news_list';

class App extends Component{
    state = {
        news: JSON,
        filtered:[]
    }

    getKeyWord = (event)=>{
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
    }

    render(){
        let filtered = this.state.filtered;
        let wholeNews = this.state.news;
        return (        
            <div>
                <Header keywords={this.getKeyWord} />
                <NewsList news={filtered.length === 0 ? wholeNews : filtered}>
                    <h2>The news are:</h2>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/> , document.getElementById('root'))
