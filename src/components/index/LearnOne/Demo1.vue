<!--
 * @Author: yuanzhiyu
 * @Date: 2019-10-24 20:32
 * @Description: SVG基础篇
 -->
<template>
    <div class="demo1 clear-fix">
        <!-- Canvas基础篇 -->
        <h2>context属性</h2>
        <table>
            <tr>
                <td>属性名</td>
                <td>描述</td>
            </tr>
            <tr>
                <td>canvas</td>
                <td>指向所属的canvas对象。常用来获取canvas的宽高：context.canvas.width, context.canvas.height</td>
            </tr>
            <tr>
                <td>fillStyle</td>
                <td>指定后续图形填充色、渐变色或者图案</td>
            </tr>
            <tr>
                <td>strokeStyle</td>
                <td>指定后续对路径进行描边的颜色、渐变色或者图案</td>
            </tr>
            <tr>
                <td>font</td>
                <td>指定后续fillText()或strokeText()方法所绘制的文字的字体</td>
            </tr>
            <tr>
                <td>textAlign</td>
                <td>指定后续fillText()或strokeText()方法所绘制的文字的水平对齐方式</td>
            </tr>
            <tr>
                <td>textBaseLine</td>
                <td>指定后续fillText()或strokeText()方法所绘制的文字的垂直对齐方式</td>
            </tr>
            <tr>
                <td>globalAlpha</td>
                <td>指定后续图形的透明度，值域为[0,1]</td>
            </tr>
            <tr>
                <td>globalCompositeOperation</td>
                <td>指定后续的图形与画布上已有图形的覆盖方式</td>
            </tr>
            <tr>
                <td>lineCap</td>
                <td>指定后续线段端点的呈现方式（butt、round、square），默认为butt</td>
            </tr>
            <tr>
                <td>lineWidth</td>
                <td>指定后续线段宽度，默认为1</td>
            </tr>
            <tr>
                <td>lineJoin</td>
                <td>指定后续线段与线段之间连接点的呈现方式（bevel、round、miter），默认为miter</td>
            </tr>
            <tr>
                <td>miterLimit</td>
                <td>指定后续线段与线段之间的miter连接点最长距离</td>
            </tr>
            <tr>
                <td>shadowBlur</td>
                <td>指定后续图形的阴影扩散范围，值越大扩散范围越大，默认为0（该值不是阴影长度，代表的是高斯模糊方程式中的参数值）</td>
            </tr>
            <tr>
                <td>shadowColor</td>
                <td>指定后续图形阴影的颜色。半透明阴影色可将其下面的元素显示出来</td>
            </tr>
            <tr>
                <td>shadowOffsetX</td>
                <td>指定后续图形阴影的水平偏移量</td>
            </tr>
            <tr>
                <td>shadowOffsetY</td>
                <td>指定后续图形阴影的垂直偏移量</td>
            </tr>
        </table>
        <canvas class="cvs" ref="canvas" width="300" height="150"></canvas>
        <canvas class="cvs" ref="canvasFill" width="300" height="150"></canvas>
        <canvas class="cvs" ref="canvasStroke" width="300" height="150"></canvas>
        <canvas class="cvs" ref="canvasLine" width="600" height="550"></canvas>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    mounted() {
        this.init();
        this.styleColor();
        this.lineStyle();
    },
    methods: {
        init() {
            if (!this.$refs.canvas.getContext) return;
            // TODO 检测浏览器支持
            const ctx = this.$refs.canvas.getContext('2d');

            // 会制长方形
            // 填充型fillRect(x, y, width, height)
            ctx.fillRect(0, 0, 55, 50);
            ctx.fillStyle = 'blue';
            // 边框型
            ctx.strokeRect(55, 50, 55, 50);
            ctx.strockStyle = 'red';
            ctx.strockWidth = 2;
            // 清除指定的矩形区域，然后这块区域会变的完全透明。
            // ctx.clearRect(0, 0, 55, 50);
        },
        styleColor() {
            if (!this.$refs.canvasFill.getContext) return;
            // TODO 检测浏览器支持
            const ctx = this.$refs.canvasFill.getContext('2d');
            for (let i = 0; i < 6; i += 1) {
                for (let j = 0; j < 6; j += 1) {
                    ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
                    ctx.fillRect(j * 50, i * 50, 50, 50);
                }
            }

            if (!this.$refs.canvasStroke.getContext) return;
            const ctx1 = this.$refs.canvasStroke.getContext('2d');
            for (let i = 0; i < 6; i += 1) {
                for (let j = 0; j < 6; j += 1) {
                    ctx1.strokeStyle = `rgb(${this.randomInt(0, 255)},${this.randomInt(0, 255)},${this.randomInt(0, 255)})`;
                    ctx1.strokeRect(j * 50, i * 50, 50, 50);
                }
            }
        },
        randomInt(from, to) {
            return parseInt(Math.random() * (to - from + 1) + from, 10);
        },
        lineStyle() {
            if (!this.$refs.canvasLine.getContext) return;
            const ctx = this.$refs.canvasLine.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.lineTo(100, 100);
            // 线宽
            ctx.lineWidth = 10;
            ctx.stroke();
            // 线端样式[方形，圆形，]
            const lineCaps = ['butt', 'round', 'square'];
            for (let i = 0; i < 3; i += 1) {
                ctx.beginPath();
                ctx.moveTo(20 + 30 * i, 20);
                ctx.lineTo(100 + 30 * i, 100);
                // 线宽
                ctx.lineWidth = 10;
                ctx.lineCap = lineCaps[i];
                ctx.stroke();
            }

            ctx.beginPath();
            ctx.moveTo(0, 30);
            ctx.lineTo(300, 30);

            ctx.moveTo(0, 100);
            ctx.lineTo(300, 100);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1;
            ctx.stroke();

            const lineJoin = ['round', 'bevel', 'miter'];
            ctx.lineWidth = 20;

            for (let i = 0; i < lineJoin.length; i += 1) {
                // 同一个path内，设定线条与线条间接合处的样式。
                ctx.lineJoin = lineJoin[i];
                ctx.beginPath();
                ctx.moveTo(150, 150 + i * 50);
                ctx.lineTo(200, 200 + i * 50);
                ctx.lineTo(250, 150 + i * 50);
                ctx.lineTo(300, 200 + i * 50);
                ctx.lineTo(350, 150 + i * 50);
                ctx.stroke();
            }
            ctx.closePath();

            ctx.setLineDash([20, 5]); // [实线长度, 间隙长度]
            ctx.lineDashOffset = -1;
            ctx.strokeRect(250, 250, 210, 210);
        },
    },
};
</script>
<style lang="scss" scoped>
.demo1 {
    width: 100%;

    canvas {
        float: left;
        border: 1px solid red;
    }

    table {
        float: left;
    }

    table td {
        height: 50px;
        border: 1px solid #000;
        font-size: 18px;
        line-height: 50px;
        text-align: left;
    }
}
</style>
