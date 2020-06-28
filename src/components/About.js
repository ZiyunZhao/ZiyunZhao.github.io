import React, { Component } from 'react';


export class About extends Component {
    render() {
        return (
            <div className="About">

                <div className="description">
                    <div className="title">
                        <span className="bold">About</span> 
                        <br/>
                        <br/>
                    </div>
                Welcome to my website! 
                <br/>
                <br/>
                My name is Ziyun. I graduated at 
                <span className="bold"> University of California, Berkeley </span>
                with a Bachelor of Arts degree in <span className="bold">Computer Science</span>. 
                I currently live in Sunnyvale and will start working at <span className="bold"> Google </span>in August 2020. 
                <br/>
                <br/>
                I was born and raised in Nanjing, China. I came to the United States at the age of 18 for college. 
                I am currently interested in <span className="bold"> machine learning </span> and <span className="bold"> software development </span>, which is fitting for my work now. 
                <br/>
                <br/>
                In my free time, I like to play basketball, read books, watch movies and hang out with friends.
                <br/>
                <br/>
                Feel free to contact me through email <span className="bold"> zhaoziyun@berkeley.edu </span>. 
                </div>

                <div className="picture">
                    <img src="../../profilepic.jpg" alt="My Profile Picture" width="350" height="503"></img>
                </div>

            </div>
        )

    }
}