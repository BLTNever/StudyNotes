/**
 * 详情页内容头
 */
import React from 'react'
import style from './Style.module.less'

interface Iprops {
  title: string
}

const ContentBar = (props: any) => {
  const { title } = props
  return (
    <div className={style.titleBar}>
      <div className='bar-content'>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default ContentBar
