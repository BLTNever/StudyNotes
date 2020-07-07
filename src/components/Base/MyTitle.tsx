import React from 'react'

interface IPorps {
    title: string
}
export default function MyTitle(props: IPorps) {
    return (
        <div id="content-title">
            <span></span>
            {props.title}
        </div>
    )
}