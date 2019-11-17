<!--
 * @Author: yuanzhiyu
 * @Date: 2019-10-24 20:32
 * @Description: SVG动画篇
 -->
<template>
    <div class="demo-two clear-fix">
        <!-- Canvas会制路径 -->
        <canvas ref="canvas"></canvas>
        <canvas ref="canvasArc"></canvas>
        <canvas ref="canvasArcTo"></canvas>
        <canvas ref="canvasLine"></canvas>
        <canvas ref="canvasThreeLine"></canvas>
        <table>
            <tr>
                <td>形状</td>
                <td>属性</td>
                <td>描述</td>
            </tr>
            <tr>
                <td>路径</td>
                <td colspan="2">
                    <tr>
                        <td>beginPath()</td>
                        <td>新建一条路径</td>
                    </tr>
                    <tr>
                        <td>moveTo(x, y)</td>
                        <td>设置路径的起始点坐标</td>
                    </tr>
                    <tr>
                        <td>closePath()</td>
                        <td>闭合路径</td>
                    </tr>
                    <tr>
                        <td>stroke()</td>
                        <td>通过线条来绘制图形轮廓</td>
                    </tr>
                    <tr>
                        <td>fill()</td>
                        <td>通过填充路径的内容区域生成实心的图形</td>
                    </tr>
                </td>
            </tr>
            <tr>
                <td>线段</td>
                <td>lineTo(x, y)</td>
                <td>绘制一条从当前位置到指定坐标(x, y)的直线</td>
            </tr>
            <tr>
                <td>圆弧1</td>
                <td>arc(x, y, r, startAngle, endAngle, anticlockwise)</td>
                <td>(圆心(x,y), 半径r, 开始弧度， 结束弧度，逆时针true/顺时针false)</td>
            </tr>
            <tr>
                <td>圆弧2</td>
                <td>arcTo(x1, y1, x2, y2, radius)</td>
                <td>(控制点1(x1,y1), 控制点2(x2,y2), 半径</td>
            </tr>
            <tr>
                <td>二次贝塞尔曲线</td>
                <td>quadraticCurveTo(cp1x, cp1y, x, y)</td>
                <td>(控制点(cp1x,cp1y), 结束点(x,y), 半径</td>
            </tr>
            <tr>
                <td>三次贝塞尔曲线</td>
                <td>quadraticCurveTo(cp1x, cp1y, cp2x, cp2,y, x, y)</td>
                <td>(控制点1(cp1x,cp1y), 控制点2(cp2x,cp2y), 结束点(x,y), 半径</td>
            </tr>
        </table>
        <canvas ref="canvasText"></canvas>
        <img src="/static/canvas_img.jpg" alt="" width="100" height="120">
        <canvas ref="canvasImage"></canvas>
        <canvas ref="canvasSave"></canvas>
        <table>
            <tr>
                <td>属性</td>
                <td>描述</td>
            </tr>
            <tr>
                <td>fillText(text, x, y [, maxWidth])</td>
                <td>填充式文本在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.</td>
            </tr>
            <tr>
                <td>strokeText(text, x, y [, maxWidth])</td>
                <td>线框式文本在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.</td>
            </tr>
            <tr>
                <td>font = value</td>
                <td>字体样式，与css相同的语法，必须放在绘制的文本前面才起作用</td>
            </tr>
            <tr>
                <td>textAlign = value</td>
                <td>文本对齐，属性值：start, end, left, right or center. 默认值是 start</td>
            </tr>
            <tr>
                <td>textBaseline = value</td>
                <td>基线对其 属性值：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。</td>
            </tr>
            <tr>
                <td>direction = value</td>
                <td>文本方向 属性值：ltr, rtl, inherit。默认值是 inherit。</td>
            </tr>
            <tr>
                <td>drawImage(image, x, y, width, height)</td>
                <td>绘制图片</td>
            </tr>
            <tr>
                <td>drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)</td>
                <td>切片 前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小。</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    mounted() {
        this.init();
        this.drawArc();
        this.drawArcTo();
        this.drawLine();
        this.drawThreeLine();
        this.drawText();
        this.drawImage();
        this.drawSave();
    },
    methods: {
        init() {
            if (!this.$refs.canvas.getContext) return;
            const ctx = this.$refs.canvas.getContext('2d');
            // 绘制线段
            // 开始绘制
            ctx.beginPath();
            // 指定绘制坐标点
            ctx.moveTo(10, 10);
            ctx.lineTo(60, 60);
            // 结束绘制
            ctx.closePath();
            // 绘制路径
            ctx.stroke();

            // 绘制三角形边框
            ctx.beginPath();
            ctx.moveTo(100, 10);
            ctx.lineTo(130, 60);
            ctx.lineTo(80, 60);
            ctx.closePath();
            ctx.stroke();
            // 填充闭合区域
            ctx.fill();
        },
        drawArc() {
            if (!this.$refs.canvasArc.getContext) return;
            const ctx = this.$refs.canvasArc.getContext('2d');
            // 绘制圆弧,顺时针
            ctx.beginPath();
            // 参数1、2：圆心坐标（x,y）   参数3 r:半径  参数4：开始弧度 参数5：结束弧度， 参数6：顺时针false,逆时针true
            ctx.arc(80, 80, 40, 0, Math.PI / 2, false);
            ctx.stroke();
            // 绘制圆弧,逆时针
            ctx.beginPath();
            ctx.arc(120, 80, 40, 0, -Math.PI / 2, true);
            ctx.stroke();
            // 绘制圆弧,逆时针
            ctx.beginPath();
            ctx.arc(20, 20, 40, 0, Math.PI / 2, false);
            ctx.stroke();
            ctx.fill();
            // 绘制圆弧,逆时针
            ctx.beginPath();
            ctx.arc(60, 60, 40, -Math.PI / 2, Math.PI / 2, false);
            ctx.stroke();
            ctx.fill();
        },
        drawArcTo() {
            if (!this.$refs.canvasArcTo.getContext) return;
            const ctx = this.$refs.canvasArcTo.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(50, 50);
            // 参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
            ctx.arcTo(200, 50, 200, 200, 100);
            ctx.lineTo(200, 200);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(50, 50, 10, 10);
            ctx.rect(200, 50, 10, 10);
            ctx.rect(200, 200, 10, 10);
            ctx.fill();
        },
        drawLine() {
            if (!this.$refs.canvasLine.getContext) return;
            const ctx = this.$refs.canvasLine.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(10, 10); // 起始位置
            // 控制点（x,y）
            const cp1x = 40;
            const cp1y = 100;
            // 结束点(x,y)
            const x = 200;
            const y = 140;
            // 绘制二次赛贝尔曲线
            ctx.quadraticCurveTo(cp1x, cp1y, x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(10, 200, 10, 10);
            ctx.rect(cp1x, cp1y, 10, 10);
            ctx.rect(x, y, 10, 10);
            ctx.fill();
        },
        drawThreeLine() {
            if (!this.$refs.canvasThreeLine.getContext) return;
            const ctx = this.$refs.canvasThreeLine.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(10, 10); // 起始位置
            // 控制点1（x,y）
            const cp1x = 40;
            const cp1y = 100;
            // 控制点2（x,y）
            const cp2x = 80;
            const cp2y = 180;
            // 结束点(x,y)
            const x = 200;
            const y = 120;
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(40, 140, 10, 10);
            ctx.rect(cp1x, cp1y, 10, 10);
            ctx.rect(cp2x, cp2y, 10, 10);
            ctx.rect(x, y, 10, 10);
            ctx.fill();
        },
        drawText() {
            if (!this.$refs.canvasText.getContext) return;
            const ctx = this.$refs.canvasText.getContext('2d');
            ctx.font = '20px sans-serif';
            ctx.textAligin = 'right';
            ctx.textBaseline = 'middle';
            // ctx.direction = 'rtl';
            ctx.fillText('学习canvas', 10, 30, 200);
            ctx.strokeText('学习canvas', 10, 60, 200);
        },
        drawImage() {
            if (!this.$refs.canvasImage.getContext) return;
            const ctx = this.$refs.canvasImage.getContext('2d');
            // 创建img元素
            const img = new Image();
            // 考虑到图片是从网络加载 保证在 img 绘制完成之后再 drawImage
            img.onload = () => {
                // 绘制img 参数1：要绘制的img  参数2、3：绘制的img在canvas中的坐标，参数4,5 绘制图片的宽高
                ctx.drawImage(img, 0, 0, 300, 150);
            };
            // 注意 图片格式为png/jpg格式，在vue中存储在public下，在asset下加载不出来
            img.src = '/static/canvas_img.jpg'; // 图片url

            // const img = document.querySelector('img');
            // ctx.drawImage(img, 10, 10, 100, 150);
            // document.querySelector('img').onclick = () => {
            //     this.drawImage();
            // };
        },
        drawSave() {
            if (!this.$refs.canvasSave.getContext) return;
            const ctx = this.$refs.canvasSave.getContext('2d');

            ctx.fillRect(0, 0, 150, 150);
            ctx.save(); // 保存当前状态

            ctx.fillStyle = 'red';
            ctx.fillRect(15, 15, 120, 120);
            ctx.save();

            ctx.fillStyle = '#fff';
            ctx.fillRect(30, 30, 90, 90);

            ctx.restore();
            ctx.fillRect(45, 45, 60, 60);

            ctx.restore(); //  加载默认颜色配置
            ctx.fillRect(60, 60, 30, 30);
        },
    },
};
</script>
<style lang="scss" scoped>
.demo-two {
    canvas {
        float: left;
        border: 1px solid red;
    }

    table {
        width: 1000px;
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
