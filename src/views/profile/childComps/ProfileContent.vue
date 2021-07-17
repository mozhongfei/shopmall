<template>
    <div id="profileContent">
        <div class="contentItem"
             v-for="(item,index) in contents"
             :key="index"
            >
            <img :src="item.icon">
            <div :class="['title',{border : index !== currentIndex}]">{{item.title}}</div>
        </div>
        <div class="set">
            <div class="set-img">
                <img src="~assets/img/profile/setting.svg">
            </div>
            <div class="title">设置</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {List} from 'vant';
    Vue.use(List);
    export default {
        name: "ProfileContent",
        data() {
            return {
                contents: [
                    {
                        icon: require('assets/img/profile/message.svg'),
                        title: '我的消息',
                        link: ''
                    },
                    {
                        icon: require('assets/img/profile/pointer.svg'),
                        title: '积分商城',
                        link: ''
                    },
                    {
                        icon: require('assets/img/profile/vip.svg'),
                        title: '会员卡',
                        link: ''
                    },
                    {
                        icon: require('assets/img/profile/cart.svg'),
                        title: '我的购物车',
                        link: ''
                    },
                    {
                        icon: require('assets/img/profile/shopping.svg'),
                        title: '下载购物APP',
                        link: ''
                    }
                ],
                currentIndex: 0
            }
        },
        computed: {},
        mounted() {
            this.currentIndex = this.contents.length - 1
        }
    }
</script>

<style scoped>
    #profileContent {
        color: gray;
    }
    .contentItem img {
        width: 27px;
        height: 44px;
        margin-left: 10px;
    }
    .contentItem {
        display: flex;
        padding: 4px;
    }
    .border {
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
    .set img {
        width: 33px;
        height: 33px;
    }
    .set {
        display: flex;
        padding: 6px;
        border-top: 20px solid #eee;
        color: gray;
    }
    .title {
        height: 44px;
        width: 100%;
        line-height: 44px;
        font-size: 14px;
        margin-left: 10px;
    }
    .set-img {
        margin-top: 3px;
        margin-left: 10px;
    }
</style>