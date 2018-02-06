<template>
    <div :class="$style.wrapper">
        <div :class="$style.title">
            <h3>柱形图</h3>
            <span style="font-size: 12px;cursor: pointer; margin-right: 15px">
                <img style="vertical-align: middle;" src="../../../assets/export.png" alt="">
                导出Excel</span>
            <img style="cursor: pointer" src="../../../assets/expand.png" alt=""/>
        </div>
        <div ref="chart" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<script>
    import { getBarListOptions, getBarOptions } from './chartOptions';

    export default {
        props: ['type'],    //type柱状图类型
        data () {
            return {
                myChart: null,
                legendData: ['2017-12', '2017-11', '2017-10', '2017-09', '2017-08', '2017-07'],
                seriesData: [{
                    name: '系列一',
                    value: 10,
                }, {
                    name: '系列二',
                    value: 10,
                }, {
                    name: '系列三',
                    value: 10,
                }, {
                    name: '系列四',
                    value: 10,
                }, {
                    name: '系列五',
                    value: 10,
                }, {
                    name: '系列六',
                    value: 10,
                }],
            };
        },
        mounted () {
            const option = this.type === 2 ? getBarListOptions(this.seriesData, this.legendData) : getBarOptions(this.seriesData, this.legendData);
            setTimeout(() => {
                this.myChart = window.echarts.init(this.$refs.chart);
                this.myChart.setOption(option);
                if (window.onresize) {
                    const temp = Object.assign({}, {resize: window.onresize});
                    window.onresize = () => {
                        temp.resize();
                        this.myChart.resize();
                    };
                } else {
                    window.onresize = this.myChart.resize;
                }
            }, 100);
        },
    };
</script>

<style lang="less" module>
    .wrapper {
        height: auto;
        border: 1px solid #d8dde6;
        .title {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10Px 25Px;
            color: #636975;
            /*border: 1px solid #d8dde6;*/
            border-bottom: 1px solid #d8dde6;
            & > h3 {
                /*margin: 0;*/
                margin-top: 0;
                margin-bottom: 0;
                margin-right: auto;
            }
        }
    }
</style>
