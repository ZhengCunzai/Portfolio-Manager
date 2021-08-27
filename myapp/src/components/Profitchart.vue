<template>
  <v-chart @on="updateAxisPointer();" class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import {
  LineChart,
  PieChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

use(
    [DatasetComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, PieChart, CanvasRenderer]
);

import VChart, { THEME_KEY } from "vue-echarts";

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
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['Profit', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Future', 1347, 202, 1200, 50, 535, 8510],
            ['Bonds', 511, 514, 551, 533, 738, 687],
            ['ETFs', 4010, 622, 200, 364, 4520, 3250],
            ['Funds', 2520, 1200, 1400, 1800, 3390, 490]
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {focus: 'data'},
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'Profit',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      }
    };
  },
  methods: {
    /*updateAxisPointer(event) {*/
    /*  var xAxisInfo = event.axesInfo[0];*/
    /*  if (xAxisInfo) {*/
    /*    var dimension = xAxisInfo.value + 1;*/
    /*    myChart.setOption({*/
    /*      series: {*/
    //         id: 'pie',
    //         label: {
    //           formatter: '{b}: {@[' + dimension + ']} ({d}%)'
    //         },
    //         encode: {
    //           value: dimension,
    //           tooltip: dimension
    //         }
    //       }
    //     });
    //   }
    // }

  }
};
</script>

<style scoped>

.chart {
  height: 400px;
}
</style>