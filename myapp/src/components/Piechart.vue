<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: ""
  },

  data() {
    return {
      option: {
        title: {
          text: "Investment Account",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Bonds",
            "Stocks",
            "ETFs",
            "Funds",
            "Future"
          ]
        },
        series: [
          {
            name: "Investment account",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 33500, name: "Bonds" },
              { value: 31000, name: "Stocks" },
              { value: 23400, name: "ETFs" },
              { value: 13500, name: "Funds" },
              { value: 15480, name: "Future" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },

};
</script>

<style scoped>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.chart {
  height: 400px;
}
</style>