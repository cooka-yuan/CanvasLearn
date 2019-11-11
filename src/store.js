/*
 * @Author: wanggang
 * @Date: 2019-08-16 08:54:03
 * @Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 登录的跳转路由
        skipUrl: 'admin',
        // 建筑列表缓存
        buildsInfo: [],
        // 图层信息
        layerInfo: [],
        // 功能模块是否展开,用来改变功能模块旁边按钮的位置
        funcModule: null,
        // 3D 场景内的位置缓存
        positionNav: '0',
        // 设备信息面板
        infoPanel: {
            id: null,
        },
        /**
         * 面板互斥所有参数
         * deviceInfo 显示设备信息面板
         * personManage 显示人员信息面板
         */
        showPanel: '',
        // 视频墙展示
        showVideoPanel: false,
        // 告警弹窗的显示隐藏
        alarmWindow: true,
        // 文件加载上传
        fileUpLoad: {
            url: '',
        },
        panelsControl: {
            showModelPanel: false,
            showdemisionTwoPanel: false,
        },
        tdDeviceInfo: {
            tdDeviceID: '',
            tdDeviceName: '',
            tdDevicePlace: '',
            tdDeviceOther: '',
            tdDeviceScale: '',
            tdDeviceHeight: '',
            tdDeviceType: '',
            tdDevicePic: '',
            tdDeviceMapID: '',
        },
        modelInfo: {
            modelParPic: '',
            modelParScale: null,
            modelParHeight: null,
            modelName: '',
            modelType: '',
        },
        modelFatherData: null, // 待采集设备信息
        powerManage: null,
        sceneId: '',
        secne: '',
        // currentThing: null,
        serviceId: '222',
        siteId: null,
        iconId: null,
        sceneName: '',
        // deviceUi: null, // ui操作面板
        // 确认取消信息面板
        prompt: {
            promptShow: false, // 提示框是否打开，默认关闭
            // promptWD: '', // 面板内提示语句,
            // quitWd: '', // 取消提示语
        },
        // 信息列表定位时该条信息被选中,选中飞行设备的ID
        flyDeviceSelectId: null,
    },
    getters: {
        // 建筑列表添加园区
        buildsInfo(state) {
            // 避免改变state 中的layerList数组
            const builds = state.buildsInfo.filter(build => build);
            builds.unshift({
                pointId: '0',
                pointName: '园区',
            });
            builds.unshift({
                pointId: '',
                pointName: '请选择建筑',
            });
            return builds;
        },
        // layerList添加图层列表项
        layerList(state) {
            // 避免改变state 中的layerList数组
            const layerList = state.layerInfo.filter(build => build);
            layerList.unshift({
                type: '',
                viewName: '请选择设备',
            });
            return layerList;
        },
    },
    mutations: {
        // 设置跳转的路径
        setSkipUrl(state, str) {
            const s = state;
            s.skipUrl = str;
        },
        // 缓存建筑信息
        setBuildsInfo(state, arr) {
            const s = state;
            s.buildsInfo = arr;
        },
        // 缓存图层信息
        setLayerInfo(state, arr) {
            const s = state;
            s.layerInfo = arr;
        },
        // 设置功能模块的展开状态
        setFuncModule(state, str) {
            const s = state;
            s.funcModule = str;
        },
        // 显示设备面板
        setShowPanel(state, str) {
            const s = state;
            s.showPanel = str;
        },
        // 显示视频面板
        setShowVideoPanel(state, str) {
            const s = state;
            s.showVideoPanel = str;
        },
        // 设置告警弹窗面板的显示隐藏
        setAlarmWindow(state, bool) {
            const s = state;
            s.alarmWindow = bool;
        },
        setinfoPanel(state, id) {
            const sta = state;
            sta.infoPanel.id = id;
        },
        changeLoadUrl(state, data) {
            const thisState = state;
            thisState.fileUpLoad = data;
        },
        changePowerManage(state, data) {
            const sta = state;
            sta.powerManage = data;
        },
        selectScene(state, data) {
            const thisState = state;
            thisState.scene = data;
        },
        // currentThing(state, data) {
        //     const thisState = state;
        //     thisState.currentThing = data;
        // },
        showModelPanel(state, data) {
            const thisState = state;
            thisState.panelsControl.showModelPanel = data;
        },
        tdDeviceID(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceID = data;
        },
        tdDeviceName(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceName = data;
        },
        tdDevicePlace(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDevicePlace = data;
        },
        tdDeviceOther(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceOther = data;
        },
        tdDeviceScale(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceScale = data;
        },
        tdDeviceHeight(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceHeight = data;
        },
        modelParPic(state, data) {
            const thisState = state;
            thisState.modelInfo.modelParPic = data;
        },
        modelType(state, data) {
            const thisState = state;
            thisState.modelInfo.modelType = data;
        },
        modelName(state, data) {
            const thisState = state;
            thisState.modelInfo.modelName = data;
        },
        tdDevicePic(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDevicePic = data;
        },
        modelParHeight(state, data) {
            const thisState = state;
            thisState.modelInfo.modelParHeight = data;
        },
        modelParScale(state, data) {
            const thisState = state;
            thisState.modelInfo.modelParScale = data;
        },
        tdDeviceType(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceType = data;
        },
        siteId(state, data) {
            const thisState = state;
            thisState.siteId = data;
        },
        sceneId(state, data) {
            const thisState = state;
            thisState.sceneId = data;
        },
        iconId(state, data) {
            const thisState = state;
            thisState.iconId = data;
        },
        tdDeviceMapID(state, data) {
            const thisState = state;
            thisState.tdDeviceInfo.tdDeviceMapID = data;
        },
        showdemisionTwoPanel(state, data) {
            const thisState = state;
            thisState.panelsControl.showdemisionTwoPanel = data;
        },
        sceneName(state, data) {
            const thisState = state;
            thisState.sceneName = data;
        },
        // deviceUi(state, data) {
        //     const thisState = state;
        //     thisState.deviceUi = data;
        // },
        modelFatherData(state, data) {
            const thisState = state;
            thisState.modelFatherData = data;
        },
        promptShow(state, data) {
            const thisState = state;
            thisState.prompt.promptShow = data;
        },
        // promptWD(state, data) {
        //     const thisState = state;
        //     thisState.prompt.promptWD = data;
        // },
        // quitWd(state, data) {
        //     const thisState = state;
        //     thisState.prompt.quitWd = data;
        // },
        flyDeviceSelectId(state, id) {
            const thisState = state;
            thisState.flyDeviceSelectId = id;
        },
        // 设置导航位置
        setPositionNav(state, str) {
            const s = state;
            s.positionNav = str;
        },
    },
    actions: {

    },
});
