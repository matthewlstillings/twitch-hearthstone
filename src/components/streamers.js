import React from 'react';
import Stream from './streams';

const StreamersAll = (props) => (
        <div className = "streams__container"> 
            <ul className = "streams__list">
                {
                   props.streams.map((stream) => 
                        <Stream 
                            key = {stream}
                            name = {props.statusInfo[stream].name}
                            game = {props.statusInfo[stream].game}
                            status = {props.statusInfo[stream].status}
                            logo = {props.statusInfo[stream].logo}
                            url = {props.statusInfo[stream].url}
                        />
                 ).sort(function(a, b) {
                    if (a.props.status > b.props.status) return -1;
                    if (a.props.status < b.props.status) return 1;
                    return 0;
                 })
                }
            </ul>
        </div>
    
);

export default StreamersAll;

