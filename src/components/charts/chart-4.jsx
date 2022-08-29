import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const Chart4 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            grid: {
                x: 12,
                x2: 20,
                y: 20,
                y2: 6,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    textStyle: {
                        fontSize: 8,
                    }, 
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    },
                    textStyle: {
                        fontSize: 8,
                    }, 
                }
            },
            series: [{
                type: 'line',
                data: [
                    0.15, 0.13, 0.11,
                    0.13, 0.14, 0.15,
                    0.16, 0.18, 0.21,
                    0.19, 0.17, 0.16,
                    0.15
                ],
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {width: 1},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#414a9f'
                    }, {
                        offset: 1,
                        color: '#1b1d52'
                    }]),
                }
            }]
        });
    }, []);

    return (
        <div className="bordered 案发时段">
            <h2>案发时段分析</h2>
            <div ref={divRef} className="chart"/>
        </div>
    );
};