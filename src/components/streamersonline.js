import React from 'react';
import StreamOnline from './streamOnline';

const StreamersOnline = (props) => (
        <div className = "streams__container streams__container--online"> 
            <ul className = "streams__list">
                {   
                   
                   props.streams.map((stream) => 
                        <StreamOnline 
                            key = {stream}
                            name = {props.statusInfo[stream].name}
                            game = {props.statusInfo[stream].game}
                            status = {props.statusInfo[stream].status}
                            logo = {props.statusInfo[stream].logo}
                            url = {props.statusInfo[stream].url}
                            
                        />
                 )
                 
                }
            </ul>
        </div>
    
);

export default StreamersOnline;