import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import NavBar from './NavBar'

const VideoBackground = styled.video`
    color: #002A32;
    height: 100vh; 
    width: 100vw; 
    object-fit: cover;
    position: fixed;
    z-index: -1;
`

const Nav = styled.div`
    background: #561D39;
    color: #002A32;
    display: grid;
    grid-template-columns: 300px auto 200px 200px;
    padding: 40px;
    position: relative;
    z-index: 1;
`
const Logo = styled.div`
    color: #002A32;
    font-size: 2em;
`
const NavLink = styled.a`
    cursor: pointer;
    font-size: 1.5em;    
`


const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: 700px auto 700px;
`
const HomeContent = styled.div`
    border-radius: 6px;
    ${props =>
    props.primary && css`
        // background: linear-gradient(rgba(255,255, 255, 0.3), rgba(255, 255, 255, 0.3));

    `};
`
const ContentLeft = styled.div`
    
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 2em;
  font-family: 'Londrina Solid', cursive;
  margin: -50px  100px 50px 240px;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
const FeatureText = styled.h3`
  background: transparent;
  color: #FFF;
  font-family: 'Londrina Shadow', cursive;
  font-size: 3em;
  margin: 100px 100px 100px 200px;
  padding: 0.25em 1em;

  ${props =>
    props.primary && css`
      background: transparent;
      color: white;
      font-family: 'Londrina Solid', cursive;
      font-size: 3em;
      margin-top -130px;
    `};
`

const SecondaryFeature = styled.h3`
  background: transparent;
  color: #FFF;
  font-family: 'Londrina Shadow', cursive;
  font-size: 3em;
  margin: 100px 200px 100px 100px;
  padding-right: 90px;
  padding: 0.25em 1em;
  text-align: center;

  ${props =>
    props.primary && css`
      background: transparent;
      color: white;
      font-family: 'Londrina Solid', cursive;
      font-size: 2em;
    `};
`

class Home extends Component {
    render(){
        return(
            <HomeGrid>
                <VideoBackground width='100%' height='100%' autoPlay mute='true'>
                    <source src={'/video.mp4'} type='video/mp4'  />
                </VideoBackground>

                <HomeContent  primary>
                    <SecondaryFeature primary>
                        <p>Your one stop shop <br/> for up-to-date rocket news</p>
                    </SecondaryFeature>
                    <SecondaryFeature >
                        CALLING ALL LAUNCH ENTHUSIASTS
                    </SecondaryFeature>
                </HomeContent>

                <div>
                </div>

                <HomeContent >
                    <FeatureText>
                        3 . . . 2 . . . 1 . . .
                    </FeatureText>
                    <FeatureText primary>We have
                        lift off
                    </FeatureText>
                    <Button primary>Upcoming Launches</Button>
                    <Button>About</Button>
                </HomeContent>
            </HomeGrid>
        )
    }
};

export default Home;