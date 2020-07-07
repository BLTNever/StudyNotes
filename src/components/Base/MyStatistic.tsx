import React from 'react'

interface IPorps {
    text?: string
    child?: () => void
}
export default function MyStatistic(props: IPorps) {
    return (
        <div id="my-statistic">
            <div className="unusual" >
                {props.text ? props.text : null}
                {props.child ? props.child() : null}
            </div>
        </div>
    )
}