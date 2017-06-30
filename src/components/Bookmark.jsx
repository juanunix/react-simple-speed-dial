import React from 'react';
const Bookmark = (props) => {
    return (
        <a classname="bookmark" href={props.url}>
            <p className="bookmark__title">{props.url}</p>
        </a>
    )
}
export default Bookmark