export interface EventType{
    event: number
}

export interface TimeType{
    start: number,
    end: number,
    title: string
}

export interface eventsDataType{
    event: string,
    year: number
}

export interface actionType {
    type: string | undefined,
    payload?: number
}