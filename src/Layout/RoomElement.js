import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import './RoomElement.css';

export default function RoomElement() {
    const room = useRef();
    const ed = useRef();
    
    function onLoad(spline) {
        const obj = spline.findObjectByName('room');
        const workplace = spline.findObjectByName('desk stuff');
        if (obj && workplace) {
            room.current = obj;
            ed.current = workplace;
            console.log(room.current);
            console.log(ed.current);
       }
    }
    
    function enlargeObj() {
        if (room.current) {
            room.current.scale.x = 0.7;
            room.current.scale.y = 0.7;
            room.current.scale.z = 0.7;
        }
    }
    
    function resizeObj() {
        if (room.current) {
            room.current.scale.x = 0.9;
            room.current.scale.y = 0.9;
            room.current.scale.z = 0.9;
            console.log(room.current);
        }
    }
    
    const [position, setPosition] = useState({ top: '1em', left: '25vh' });
    const [visibility, setVisibility] = useState({ visible:'visible' });
    const location = useLocation();
    
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setPosition({ top: '1em', left: '30.5vh' });
                setVisibility('visible');
                enlargeObj();
                break;
            case '/education':
                setPosition({ top: '10.5em', left: '24em' });
                setVisibility('visible');
                resizeObj();
                break;
            case '/projects':
                setPosition({ top: '10.5em', left: '24em' });
                setVisibility('visible');
                resizeObj();
                break;
            case '/work-experience':
                setPosition({ top: '10.5em', left: '24em' });
                setVisibility('visible');
                resizeObj();
                break;
            default:
                break;
        }
    }, [location]);
    
    return (
        <div>
            <Spline style={{marginTop: position.top,
                           marginLeft: position.left,
                           visibility: visibility.visible
                       }}
               scene="https://prod.spline.design/1mQXFZHVo5TSTIXI/scene.splinecode"
               className='roomEl'
               onLoad={onLoad}               
           />
        </div>
    );
}