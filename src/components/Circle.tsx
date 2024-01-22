import React, {useEffect, useRef, useState} from 'react';
import data from "../data/data.json";
import {useDispatch, useSelector} from "react-redux";
import Odometer from "./Odometer";
import {EventType, TimeType} from "../types/event";


const Circle = () => {
    const event = useSelector((state: EventType) => state.event)
    const [time, setTime] = useState<TimeType>({start: 0, end: 0, title: ''})
    const dispatch = useDispatch()
    const elements = Array.from({length: 6}, (_, index) => index + 1);
    const circleRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    function changePosition(element: number, e:any) {
        if (circleRef.current) {
            let children = Array.from(document.getElementsByClassName('selected') as HTMLCollectionOf<HTMLElement>)
            children[0]?.classList.remove('selected')
        }
        e.target ? e.target.classList.add('selected')
            : e.classList.add('selected')
        dispatch({type: 'SET_STATE', payload: element})
    }


    useEffect(() => {

        if (titleRef.current) {
            titleRef.current.style.opacity = '0'
        }
        setTimeout(() => {
            if (titleRef.current) titleRef.current.style.opacity = '1'
        }, 400)
        if (circleRef.current) {
            let children = Array.from(document.getElementsByClassName('circle-element') as HTMLCollectionOf<HTMLElement>)
            switch (event) {
                case 1:
                    changePosition(event, children[event - 1])
                    circleRef.current.style.transform = `rotate(-60deg)`;
                    children[0].style.transform = `rotate(0deg) translate(265px) rotate(60deg)`;
                    children[1].style.transform = `rotate(60deg) translate(265px) rotate(0deg)`;
                    children[2].style.transform = `rotate(120deg) translate(265px) rotate(300deg)`;
                    children[3].style.transform = `rotate(180deg) translate(265px) rotate(240deg)`;
                    children[4].style.transform = `rotate(240deg) translate(265px) rotate(180deg)`;
                    children[5].style.transform = `rotate(300deg) translate(265px) rotate(120deg)`;
                    return setTime({
                        start: data.cinema[0].year,
                        end: data.cinema[data.cinema.length - 1].year,
                        title: 'Кино'
                    })
                case 2:
                    changePosition(event, children[event - 1])
                    circleRef.current.style.transform = `rotate(-120deg)`;
                    children[0].style.transform = `rotate(0deg) translate(265px) rotate(120deg)`;
                    children[1].style.transform = `rotate(60deg) translate(265px) rotate(60deg)`;
                    children[2].style.transform = `rotate(120deg) translate(265px) rotate(360deg)`;
                    children[3].style.transform = `rotate(180deg) translate(265px) rotate(300deg)`;
                    children[4].style.transform = `rotate(240deg) translate(265px) rotate(240deg)`;
                    children[5].style.transform = `rotate(300deg) translate(265px) rotate(180deg)`;

                    return setTime({
                        start: data.IT[0].year,
                        end: data.IT[data.IT.length - 1].year,
                        title: 'IT'
                    })
                case 3:
                    changePosition(event, children[event - 1])
                    circleRef.current.style.transform = `rotate(-180deg)`;
                    children[0].style.transform = `rotate(0deg) translate(265px) rotate(180deg)`;
                    children[1].style.transform = `rotate(60deg) translate(265px) rotate(120deg)`;
                    children[2].style.transform = `rotate(120deg) translate(265px) rotate(60deg)`;
                    children[3].style.transform = `rotate(180deg) translate(265px) rotate(0deg)`;
                    children[4].style.transform = `rotate(240deg) translate(265px) rotate(300deg)`;
                    children[5].style.transform = `rotate(300deg) translate(265px) rotate(240deg)`;
                    return setTime({
                        start: data.game[0].year,
                        end: data.game[data.game.length - 1].year,
                        title: 'Игры'
                    })
                case 4:
                    changePosition(event, children[event - 1])
                    circleRef.current.style.transform = `rotate(-240deg)`;
                    children[0].style.transform = `rotate(0deg) translate(265px) rotate(240deg)`;
                    children[1].style.transform = `rotate(60deg) translate(265px) rotate(180deg)`;
                    children[2].style.transform = `rotate(120deg) translate(265px) rotate(120deg)`;
                    children[3].style.transform = `rotate(180deg) translate(265px) rotate(60deg)`;
                    children[4].style.transform = `rotate(240deg) translate(265px) rotate(360deg)`;
                    children[5].style.transform = `rotate(300deg) translate(265px) rotate(300deg)`;
                    return setTime({
                        start: data.science[0].year,
                        end: data.science[data.science.length - 1].year,
                        title: 'Наука'
                    })
                case 5:
                    changePosition(event, children[event - 1])
                    circleRef.current.style.transform = `rotate(-300deg)`;
                    children[0].style.transform = `rotate(0deg) translate(265px) rotate(300deg)`;
                    children[1].style.transform = `rotate(60deg) translate(265px) rotate(240deg)`;
                    children[2].style.transform = `rotate(120deg) translate(265px) rotate(180deg)`;
                    children[3].style.transform = `rotate(180deg) translate(265px) rotate(120deg)`;
                    children[4].style.transform = `rotate(240deg) translate(265px) rotate(60deg)`;
                    children[5].style.transform = `rotate(300deg) translate(265px) rotate(360deg)`;
                    return setTime({
                        start: data.literature[0].year,
                        end: data.literature[data.literature.length - 1].year,
                        title: 'Литература'
                    })
                case 6:
                    changePosition(event, children[event - 1])
                    circleRef.current.style.transform = `rotate(-360deg)`;
                    children[0].style.transform = `rotate(0deg) translate(265px) rotate(360deg)`;
                    children[1].style.transform = `rotate(60deg) translate(265px) rotate(300deg)`;
                    children[2].style.transform = `rotate(120deg) translate(265px) rotate(240deg)`;
                    children[3].style.transform = `rotate(180deg) translate(265px) rotate(180deg)`;
                    children[4].style.transform = `rotate(240deg) translate(265px) rotate(120deg)`;
                    children[5].style.transform = `rotate(300deg) translate(265px) rotate(60deg)`;
                    return setTime({
                        start: data.politics[0].year,
                        end: data.politics[data.politics.length - 1].year,
                        title: 'Политика'
                    })
            }
        }
    }, [event])


    return (
        <div className='historyCircle'>
            <div className='historyDate'>
                <div className='line'></div>
                <h1>Исторические <br></br>даты</h1>
            </div>
            <div className='displayCircle'>
                <div className='timeCircle'>
                    <h1 className='time'>
                        <Odometer value={time.start}></Odometer> <span>
                    <Odometer value={time.end}></Odometer></span></h1>
                </div>

                <div ref={circleRef} className="circle">
                    {elements.map((element: number, index:number) => (
                        <div key={element} onClick={(e) => changePosition(element, e)}
                             className={index + " circle-element"}>
                            <div className='info'>{element}</div>
                        </div>
                    ))}
                </div>
                <h3 ref={titleRef} className='title'>{time.title}</h3>
            </div>
        </div>
    );
};

export default Circle;