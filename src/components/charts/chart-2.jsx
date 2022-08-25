import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '城关区公安局', 2011: 2, 2012: 3},
        {name: '七里河区公安局', 2011: 2, 2012: 3},
        {name: '西固区公安局', 2011: 2, 2012: 3},
        {name: '安宁区公安局', 2011: 2, 2012: 3},
        {name: '红古区公安局', 2011: 2, 2012: 3},
        {name: '永登县公安局', 2011: 2, 2012: 3},
        {name: '皋兰县公安局', 2011: 2, 2012: 3},
        {name: '榆中县公安局', 2011: 2, 2012: 3},
        {name: '新区公安局', 2011: 2, 2012: 3},
    ];

    useEffect(() => {
        // 2. 每秒调用一次 -> 刷新图表数据方法
        setInterval(() => {
            const newData = [
                {name: '城关区公安局', 2011: 2, 2012: Math.random() * 10},
                {name: '七里河区公安局', 2011: 2, 2012: 3},
                {name: '西固区公安局', 2011: 2, 2012: 3},
                {name: '安宁区公安局', 2011: 2, 2012: 3},
                {name: '红古区公安局', 2011: 2, 2012: 3},
                {name: '永登县公安局', 2011: 2, 2012: 3},
                {name: '皋兰县公安局', 2011: 2, 2012: 3},
                {name: '榆中县公安局', 2011: 2, 2012: 3},
                {name: '新区公安局', 2011: 2, 2012: 3},
            ];
            x(newData);
        }, 1000);
        
    }, []);

    // 3. 刷新图表数据方法
    const x = (data) => {
        myChart.current.setOption({
            grid: {
                x: 20,
                x2: 20,
                y: 20,
                y2: 20,
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01], // 坐标轴两边留白策略
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: data.map(i => i.name),
                axisLabel: {
                    textStyle: {
                        fontSize: 6,
                        color: '#79839E'
                    }, 
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: data.map(i => i[2011])
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: data.map(i => i[2012])
                }
            ]
        
        })
    };
    // 1. 初始化图表
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    });


    return (
        <div className='bordered 破获排名'>
            <h2>破获案件排名</h2>
            <div ref={divRef} className='chart'/>
            <div className='legend'>
                <span className='first'/> 破案排名1
                <span className='second'/> 破案排名2
            </div>
        </div>
    )
}