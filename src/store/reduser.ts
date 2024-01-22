import {actionType, EventType} from "../types/event";

const defaultState:EventType = {
    event: 1,
}
export const eventsReduser = (state:EventType = defaultState, action:actionType):EventType =>{
    if (action.payload)
    switch (action.type){
        case 'SET_INCR':
            return {...state, event: state.event + action.payload}
        case 'SET_DECR':
            return {...state, event: state.event - action.payload}
        case 'SET_STATE':
            return {...state, event: action.payload}
        default: return state
    }
    else return defaultState
}