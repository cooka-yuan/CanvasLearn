<template>
    <div id="app" class="clearfix">
        <router-view/>
    </div>
</template>

<style>
#app {
    overflow: hidden;
}

.page {
    position: absolute;
    right: 0;
    bottom: 0;
}

#pageBar {
    position: fixed;
    right: 20px;
    bottom: 60px;
}
</style>

<script>

export default {
    name: 'app',
};
</script>

<style>
/* 四个三角形 */
.triangle::before {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;

    /* border: 8px solid; */
    border-color: rgba(111, 216, 255, 0.2) rgba(111, 216, 255, 0.2) rgba(0, 0, 0, 0) rgba(111, 216, 255, 0.2);
    border-top: none;
    content: '';
}

.triangle::after {
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;

    /* border: 8px solid; */
    border-color: rgba(0, 0, 0, 0) rgba(111, 216, 255, 0.2) rgba(111, 216, 255, 0.2);
    border-bottom: none;
    content: '';
    z-index: 100;
}
</style>
