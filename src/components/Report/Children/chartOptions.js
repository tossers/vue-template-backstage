export function getPieOptions (seriesData, legendData) {
    return {
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            // type: 'scroll',
            bottom: 30,
            orient: 'horizontal',
            data: legendData.map(item => ({name: item, icon: 'circle'})),
        },
        series: [
            {
                type: 'pie',
                radius: '55%',
                center: ['50%', '40%'],
                animation: true,
                data: seriesData,
                label: {
                    normal: {
                        formatter: '{d}%'
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
}

export function getBarOptions (seriesData, legendData) {
    return {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            bottom: 25,
            data: [{
                name: '数量',
                icon: 'circle'
            }]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '20%',
            top: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: legendData,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '数量',
                type: 'bar',
                barWidth: '60%',
                data: seriesData.map(item => item.value),
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
            }
        ]
    };
}

export function getBarListOptions (seriesData, legendData) {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            bottom: 5,
            data: [{
                name: '系列一',
                icon: 'circle'
            }, {
                name: '系列二',
                icon: 'circle'
            }, {
                name: '系列三',
                icon: 'circle'
            }]
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '12%',
            bottom: '12%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: legendData,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '系列一',
                type: 'bar',
                barGap: 0.1,
                data: seriesData.map(item => item.value),
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
            },
            {
                name: '系列二',
                type: 'bar',
                data: seriesData.map(item => item.value),
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
            },
            {
                name: '系列三',
                type: 'bar',
                data: seriesData.map(item => item.value),
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
            },
        ]
    };
}
