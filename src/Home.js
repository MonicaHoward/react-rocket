import React, {Component} from 'react';
import styled from 'styled-components';

const VideoBackground = styled.video`
    color: #002A32;
    height: 100vh; 
    width: 100vw; 
    object-fit: cover
`
const NavBar = styled.div`
    background: #F40076;
    color: #002A32;
    height: 50vh;
    width: 100vw;
`

class Home extends Component {
    render(){
        return(
            <div>

                <VideoBackground width='100%' height='100%' autoPlay mute='true'>
                    <source src={'/video.mp4'} type='video/mp4'  />
                </VideoBackground>
            </div>
        )
    }
};

export default Home;