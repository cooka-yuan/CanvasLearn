<!--
 * @Author: yuanzhiyu
 * @Date: 2019-10-24 20:32
 * @Description: 组件入口
 -->
<template>
    <div class="index">
        <h1>Canvas图形会制学习</h1>
        <hr/>
        <!-- 顶部导航 -->
        <Init></Init>
        <!-- 内容区域 -->
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>
import Init from '@/components/index/Init.vue';

export default {
    name: 'index',
    components: {
        Init,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    },
};
</script>
<style lang="scss" scoped>
.index {
    padding: 10px;
    user-select: none;

    .content {
        width: 100%;
        height: 100%;
        padding: 10px;
        background: rgba(156, 231, 238, 0.5);
    }
}
</style>
