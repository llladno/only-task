import React, {useEffect, useState} from 'react';
import data from './../data/data.json'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import Event from "./Event";
import './../assets/styles/style.css';
import {useSelector} from "react-redux";
import {eventsDataType, EventType} from "../types/event";



const Slider = () => {
    const [eventsData, setEventsData] = useState<eventsDataType[]>()

    const [width, setWidth] = useState(window.screen.width)
    const event = useSelector((state: EventType) => state.event)

    window.addEventListener('resize',()=>{
        setWidth(window.screen.width)
    })


    useEffect(()=>{
        switch (event){
            case 1: return setEventsData(data.cinema)
            case 2: return setEventsData(data.IT)
            case 3: return setEventsData(data.game)
            case 4: return setEventsData(data.science)
            case 5: return setEventsData(data.literature)
            case 6: return setEventsData(data.politics)
        }
    },[event, window.screen])

    return (
        <div className='slider'>
            <Swiper
                slidesPerView={width < 1200 ? 1.5 : 3.5}
                spaceBetween={80}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {eventsData ? eventsData.map((x:eventsDataType, index:number)=>{
                    return <SwiperSlide><Event key={index} event={x}></Event></SwiperSlide>
                }) : <h1>Загрузка</h1>}

            </Swiper>
        </div>
    );
};

export default Slider;