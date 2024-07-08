import React from 'react';
import { useEffect, useRef } from 'react';
import './Education.css';

export default function Education() {

    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const button1 = button1Ref.current;
        const button2 = button2Ref.current;
        const info = infoRef.current;
        
        function handleButton1() {
            if(button1 && info) {
                info.style.animation = 'slide-right 0.65s ease-in-out forwards';
                button1.style.opacity = 1;
                button2.style.opacity = 0.55;
            }
        }

        function handleButton2() {
            if(button2 && info) {
                info.style.animation = 'slide-left 0.65s ease-in-out forwards';
                button1.style.opacity = 0.55;
                button2.style.opacity = 1;
            }
        }

        if (button1) {
            button1.addEventListener('click', handleButton1);
        }
        if (button2) {
            button2.addEventListener('click', handleButton2);
        }

        return () => {
            if (button1) {
                button1.removeEventListener('click', handleButton1);
            }
            if (button2) {
                button2.removeEventListener('click', handleButton2);
            }
        }
    });


    return (
        <div className="education-container">
            <div className='info-container' ref={ infoRef }>
                <p className='info' id="info-first">
                    <b>Boston College</b> | Newton, MA
                    <br />Morrissey College of Arts & Sciences									   
                    <br /><em>Bachelors of Arts in Computer Science</em>
                    <br /><b>GPA: 3.67/4.00</b>
                    <br /><em>Relevant Coursework:</em> &emsp;Computer Science II
                    <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Calculus II
                    <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Logic & Computation
                    <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Computer Organization & Lab
                    <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Randomness & Computation <br />
                    <br /><em>Honors:</em>&emsp;&ensp;BCCSS Hack the Heights Hackathon | 
                    <br /><em>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Best Hack in Beginner Track & 
                    <br />&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Best Accessibility Hack</em>
                </p>
                <p className='info' id="info-second">
                    <b>Surabaya Intercultural School</b> | Surabaya, Indonesia
                    <br /><b>GPA: 4.0/4.0,</b> <em>Valedictorian</em>
                    <br /><em>Honors:</em>&emsp;High Honor Roll with Distinction, 
                    <br />&emsp;&emsp;&emsp;&emsp;Presidential Award for Excellence, 
                    <br />&emsp;&emsp;&emsp;&emsp;Computer Science Award, 
                    <br />&emsp;&emsp;&emsp;&emsp;Physics Subject Award, 
                    <br />&emsp;&emsp;&emsp;&emsp;National Honor Society Officer, 
                    <br />&emsp;&emsp;&emsp;&emsp;AP Capstone Diploma, 
                    <br />&emsp;&emsp;&emsp;&emsp;AP International Diploma, 
                    <br />&emsp;&emsp;&emsp;&emsp;AP Scholar with Distinction Award
                </p>
            </div>
            <div className='button-container'>
                <div className='button' id='first' ref={ button1Ref }></div>
                <div className='button' id='second'ref={ button2Ref } style={{ opacity: 0.55 }}></div>
            </div>
        </div>
    );
}