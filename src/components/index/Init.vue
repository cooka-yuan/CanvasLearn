<!--
 * @Author: yuanzhiyu
 * @Date: 2019-10-24 20:32
 * @Description: 功能模块组件入口
 -->
<template>
    <div class="init">
        <ul class="clear-fix">
            <li>
                <router-link to="/">
                    <el-button >Canvas基础篇</el-button>
                </router-link>
            </li>
            <li>
                <router-link to="/Demo">
                    <el-button >Canvas会制</el-button>
                </router-link>
            </li>
            <li>
                <router-link to="/Advance">
                    <el-button >Canvas变形</el-button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
    },
    methods: {
    },
};
</script>
<style lang="scss">
    .init {
        ul li {
            float: left;
            margin-top: 10px;
            margin-right: 10px;
        }
    }
</style>
