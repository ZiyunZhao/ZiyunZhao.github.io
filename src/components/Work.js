import React, { Component } from 'react';



export class Work extends Component {
    render() {
        return (
            <div className="Work">
                <div className="title">Work</div>
                <br></br>
                <br></br>
                <div className="one_work">
                    <div className="description">
                        <div className="company_name">Google</div>
                        <br></br>
                        <div className="position">
                            Incoming Software Engineer
                            <div className="date">
                            starting August 2020
                            </div>
                        </div>
                        <div className="job_description"> 
                            To be updated
                        </div>

                    </div>

                    <div className="Google_picture">
                        <img src="../../google_logo.jpg" alt="My Profile Picture" width="210" height="140"></img>
                    </div>


                </div>




                <div className="one_work">
                    <div className="description">
                        <div className="company_name">Goldman Sachs</div>
                        <br></br>
                        <div className="position">
                            
                            Technology Summer Analyst
                            <div className="date">
                            May 2019 - August 2019
                            </div>
                        </div>
                        
                        <div className="job_description"> 
                        I interned in Private Wealth Management Team in Consumer and Investment Management Division at Goldman Sachs.
                        I made a complete overhaul over the existing management process and built a new unified OTC platform that greatly facilitates structuring, pricing, execution and tracking of all client requests.
                        My project improves the daily work of almost one hundred employees in three different teams and has already been put into production by the time I was an intern there.
                        </div>

                    </div>

                    <div className="GS_picture">
                        <img src="../../GS_logo.png" alt="My Profile Picture" width="180" height="180"></img>
                    </div>


                </div>

            </div>
        )

    }
}