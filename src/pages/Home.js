import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import colors from '../../config/color'

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

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

const Hero = styled(FlexCenter)`
    min-height: 100vh;
    background: linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary}) 0% 0% / 400% 400%;
    animation: 6s ease 0s infinite normal none running ${faded};

    h1 {
        font-weight: 300;
        margin: 0;
    }
    h3 {
        font-weight: 100;
    }
`

const contacts = ["Medium", "Github", "Linkedin", "Email", "Resume"]

const ContactName = styled.span`
    margin: 0 10px 0 0;
`

const ContactList = ({ contacts }) => (
    contacts.map(contact => <ContactName>{contact}</ContactName>)
)


export default class Home extends Component {
    render() {
        return (
            <Hero className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <h1>Hello, My name is <b>"Tae"</b></h1>
                        <h3>A "Web Developer" that love to make "Business Value" with "Good Quality" and "Good Practice".</h3>
                        <ContactList contacts={contacts} />
                    </div>
                </div>
            </Hero>
        )
    }
}
