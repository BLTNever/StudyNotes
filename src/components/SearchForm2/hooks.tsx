import React, { useEffect, useRef } from 'react';

export function useEventListener(eventName: string, handler: any, element = window) {
    const saveHandler = useRef<any>()

    useEffect(() => {
        saveHandler.current = handler
    }, [handler])

    useEffect(
        () => {
            const isSupported = element && element.addEventListener
            if (!isSupported) return

            const eventListener = (event: any) => saveHandler.current(event)
            element.addEventListener(eventName, (e: any) => {
                let event: any = null
                if (window.event) {
                    event = window.event
                }
                let code = e.charCode || event.keyCode
                if (code === 13) {
                    eventListener(e)
                }
            })

            return () => {
                element.removeEventListener(eventName, eventListener);
            }
        },
        [eventName, element]
    )
}