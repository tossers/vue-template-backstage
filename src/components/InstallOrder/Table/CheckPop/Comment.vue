<template>
    <div class="comment">
        <div class="comment-header">
            <span class="comment-header-line line__left" />
            <span>用户陈先生的评价</span>
            <span class="comment-header-line line__right"/>
        </div>
        <div class="comment-main">
            <div class="comment-main__wrapper comment-main-left">
                <div class="flex-vertical-center" style="font-size: 16px">
                    <span>产品评价:</span>
                    <img style="margin: 0 20px 0 40px;" src="~assets/face.png" alt="">
                    <span>好评</span>
                </div>
                <p class="comment-p">这里是评价详情（如果用户有上传图片，则在留言区下方显示，点击图片可查看大图。）</p>
                <div class="comment-img">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                    <img src="~assets/show1.png" alt="">
                </div>
            </div>
            <div class="comment-main__wrapper comment-main-right">right</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .comment {
        padding: 0 60px;
        .comment-header {
            position: relative;
            margin-bottom: 20px;
            color:#9ca2ad;
            text-align: center;
            .comment-header-line {
                position: absolute;
                border-top: 1px solid rgba(156, 162, 173, 0.58);
                width: 42%;
                top: 50%;
            }
            .line__left {
                left: 0;
            }
            .line__right {
                right: 0;
            }
        }
        .comment-main {
            display: flex;
            justify-content: space-between;
            .comment-main__wrapper {
                padding: 30px;
                background:#f5f5f5;
                border:1px solid #d8dde6;
                border-radius:4px;
            }
            .comment-main-left {
                flex: 0.48;
                .comment-p {
                    height: 200px;
                    color: #9ca2ad;
                    overflow: hidden;
                }
                .comment-img {
                    img {
                        width: 80px;
                        height: 80px;
                        margin-right: 10px;
                        margin-bottom: 10px;
                    }
                }
            }
            .comment-main-right {
                flex: 0.48;
            }
        }
    }
</style>
