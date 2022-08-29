import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const Chart9 = () => {
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
            color: '#F7A110',
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 18, 28, 38, 48, 58, 68, 78],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    textStyle: {
                        fontSize: 6,
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
                        fontSize: 6,
                    }
                }
            },
            series: [{
                type: 'line',
                data: [
                    0.19, 0.20, 0.26,
                    0.35, 0.26, 0.20,
                    0.08, 0.06
                ],
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {width: 1},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F7A110'
                    }, {
                        offset: 1,
                        color: '#1B1D52'
                    }]),
                }
            }]
        });
    }, []);

    return (
        <div className="年龄段-图3">
            <h3>犯罪年龄趋势图</h3>
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};