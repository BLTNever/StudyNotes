import React from 'react'

export const booleanFn = (
    <>
        <p>number : 只有0、 NaN 是false</p>
        <p>string: 空字符串为false其他字符串为ture</p>
        <p>null: false</p>
        <p>undefined: false</p>
        <p>Object: 全是ture</p>
        <p>五个falsy值: 0,  NaN , &quot;&quot; , null , undefined</p>
        <p>(falsy: 是在Boolean上下文中认定可以转换为false的值)</p>
    </>
)
export const intFn = (
    <>
        <p>parseInt(&quot;x,10&quot;),函数解析一个字符串参数，并返回一个指定基数的整数,括号里的10表示10进制。</p>
        <p>parseInt()可以将一个字符串中的有效<b>整数</b>内容取出来，然后转换为Number，从左往右读，读到非整数就停止</p>
    </>
)
export const floatFn = (
    <>
        <p>parseFloat(&quot;x&quot;)函数解析一个字符串参数并返回一个浮点数</p>
        <p>parseFloat()作用和parseInt()类似，不同的是他可以获得有效的小数</p>
    </>
)
export const numberFn = (
    <>
        <div>
            <h4>字符串转数字: </h4>
            <p>1. 如果是纯数字的字符串，直接转换为数字</p>
            <p>2. 如果字符串中有非数字的内容 则转换为NaN</p>
            <p>3. 如果字符串是一个空串或者全是空格的字符串，则转为0</p>
        </div>
        <div>
            <h4>布尔转数字: </h4>
            <p>true转成1，false转成0</p>
        </div>
        <div>
            <h4>null转数字: </h4>
            <p>结果为0</p>
        </div>
        <div>
            <h4>undefined转数字: </h4>
            <p>结果为NaN</p>
        </div>
    </>
)
export const stringFn = (
    <>
        <p>调用String()函数，并将被转换的数据作为参数传递给函数</p>
        <p>使用String()函数做强制类型转换时，对于Number和Boolean实际上就是调用的toString()方法。</p>
        <p>但是对于null和undefined就不会调用toString()方法，它会将null直接转换为“null”；</p>
        <p>将undefined直接转换为“undefined”</p>
    </>
)
export const toStringFn = (
    <>
        <p>调用被转换数据类型的toString()方法</p>
        <p>该方法不会影响原变量，它会将转换的结果返回</p>
        <p>注意: null和undefined这两个值没有toString()方法，如果调用他们的方法会报错。</p>
    </>
)