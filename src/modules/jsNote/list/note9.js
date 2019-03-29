
import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Divider } from 'antd';
import { debounce, throttle } from './example';

const Note9 = () => (
    <div>
        <h2>记录一些问题</h2>
        <div className="note-wrap">
            <h3>函数防抖、函数节流</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="函数防抖(debounce)">
                        <h4>思路：</h4>
                        <p>把目标方法fn包装在setTimeout里。fn是某个事件的回调函数</p>
                        <p>如果fn一直执行，通过clearTimeout将事件内的连续动作删掉</p>
                        <Highlight language="javascript">
                            {debounce}
                        </Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="函数节流(throttle)">
                        <h4>函数节流: 让某个方法在某个时间段内只执行一次</h4>
                        <p>需要保存上次执行的时间点与定时器</p>
                        <Highlight language="javascript">
                            {throttle}
                        </Highlight>
                    </Card>
                </Col>
            </Row>
        </div>
        <Divider />

        <div className="note-wrap">
            <h3>for...in & for...of</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="for...of">
                        <p><b>for...of语句</b>在<b>可迭代对象（包括Array，Map，Set，String，TypedArray，arguments 对象等等）</b>上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</p>
                        <p>for...of的循环，可以由break, continue, throw 或return终止。在这些情况下，迭代器关闭。</p>
                        <p>for...of 语句遍历可迭代对象定义要迭代的数据。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="for...in">
                        <p>for...in语句以任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行。</p>
                        <p>for...in不应该用于迭代一个 Array，其中索引顺序很重要。</p>
                        <p>for...in 循环只遍历可枚举属性。像 Array和Object使用内置构造函数所创建的对象都会继承自Object.prototype和String.prototype的不可枚举属性，例如 String 的 indexOf()  方法或 Object的toString()方法。循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性（更接近原型链中对象的属性覆盖原型属性）。</p>
                        <p>for...in语句以原始插入顺序迭代对象的可枚举属性。</p>
                    </Card>
                </Col>
            </Row>
        </div>


        <div className="note-wrap">
            <h3>i++ & ++i</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="i++">
                       <h4>i++ 返回原来的值</h4>
                       <p>i++ 先返回i , 再自增加1</p>
                       <p>i++ : 先运算，后加1</p>
                       <p>i++ 不能做为左值</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="++i">
                        <h4>++i 返回加1后的值</h4>
                        <p>++i 先自增加1, 再返回i</p>
                        <p>++i : 先加1，后运算</p>
                        <p>++i 可以作为左值</p>
                        <p>左值是对应内存中有确定存储地址的对象的表达式的值，而右值是所有不是左值的表达式的值</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>i+=1 & i=i+1</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="i+=1">
                    
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="i=i+1">
                     
                    </Card>
                </Col>
            </Row>
        </div>
    </div >
)

export default Note9;


/**
 *
 * @param {*} longitudeA A地点经度
 * @param {*} latitudeA A地点纬度
 * @param {*} longitudeB B地点纬度
 * @param {*} latitudeB B地点纬度
 */
function getDistance (longitudeA, latitudeA, longitudeB, latitudeB){
    const EARTH_R = 6378137; // 地球半径
    const LAT_A = latitudeA *  Math.PI / 180;
    const LAT_B = latitudeB *  Math.PI / 180;

    const A = LAT_A - LAT_B;
    const B = (longitudeA - longitudeB) * Math.PI / 180;
    const LOC_A = Math.sin(A / 2);
    const LOC_B = Math.sin(B / 2);

    const DISTANCE = 2 * EARTH_R * Math.asin(Math.sqrt(LOC_A * LOC_A + Math.cos(LAT_A) * Math.cos(LAT_B) * LOC_B * LOC_B));

    return DISTANCE / 1000; // 公里
}

const longSH = 121.47;
const latSH = 31.23;
const longBJ = 116.40 ;
const latBJ = 39.90;

// getDistance(longSH, latSH, longBJ, latBJ)


// [
//     {
//         'name': '北京', 
//         'city':[
//             {'name': '北京市', 'longitude': 116.40, 'latitude': 39.90 }
//         ]
//     },
//     {
//         'name': '上海', 
//         'city':[
//             {'name': '上海市', 'longitude': 121.47, 'latitude': 31.23 }
//         ]
//     },
//     {
//         'name': '浙江省', 
//         'city':[
//             {'name': '杭州市', 'longitude': XXX, 'latitude': XXX },
//             {'name': '宁波市', 'longitude': XXX, 'latitude': XXX },
//         ]
//     },
// ]