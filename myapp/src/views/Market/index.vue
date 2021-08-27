<template>
  <my-layout>
    <div>
      <v-chart class="chart" :option="option" />
    </div>

  </my-layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
// import * as echarts from 'echarts/core';
import { use } from "echarts/core";
import {LineChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';

import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import VChart, { THEME_KEY } from "vue-echarts";
use([
      TitleComponent,
      ToolboxComponent,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      LineChart,
      CanvasRenderer
    ]);

export default {
  components: {
    "my-layout": Layout,
    VChart
  },
  provide: {
    [THEME_KEY]: ""
  },
  data() {
    return{
    option : {
      title: {
        text: 'Market'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Price', 'Volume']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2021-08-18', '2021-08-19', '2021-08-20', '2021-08-23', '2021-08-24', '2021-08-25', '2021-08-26']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Price',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'volume',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },

      ]
    }
    };

  }
};
</script>

<style scoped>

.chart {
  height: 500px;
}
</style>