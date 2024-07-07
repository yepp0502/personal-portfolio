import React from 'react';
import { useEffect, useRef, createElement, useState, useCallback } from 'react';
import { projectData } from './ProjectsData.js';
import flashImage from '../Assets/Flash.png';
import './Projects.css';

export default function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentYr, setCurrentYr] = useState(-1);
    const [currentVisiblityDot, setCurrentVisibilityDot] = useState('hidden');
    const [currentVisiblityInfo, setCurrentVisibilityInfo] = useState('visible');
    const [currentVisibilityIdea, setCurrentVisibilityIdea] = useState('hidden');
    
    const points1Ref = useRef(null);
    const points2Ref = useRef(null);
    const points3Ref = useRef(null);
    const points4Ref = useRef(null);
    const points5Ref = useRef(null);
    
    const ideaRef = useRef(null);
    
    const handleClick1Dot = useCallback(() => {
        const dot1El = document.getElementById('dot1');
        const dot2El = document.getElementById('dot2');
        
        if (currentProject !== 0) {
            setCurrentProject(0);
            dot1El.style.opacity = 1;
            dot2El.style.opacity = 0.55;
        }
    }, [currentProject, setCurrentProject]);

    const handleClick2Dot = useCallback(() => {
        const dot1El = document.getElementById('dot1');
        const dot2El = document.getElementById('dot2');
        if (currentProject !== 1) {
            setCurrentProject(1);
            dot1El.style.opacity = 0.55;
            dot2El.style.opacity = 1;
        }
    }, [currentProject, setCurrentProject]);

    useEffect(() => {
        const points1 = points1Ref.current;
        const points2 = points2Ref.current;
        const points3 = points3Ref.current;
        const points4 = points4Ref.current;
        const points5 = points5Ref.current;
        const idea = ideaRef.current;
        
        function ideaRender() {
            setCurrentVisibilityIdea('visible');
            const interval = setInterval(() => {
                idea.style.opacity = idea.style.opacity === '1' ? '0.5' : '1';
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
                idea.style.opacity = '1';
            }, 500);
            setTimeout(() => {
                setCurrentVisibilityIdea('hidden');
            }, 2000);
        }

        function points1Clicked() {
            ideaRender();
            if (points1) {
                handleClick1Dot();
                setCurrentYr(0);
                setCurrentVisibilityInfo('visible');
                setCurrentVisibilityDot('visible');
                
                if (points1.style.backgrounPosition !== 'left bottom') {
                    points1.style.backgroundPosition = 'left bottom';
                    points1.style.transitionDelay = '0s';
                }
                if (points2 && points3 && points4 && points5 ) {
                    if (points5.style.backgroundPosition === 'left bottom') {
                        points5.style.backgroundPosition = 'right bottom';
                        points4.style.backgroundPosition = 'right bottom';
                        points3.style.backgroundPosition = 'right bottom';
                        points2.style.backgroundPosition = 'right bottom';

                        points5.style.transitionDelay = '0s';
                        points4.style.transitionDelay = '0.35s';
                        points3.style.transitionDelay = '0.7s';
                        points2.style.transitionDelay = '1.05s';
                    }
                    else if (points4.style.backgroundPosition === 'left bottom') {
                        points4.style.backgroundPosition = 'right bottom';
                        points3.style.backgroundPosition = 'right bottom';
                        points2.style.backgroundPosition = 'right bottom';

                        points4.style.transitionDelay = '0s';
                        points3.style.transitionDelay = '0.35s';
                        points2.style.transitionDelay = '0.7s';
                    }
                    else if (points3.style.backgroundPosition === 'left bottom') {
                        points3.style.backgroundPosition = 'right bottom';
                        points2.style.backgroundPosition = 'right bottom';

                        points3.style.transitionDelay = '0s';
                        points2.style.transitionDelay = '0.35s';
                    }
                    else {
                        points2.style.backgroundPosition = 'right bottom';
                        points2.style.transitionDelay = '0s';
                    }
                }
            }
        }
        
        function points2Clicked() {
            ideaRender();
            if (points1 && points2 && points3 && points4 && points5) {
                handleClick1Dot();
                setCurrentYr(1);
                setCurrentVisibilityInfo('visible');
                setCurrentVisibilityDot('visible');
                setCurrentVisibilityIdea('visible');

                if (points2.style.backgroundPosition !== 'left bottom') {
                    if (points1.style.backgroundPosition === 'left bottom') {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points2.style.transitionDelay = '0s';
                    }
                    else {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points2.style.transitionDelay = '0.35s';
                    }
                }
                if (points5.style.backgroundPosition === 'left bottom') {
                    points5.style.backgroundPosition = 'right bottom';
                    points4.style.backgroundPosition = 'right bottom';
                    points3.style.backgroundPosition = 'right bottom';

                    points5.style.transitionDelay = '0s';
                    points4.style.transitionDelay = '0.35s';
                    points3.style.transitionDelay = '0.7s';
                }
                else if (points5.style.backgroundPosition !== 'left bottom' && points4.style.backgroundPosition === 'left bottom') {
                    points4.style.backgroundPosition = 'right bottom';
                    points3.style.backgroundPosition = 'right bottom';
                    points5.style.transitionDelay = '0s';
                    points4.style.transitionDelay = '0s';
                    points3.style.transitionDelay = '0.35s';
                }
                else if (points5.style.backgroundPosition !== 'left bottom' && points4.style.backgroundPosition !== 'left bottom' && points3.style.backgroundPosition === 'left bottom') {
                    points3.style.backgroundPosition = 'right bottom';
                    points5.style.transitionDelay = '0s';
                    points4.style.transitionDelay = '0s';
                    points3.style.transitionDelay = '0s';
                }
            }
        }

        function points3Clicked() {
            ideaRender();
            if (points1 && points2 && points3) {
                handleClick1Dot();
                setCurrentYr(2);
                setCurrentVisibilityInfo('visible');
                setCurrentVisibilityDot('visible');
                setCurrentVisibilityIdea('visible');
                if (points3.style.backgroundPosition !== 'left bottom') {
                    if (points1.style.backgroundPosition === 'left bottom' && points2.style.backgroundPosition === 'left bottom') {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points3.style.backgroundPosition = 'left bottom';
                        points2.style.transitionDelay = '0s';
                        points3.style.transitionDelay = '0s';
                    }
                    else if (points1.style.backgroundPosition === 'left bottom' && points2.style.backgroundPosition !== 'left bottom') {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points2.style.transitionDelay = '0';
                        points3.style.backgroundPosition = 'left bottom';
                        points3.style.transitionDelay = '0.35s';
                    }
                    else {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points2.style.transitionDelay = '0.35s';
                        points3.style.backgroundPosition = 'left bottom';
                        points3.style.transitionDelay = '0.7s';
                    }
                }
                if (points4 && points5) {
                    if (points5.style.backgroundPosition === 'left bottom') {
                        points5.style.backgroundPosition = 'right bottom';
                        points4.style.backgroundPosition = 'right bottom';
                        points5.style.transitionDelay = '0s';
                        points4.style.transitionDelay = '0.35s';
                    }
                    else if (points4.style.backgroundPosition === 'left bottom' && points5.style.backgroundPosition !== 'left bottom') {
                        points4.style.backgroundPosition = 'right bottom';
                        points4.style.transitionDelay = '0s';
                    }
                }
            }
        }
        
        function points4Clicked() {
            if (points1 && points2 && points3 && points4) {
                setCurrentVisibilityInfo('hidden');
                setCurrentVisibilityDot('hidden');
                setCurrentVisibilityIdea('hidden');
                if (points4.style.backgroundPosition !== 'left bottom') {
                    if (points3.style.backgroundPosition === 'left bottom') {
                        points4.style.backgroundPosition = 'left bottom';
                        points4.style.transitionDelay = '0s';
                    }
                    else if (points2.style.backgroundPosition === 'left bottom') {
                        points3.style.backgroundPosition = 'left bottom';
                        points4.style.backgroundPosition = 'left bottom';

                        points3.style.transitionDelay = '0';
                        points4.style.transitionDelay = '0.35s';
                    }
                    else if (points1.style.backgroundPosition === 'left bottom') {
                        points3.style.backgroundPosition = 'left bottom';
                        points4.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';

                        points4.style.transitionDelay = '0.7s';
                        points3.style.transitionDelay = '0.35s';
                        points2.style.transitionDelay = '0s';
                    }
                    else {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points3.style.backgroundPosition = 'left bottom';
                        points4.style.backgroundPosition = 'left bottom';

                        points2.style.transitionDelay = '0.35s';
                        points3.style.transitionDelay = '0.7s';
                        points4.style.transitionDelay = '1.05s';
                    }
                }
                if (points5) {
                    if (points5.style.backgroundPosition === 'left bottom') {
                        points5.style.backgroundPosition = 'right bottom';
                        points5.style.transitionDelay = '0s';
                    }
                }
            }
        }
        
        function points5Clicked() {
            if (points1 && points2 && points3 && points4 && points5) {
                setCurrentVisibilityInfo('hidden');
                setCurrentVisibilityDot('hidden');
                setCurrentVisibilityIdea('hidden');
                if (points5.style.backgroundPosition !== 'left bottom') {
                    if (points4.style.backgroundPosition === 'left bottom') {
                        points5.style.backgroundPosition = 'left bottom';
                        points5.style.transitionDelay = '0s';
                    }
                    else if (points3.style.backgroundPosition === 'left bottom') {
                        points4.style.backgroundPosition = 'left bottom';
                        points5.style.backgroundPosition = 'left bottom';

                        points4.style.transitionDelay = '0s';
                        points5.style.transitionDelay = '0.35s';
                    }
                    else if (points2.style.backgroundPosition === 'left bottom') {
                        points3.style.backgroundPosition = 'left bottom';
                        points4.style.backgroundPosition = 'left bottom';
                        points5.style.backgroundPosition = 'left bottom';

                        points3.style.transitionDelay = '0s';
                        points4.style.transitionDelay = '0.35s';
                        points5.style.transitionDelay = '0.7s';
                    }
                    else if (points1.style.backgroundPosition === 'left bottom') {
                        points2.style.backgroundPosition = 'left bottom';
                        points3.style.backgroundPosition = 'left bottom';
                        points4.style.backgroundPosition = 'left bottom';
                        points5.style.backgroundPosition = 'left bottom';

                        points2.style.transitionDelay = '0s';
                        points3.style.transitionDelay = '0.35s';
                        points4.style.transitionDelay = '0.7s';
                        points5.style.transitionDelay = '1.05s';
                    }
                    else {
                        points1.style.backgroundPosition = 'left bottom';
                        points2.style.backgroundPosition = 'left bottom';
                        points3.style.backgroundPosition = 'left bottom';
                        points4.style.backgroundPosition = 'left bottom';
                        points5.style.backgroundPosition = 'left bottom';

                        points1.style.backgrounPosition = '0s'
                        points2.style.transitionDelay = '0.35s';
                        points3.style.transitionDelay = '0.7s';
                        points4.style.transitionDelay = '1.05s';
                        points5.style.transitionDelay = '1.4s';
                    }
                }
            }
        }
        
        if (points1) {
            points1.addEventListener('click', points1Clicked);
        }
        if (points2) {
            points2.addEventListener('click', points2Clicked);
        }
        if (points3) {
            points3.addEventListener('click', points3Clicked);
        }
        if (points4) {
            points4.addEventListener('click', points4Clicked);
        }
        if (points5) {
            points5.addEventListener('click', points5Clicked);
        }
        
        return () => {
            if (points1) {
                points1.removeEventListener('click', points1Clicked);
            }
            if (points2) {
                points2.removeEventListener('click', points2Clicked);
            }
            if (points3) {
                points3.removeEventListener('click', points3Clicked);
            }
            if (points4) {
                points4.removeEventListener('click', points4Clicked);
            }
            if (points5) {
                points5.removeEventListener('click', points5Clicked);
            }
        }
    }, [handleClick1Dot, handleClick2Dot, currentVisibilityIdea]);
    
    function projectComponent(i) {
        const projElements = [];
        
        if (i > -1) {
            projectData[i].forEach((p, key) => {
                function manageTags () {
                    const tags = [];
                    if (p.webTag) {
                        tags.push(createElement('li', { id: 'tag1' }, 
                                createElement('span', null, 'web development'))
                        );
                    }
                    if (p.dataTag) {
                        tags.push(createElement('li', { id: 'tag2' },
                                createElement('span', null, 'data structures'))
                        );
                    }
                    if (p.javaTag) {
                        tags.push(createElement('li', { id: 'tag3' },
                                createElement('span', null, 'java'))
                        );
                    }
                    if (p.pythonTag) {
                        tags.push(
                            createElement('li', { id: 'tag4' },
                                createElement('span', null, 'python'))
                        );
                    }
                    return tags;
                }
                projElements.push(
                    // set current visibility
                    <div className="info-container" id={key} style={{ visibility: currentVisiblityInfo }}>
                        <div className="info">
                            <p id="title"><a href={p.a} target="_blank">{p.title}</a></p>
                            <p id="date">{p.date}</p>
                            <ul id="bullet">
                                <li id="point">{p.point1}</li>
                                <li id="point">{p.point2}</li>
                            </ul>
                        </div>
                        <div className='tags'>
                            <ul>
                                {manageTags()}
                            </ul>
                        </div>
                    </div>
                );
            })
        }
        return projElements;
    };
    
    const projElements = projectComponent(currentYr);
    
    return (
        <div className="projects-container">
            <div className="year-slider">
                <div className="points-container">
                    <span className="points" ref={points1Ref}></span>
                    <span className="points" ref={points2Ref}></span>
                    <span className="points" ref={points3Ref}></span>
                    <span className="points" ref={points4Ref}></span>
                    <span className="points" ref={points5Ref}></span>
                </div>
                <div id="line"></div>
                <div className='years-container'>
                    <span className="years">2021</span>
                    <span className="years">2022</span>
                    <span className="years">2023</span>
                    <span className="years">2024</span>
                    <span className="years">2025</span>
                </div>
            </div>
            <div className="content-container">
                <div className="slider">
                    <button className="dot" id="dot1" onClick={() => handleClick1Dot()} style={{ opacity: 1 , visibility: currentVisiblityDot }}></button>
                    <button className="dot" id="dot2" onClick={() => handleClick2Dot()} style={{ opacity: 0.55, visibility: currentVisiblityDot }}></button>
                </div>
                <div className="info-place">
                    {projElements[currentProject]}
                </div>
            </div>
            <div className="help-container" ref={ideaRef} style={{visibility: currentVisibilityIdea }}>
                <img src={flashImage} id="flash" alt="idea" />
                <p>Click on the title of each project to access it!</p>
            </div>
        </div>
    );
}