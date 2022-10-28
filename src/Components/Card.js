import './card.css'
import React from 'react';
import moment from 'moment';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
let Arrow = ">"

export default function Card(props) {

    const { avatar, title, description, stars, issues, userName, creationDate } = props;
    let timeInterval = creationDate.split('T')[0];
    timeInterval = moment(creationDate, "YYYY-MM-DD").fromNow();

    return (
        <div className="repo-card col-12">
            
            <div className="row card">
                <div className="avatar col-12 col-md-4 col-lg-3 row" >
                    <img className='column' src={avatar} alt="profile" />
                    <div className='row-1'>
                        <div><h3 className="repo-title column">Title :-  {title} </h3></div>
                        <div className="repo-description"> {description}
                        <div class="dropdown ">
                                <button class="dropbtn">{Arrow}</button>
                                <div class="dropdown-content">
                                    <a href="commit">Commits</a>
                                    <a href="#">Additions</a>
                                    <a href="#">Deletions</a>
                                
                            </div>
                            
                        </div> 
     
                        </div>
                             
                        <div className="data col-12 col-md-8 col-lg-9">


                            <div className="row">
                                <div className="repo-stats">
                                    <div className="repo-stars">
                                          {stars} Stars
                                       
                                    </div>
                                    <div className="repo-issues">
                                           {issues} Issues
                                       
                                    </div>
                                    <div className="repo-owner">
                                        {`${timeInterval} by ${userName}.`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
             
            </div>
        </div>
    )
}

