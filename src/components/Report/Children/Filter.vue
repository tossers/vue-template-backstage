<template>
    <div :class="$style.wrapper">
        <h3>查询条件</h3>
        <div>
            <div :class="$style.date">
                <span :class="$style.title">销售日期</span>
                <el-date-picker
                    size="small"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-value="new Date()">
                </el-date-picker>
            </div>
            <div>
                <span :class="$style.title">员工</span>
                <div :class="$style.search">
                    <el-input
                        size="small"
                        placeholder="员工姓名/工号"
                        clearable>
                    </el-input>
                    <el-button size="small">搜索</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
        }
    };
</script>

<style lang="less" module>
    .wrapper {
        margin-bottom: 10Px;
        & > h3 {
            padding: 10Px 25Px;
            margin: 0;
            color:#636975;
            background:#f0f5fc;
            border:1px solid #d8dde6;
        }
        &>div {
            display: flex;
            padding: 12Px 25Px;
            border:1px solid #d8dde6;
            border-top: 0;
            .title {
                display: block;
                margin-bottom: 8px;
                font-size:14px;
                color:#636975;
            }
            .date {
                margin-right: 30Px;
                :global(.el-date-editor) {
                    width: 250Px;
                    border-radius: 0;
                    :global(.el-range-input) {
                        width: 35%;
                    }
                }
            }
            .search {
                display: flex;
                input {
                    width: 200Px;
                    border-radius: 0;
                    border: 1px solid #d8dde6;
                    border-right: 0;
                }
                button {
                    border-radius: 0;
                }
            }
        }
    }
</style>
