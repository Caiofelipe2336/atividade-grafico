var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);
var option;

function updateChartLayout() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var layout;

  if (screenWidth > 600) {
    layout = {
      radar: [
        { center: ['16.6%', '50%'] },
        { center: ['50%', '50%'] },
        { center: ['83.4%', '50%'] }
      ]
    };
  } else {
    layout = {
      radar: [
        { center: ['50%', '20%'] },
        { center: ['50%', '50%'] },
        { center: ['50%', '80%'] }
      ]
    };
  }

  myChart.setOption(layout, true);
}

option = {
  color: ['#f5ed23', '#f419f5', '#ee5477'],
  legend: {},
  radar: [
    {
      indicator: [
        { text: 'Português', max: 100 },
        { text: 'Matemática', max: 100 },
        { text: 'Física', max: 100 },
        { text: 'Química', max: 100 },
        { text: 'Biologia', max: 100 },
        { text: 'História', max: 100 },
        { text: 'Filosofia', max: 100 },
        { text: 'Sociologia', max: 100 },
        { text: 'Inglês', max: 100 },
        { text: 'Geografia', max: 100 },
        { text: 'Educação Física', max: 100 },
        { text: 'Artes', max: 100 }
      ],
      center: ['50%', '20%'],  // Posição do primeiro radar
      radius: 75,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      },
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    },
    {
      indicator: [
        { text: 'Português', max: 100 },
        { text: 'Matemática', max: 100 },
        { text: 'Física', max: 100 },
        { text: 'Química', max: 100 },
        { text: 'Biologia', max: 100 },
        { text: 'História', max: 100 },
        { text: 'Filosofia', max: 100 },
        { text: 'Sociologia', max: 100 },
        { text: 'Inglês', max: 100 },
        { text: 'Geografia', max: 100 },
        { text: 'Educação Física', max: 100 },
        { text: 'Artes', max: 100 }
      ],
      center: ['50%', '50%'],  // Posição do segundo radar
      radius: 75,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      },
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    },
    {
      indicator: [
        { text: 'Português', max: 100 },
        { text: 'Matemática', max: 100 },
        { text: 'Física', max: 100 },
        { text: 'Química', max: 100 },
        { text: 'Biologia', max: 100 },
        { text: 'História', max: 100 },
        { text: 'Filosofia', max: 100 },
        { text: 'Sociologia', max: 100 },
        { text: 'Inglês', max: 100 },
        { text: 'Geografia', max: 100 },
        { text: 'Educação Física', max: 100 },
        { text: 'Artes', max: 100 }
      ],
      center: ['50%', '80%'],  // Posição do terceiro radar
      radius: 75,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      },
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    }
  ],
  series: [
    {
      type: 'radar',
      radarIndex: 0,  // Associa a série ao primeiro radar
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [48, 92, 53, 96, 25, 72, 56, 83, 62, 52, 83, 17],
          name: '3° ano A',
          areaStyle: {
            color: 'rgba(245, 237, 35, 0.6)'
          }
        },
      ]
    },
    {
      type: 'radar',
      radarIndex: 1,  // Associa a série ao segundo radar
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [78, 94, 87, 78, 95, 74, 41, 82, 64, 72, 100],
          name: '3° ano B',
          areaStyle: {
            color: 'rgba(244, 25, 245, 0.6)'
          }
        },
      ]
    },
    {
      type: 'radar',
      radarIndex: 2,  // Associa a série ao terceiro radar
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [61, 93, 72, 35, 52, 72, 83, 92, 17, 72, 83, 29],
          name: '3° ano Biotec',
          areaStyle: {
            color: 'rgba(238, 84, 119, 0.6)'
          }
        }
      ]
    }
  ]
};

option && myChart.setOption(option);