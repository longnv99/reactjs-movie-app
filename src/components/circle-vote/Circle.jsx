import React from 'react'
import './Circle.scss'
import { setColor } from '../../utils/ColorUtils'

const Circle = props => {

    const vote_average = props.vote_average;
    const deg = (360/100) * vote_average * 10 / 2;

    const color = setColor(vote_average);
    const [bg, rgba] = color;

    const bgRGBA = 'rgba(' + rgba + ')';
    const rotate = 'rotate('+ deg + 'deg)';
    const style = {
        transform: rotate, 
        backgroundColor: bg,
    };

    return (
        <div className="contain-wrap">
            <div className="circle-wrap" 
                style={{
                    background: bgRGBA
                }}>
                <div className="circle">
                    <div className="mask full" 
                        style={{
                            transform: rotate
                        }}>
                        <div className="fill"
                            style={style}/>
                    </div>
                    <div className="mask half">
                        <div className="fill"
                            style={style}/>
                    </div>
                    <div className="inside-circle"> {vote_average ? `${vote_average*10}%` : 'NR'} </div>
                </div>
            </div>
        </div>
    )
}

export default Circle
