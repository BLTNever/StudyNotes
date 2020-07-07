import React from 'react'

interface IProps {
  id: string;
  type: number;
  children: any;
  cls?: string;
}

const CommonWrap = (props: IProps) => {
  const { cls } = props
  return (
    <div className={`commonWrap ${cls}`} id={props.id}>
      {props.children}
    </div>
  )
}

CommonWrap.defaultProps = {
  type: 1,
  id: 1
}
export default CommonWrap
