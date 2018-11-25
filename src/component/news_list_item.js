import React from 'react';
import {css} from 'glamor';

const NewsListItem = (props) => {
    let news_item = css({
        padding:'20px',
        boxSizing:'border-box',
        borderBottom:'1px solid gray',
        ':hover':{
            color:'red'
        }
    })

    let news = css({
        background:'grey'
    })

    return(
         <div {...news_item} {...news}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div> 
    )
};

export default NewsListItem;