import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function useAhchor(anchorName: string) {
    const location = useLocation()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { hash } = location
        if (hash.length) scrollToAnchor(hash)
    }, [])
}
