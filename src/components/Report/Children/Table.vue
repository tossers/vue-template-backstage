<template>
    <div :class="$style.wrapper">
        <div :class="$style.title">
            <h3>汇总表(数量)</h3>
            <span style="font-size: 12px;cursor: pointer; margin-right: 15px">
                <img style="vertical-align: middle;" src="../../../assets/export.png" alt="">
                导出Excel</span>
            <img style="cursor: pointer" src="../../../assets/expand.png" alt=""/>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            };
        }
    };
</script>

<style lang="less" module>
    .wrapper {
        height: 100%;
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
        :global {
            .el-table--border td, .el-table--border th {
                border-color: #d8dde6;
                padding-left: 25Px;
                .cell {
                    padding: 0;
                }
            }
            .el-table {
                /*border-color: #d8dde6;*/
                /*border-right: 1px solid #d8dde6;*/
                height: 308Px;
                border: 0;
                overflow-x: auto;
            }
            .active {
                background: #2795f5 !important;
            }
        }
    }
</style>
