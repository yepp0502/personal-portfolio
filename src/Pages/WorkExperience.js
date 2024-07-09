import React from 'react';
import './WorkExperience.css';

export default function WorkExperience() {
    return(
        <div className='workexperience-container'>
            <div className='highskl-container'>
                <div className="info">
                    <p > 
                        <b>Coding Club </b>| Founder, Instructor
                        <br />March 2022 - June 2023 
                    </p>
                    <p className='content'>
                        Taught 13 students how to code in Python with the emphasis on getting them more involved and interested 
                        in this field——lectured some introductory topics, taught how to fix bugs 1-on-1, met during weekends 
                        through video calls during weekends, uploaded small projects every week
                    </p>
                </div>
                <div className="info">
                    <p > 
                        <b>Church Kindergarten </b>| Teacher Assistant
                        <br />October 2019 - May 2023 
                    </p>
                    <p className='content'>
                        Helped teachers organize weekly materials and navigate through technological difficulties and
                        developed connections with 8 children younger than 7 years old by teaching them the Korean language 
                        to instill confidence in speaking and writing in a foreign country
                    </p>
                </div>
            </div>
        </div>
    );
}