import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import colors from '../../config/color'

const faded = keyframes`
    0%{
        background-position: 0% 50%
    }
    50%{
        background-position: 100% 50%
    }
    100%{
        background-position: 0% 50%
    }
`

const Hero = styled.div`
    min-height: 80vh;
    background: linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary}) 0% 0% / 400% 400%;
    animation: 6s ease 0s infinite normal none running ${faded};

    h1 {
        font-weight: 300;
    }
    h3 {
        font-weight: 100;
    }
`


export default class Home extends Component {
    render() {
        return (
            <Hero className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-10">
                        <h1>Hello, My name is <b>"Tae"</b></h1>
                        <h3>A "Web Developer" that love to make "Business Value" with "High Quality" and "Good Practice".</h3>
                        <h4>Medium</h4>
                        <h4>Github</h4>
                        <h4>Linkedin</h4>
                        <h4>Email</h4>
                        <h4>Resume</h4>
                    </div>
                </div>
            </Hero>
        )
    }
}
