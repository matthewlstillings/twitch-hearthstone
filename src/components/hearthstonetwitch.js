import React from 'react';
import Header from './header';
import StreamersRouter from './streamersRouter';
import $ from 'jquery';





export default class TwitchApp extends React.Component {
    state = {
        statusInfo: {
            "SilverName": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "nl_kripp": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "Day9tv": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "DisguisedToastHS": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "Brian_Kibler": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "reynad27": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "itsHafu": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "Kolento": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "ThijsHS": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "savjz": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "AmazHS": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            },
            "PlayHearthstone": {
                game: '',
                status: '',
                name: '',
                logo: '',
                url: ''
            }

        },
        streams: [ "SilverName", "Day9tv", "nl_kripp", 
        "DisguisedToastHS", 'AmazHS', 'savjz', 'ThijsHS', 
        'Kolento', 'itsHafu', 'reynad27', 'Brian_Kibler', 'PlayHearthstone'],
        
    };
    findStreams = () => {
        var streams = this.state.streams;
        streams.map((stream, index) => {
        let url = 'https://api.twitch.tv/kraken/streams/' + stream;
            return $.ajax({
                type: 'GET',
                url: url,
                headers: {
                    'Client-ID': 'rss7alkw8ebydtzisbdbnbhx15wn5a' 
                },
                success: function(data) {
                    let statusInfo = Object.assign({}, this.state.statusInfo);
                    statusInfo[stream].status = data.stream != null ? "online" : "offline";
                    statusInfo[stream].game = data.stream != null ? data.stream.game : "Offline";
                    this.setState((prevState)=> ( { 
                        statusInfo
                    }));
                    //console.log(this.state.info);
                }.bind(this)
            });
        });
        streams.map((stream, index) => {
            let url = 'https://api.twitch.tv/kraken/channels/' + stream;
                return $.ajax({
                    type: 'GET',
                    url: url,
                    headers: {
                        'Client-ID': 'rss7alkw8ebydtzisbdbnbhx15wn5a' 
                    },
                    success: function(data) {
                        let statusInfo = Object.assign({}, this.state.statusInfo);
                        statusInfo[stream].logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
                        statusInfo[stream].url = data.url;
                        statusInfo[stream].name = data.display_name != null ? data.display_name : 'Error: Can\'t find channel';
                        this.setState((prevState)=> ( { 
                            statusInfo
                        }));
                        //console.log(this.state.info);
                    }.bind(this)
                });
            });
        };

    componentDidMount = () => {
        try {
        this.findStreams()
        this.interval = setInterval(() => this.findStreams(), 60000);
        console.log('Component Mounted');
        } catch (e) {
    
        }
    };

    componentDidUpdate = (prevProps, prevState) => {
        //console.log(this.state.statusInfo);
    };

    render() {
        return (
            <div>
                <Header />
                <StreamersRouter
                    statusInfo = {this.state.statusInfo}
                    streams = {this.state.streams}
                /> 
            </div> 
        )
    };
}

