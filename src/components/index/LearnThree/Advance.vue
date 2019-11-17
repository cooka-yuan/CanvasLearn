<!--
 * @Author: yuanzhiyu
 * @Date: 2019-10-24 20:32
 * @Description: SVG进阶
 -->
<template>
    <div class="demo-three">
        <!-- 变形 -->
        <canvas ref="canvasOne"></canvas>
        <canvas ref="canvasTwo"></canvas>
        <canvas ref="canvasThree"></canvas>
        <!-- 合成 -->
        <canvas ref="canvasFour"></canvas>
        <!-- 裁剪 -->
        <canvas ref="canvasFive"></canvas>
        <!-- 动画 -->
        <canvas ref="canvasSix" width="300" height="300"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {
        this.init();
        this.drawRotate();
        this.drawScale();
        this.drawSource();
        this.drawClip();
        setInterval(() => {
            this.drawAnimate();
        }, 1 * 1000);
    },
    methods: {
        init() {
            if (!this.$refs.canvasOne.getContext) return;
            const ctx = this.$refs.canvasOne.getContext('2d');

            ctx.save();
            // 注意：translate移动的是canvas的坐标原点。(坐标变换)
            ctx.translate(10, 10);
            ctx.strokeRect(0, 0, 100, 100);

            ctx.restore();
            ctx.translate(120, 10);
            ctx.fillRect(0, 0, 100, 100);
        },
        drawRotate() {
            if (!this.$refs.canvasTwo.getContext) return;
            const ctx = this.$refs.canvasTwo.getContext('2d');

            ctx.fillStyle = 'red';
            ctx.save();

            ctx.translate(80, 10);
            ctx.rotate(Math.PI / 180 * 45);
            ctx.fillStyle = 'blue';
            ctx.fillRect(0, 0, 100, 100);
            ctx.restore();

            ctx.save();
            ctx.translate(0, 0);
            ctx.fillRect(0, 0, 50, 50);
            ctx.restore();
        },
        drawScale() {
            if (!this.$refs.canvasThree.getContext) return;
            const ctx = this.$refs.canvasThree.getContext('2d');

            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, 100, 100);

            ctx.translate(120, 0);
            ctx.fillStyle = 'blue';
            // 该属性要放在图形的上面才生效
            ctx.scale(0.51, 0.5);
            // transform(a, b, c, d, e, f) (x缩放，x歪斜，y歪斜，y缩放，x移动，y移动)
            ctx.transform(1, 1, 0, 1, 0, 0);
            ctx.fillRect(0, 0, 100, 100);
        },
        drawSource() {
            if (!this.$refs.canvasFour.getContext) return;
            const ctx = this.$refs.canvasFour.getContext('2d');
            ctx.fillStyle = 'blue';
            ctx.fillRect(0, 0, 100, 100);

            // ctx.globalCompositeOperation = 'source-over'; // 全局合成操作
            // 仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的
            // ctx.globalCompositeOperation = 'source-in'; // 全局合成操作
            // 仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明
            // ctx.globalCompositeOperation = 'source-out'; // 全局合成操作
            // 新图像仅仅显示与老图像重叠区域。老图像仍然可以显示
            // ctx.globalCompositeOperation = 'source-atop'; // 全局合成操作
            // 新图像会在老图像的下面
            // ctx.globalCompositeOperation = 'destination-over'; // 全局合成操作
            // 仅仅新老图像重叠部分的老图像被显示，其他区域全部透明
            // ctx.globalCompositeOperation = 'destination-in'; // 全局合成操作
            // 仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域
            // ctx.globalCompositeOperation = 'destination-out'; // 全局合成操作
            // 老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面
            // ctx.globalCompositeOperation = 'destination-atop'; // 全局合成操作
            // 新老图像都显示，但是重叠区域的颜色做加处理
            // ctx.globalCompositeOperation = 'lighter'; // 全局合成操作
            // 保留重叠部分最黑的像素
            // ctx.globalCompositeOperation = 'darken'; // 全局合成操作
            // 保证重叠部分最量的像素
            // ctx.globalCompositeOperation = 'lighten'; // 全局合成操作
            // 重叠部分会变成透明
            // ctx.globalCompositeOperation = 'xor'; // 全局合成操作
            // 只有新图像会被保留，其余的全部被清除(边透明)
            ctx.globalCompositeOperation = 'copy'; // 全局合成操作
            ctx.fillStyle = 'red';
            ctx.fillRect(20, 20, 100, 100);
        },
        drawClip() {
            if (!this.$refs.canvasFive.getContext) return;
            const ctx = this.$refs.canvasFive.getContext('2d');
            ctx.beginPath();
            ctx.arc(20, 20, 100, 0, Math.PI * 2);
            // 把已经创建的路径转换成裁剪路径，
            // 裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏，
            // 注意:clip()只能遮罩在这个方法调用之后绘制的图像如果是clip()方法调用之前绘制的图像则无法实现遮罩
            ctx.clip();

            ctx.fillStyle = 'pink';
            ctx.fillRect(20, 20, 100, 100);
        },
        drawAnimate() {
            if (!this.$refs.canvasSix.getContext) return;
            const ctx = this.$refs.canvasSix.getContext('2d');
            /**
            * 控制动画三个方法
            * setInterval()
            * setTimeout()
            * requestAnimationFrame()
            */
            const step = () => {
                this.drawDial(ctx); // 绘制表盘
                this.drawAllHands(ctx); // 绘制时分秒针
                this.requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        },
        // 绘制时分秒针
        drawAllHands(context) {
            const ctx = context;
            const time = new Date();

            const s = time.getSeconds();
            const m = time.getMinutes();
            const h = time.getHours();

            const pi = Math.PI;
            const secondAngle = pi / 180 * 6 * s; // 计算出来s针的弧度
            const minuteAngle = pi / 180 * 6 * m + secondAngle / 60; // 计算出来分针的弧度
            const hourAngle = pi / 180 * 30 * h + minuteAngle / 12; // 计算出来时针的弧度

            this.drawHand(hourAngle, 60, 6, 'red', ctx); // 绘制时针
            this.drawHand(minuteAngle, 106, 4, 'green', ctx); // 绘制分针
            this.drawHand(secondAngle, 129, 2, 'blue', ctx); // 绘制秒针
        },
        /**
         * 绘制时针、或分针、或秒针
            参数1：要绘制的针的角度
            参数2：要绘制的针的长度
            参数3：要绘制的针的宽度
            参数4：要绘制的针的颜色
            参数4：ctx
         */
        drawHand(angle, len, width, color, context) {
            const ctx = context;
            ctx.save();
            ctx.translate(150, 150); // 把坐标轴的远点平移到原来的中心
            ctx.rotate(-Math.PI / 2 + angle); // 旋转坐标轴。 x轴就是针的角度
            ctx.beginPath();
            ctx.moveTo(-4, 0);
            ctx.lineTo(len, 0); // 沿着x轴绘制针
            ctx.lineWidth = width;
            ctx.strokeStyle = color;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        },
        // 绘制表盘
        drawDial(context) {
            const ctx = context;
            const pi = Math.PI;

            ctx.clearRect(0, 0, 300, 300); // 清除所有内容
            ctx.save();

            ctx.translate(150, 150); // 一定坐标原点到原来的中心
            ctx.beginPath();
            ctx.arc(0, 0, 148, 0, 2 * pi); // 绘制圆周
            ctx.stroke();
            ctx.closePath();

            for (let i = 0; i < 60; i += 1) { // 绘制刻度。
                ctx.save();
                ctx.rotate(-pi / 2 + i * pi / 30); // 旋转坐标轴。坐标轴x的正方形从 向上开始算起
                ctx.beginPath();
                ctx.moveTo(110, 0);
                ctx.lineTo(140, 0);
                ctx.lineWidth = i % 5 ? 2 : 4;
                ctx.strokeStyle = i % 5 ? 'blue' : 'red';
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
            ctx.restore();
        },
    },
};
</script>
<style lang="scss" scoped>
.demo-three {
    width: 100%;

    canvas {
        border: 1px solid red;
    }
}
</style>
