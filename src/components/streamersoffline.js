import React from 'react';
import StreamOffline from './streamoffline';

const StreamersOffline = (props) => (
        <div className = "streams__container streams__container--offline"> 
            <ul className = "streams__list">
                {   
                   
                   props.streams.map((stream) => 
                        <StreamOffline 
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

export default StreamersOffline;