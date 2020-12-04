import React from 'react';
import HomePageComputer from '../../images/HomePageComputer.png'

const HomePage = () => (
    <div className="homePage-container">
        <div className="homePage-intro-container">
            <h2>Welcome to</h2>
            <h1>Ultimate Workspace Gadgets</h1>
            <h5>Boost your working from home productivity</h5>
            <h5>with our top ergonomic products</h5>
        </div>
        <div className="image-contianer-homePage">
            <img src={HomePageComputer} alt="Computer picture" className="image-home"/>
        </div>
    </div>
)

export default HomePage;