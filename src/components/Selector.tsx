import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {EventType} from "../types/event";


const Selector = () => {
    const [page, setPage] = useState<number>(1)
    const dispatch = useDispatch()

    const event = useSelector((state:EventType) =>  state.event)

    useEffect(() => {
        setPage(event)
    }, [event])




    function changeEvents(operation: string) {
        operation === '+' ? dispatch({type: 'SET_INCR', payload: 1})
            : dispatch({type: 'SET_DECR', payload: 1})
    }



    return (
        <div className='selector'>
            <h2>0{page}/06</h2>
            <div className='selectorBtns'>
                <button onClick={() => changeEvents('-')} disabled={page <= 1}>prev</button>
                <button onClick={() => changeEvents('+')} disabled={page >= 6}>next</button>
            </div>
        </div>
    );
};

export default Selector;