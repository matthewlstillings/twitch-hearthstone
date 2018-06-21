import React from 'react';

const StreamOffline = (props) => (
    <li className = {"stream stream__offline stream--" + props.status}>
        <a href={props.url} className="stream__link">
            <img src={props.logo} className = "stream__logo"/>
        </a>    
        <div className = "stream__info">
            <h3 className = "stream__name">{props.name}</h3>
            <p className = "stream__game">{props.game}</p>
        </div>
    </li>
);




export default StreamOffline;