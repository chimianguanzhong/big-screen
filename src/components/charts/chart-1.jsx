import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Chart1 = () => {
    // 第三步：divRef打印出来一个对象，里面只有一个属性current
    const divRef = useRef(null);
    useEffect( () => {
        // 第四步：echarts 在这个div上面进行图表的操作
        var myEchart = echarts.init(divRef.current);
        myEchart.setOption({
            grid: {
                x: 20,
                x2: 20,
                y: 20,
                y2: 20,
                containLabel: true
            },
            xAxis: {
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 6,
                        color: '#79839E'
                    },
                    formatter(val) { 
                        if(val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('')
                        } else {
                            return val
                        }
                    }
                }
              },
              yAxis: {
                splitLine: {show: false}, 
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 6,
                        color: '#79839E'
                    }, 
                },
                
              },
              series: [
                {
                  type: 'bar',
                  data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
                }
              ]
        })
    }, [])
    
    return (
        // 第一步：准备好一个div
        // 第二部：在div上面绑定ref，传给divRef对象
        <div className='bordered 管辖统计'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">
            </div>
        </div>
    )
}