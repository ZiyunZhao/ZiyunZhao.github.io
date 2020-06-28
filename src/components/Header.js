import React, { Component } from 'react';
import { Clock } from './Clock.js';


export class Header extends Component {
    render() {
        return (
            <div className="Header">

                <div className="name">
                    Ziyun Zhao
                </div>

                <div className="description">
                {/* I am an incoming software engineer at Google */}
                <Clock />
                </div>

            </div>
        )

    }
}

