<template>
  <div class="container-fluid">
    <nav class="navbar navbar-default navbar-reverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="../../assets/home/sys.png" style="display:block;width:80%;height:120%">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
            <li><a href="#">系统管理</a></li>
            <!--li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                </ul>
            </li-->
          </ul>
          <!--form class="navbar-form navbar-left">
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
          </form-->
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">超级管理员</a></li>
            <!--li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </li-->
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="container-fluid" style="position:relative;">

      <div class="navSide" >
        <div class="sideBar">
          <img src="../../assets/home/sideBar.png" @click="isCollapse=!isCollapse;"/>
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :style="{display:isCollapse?'none':'block'}">
          <div style="background-color: #EAEEF1;">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            style="padding:8px;">
          </el-input>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">CRM平台</span>
            </template>
            <el-menu-item index="1-1">API服务名称-1</el-menu-item>
            <el-menu-item index="1-2">API服务名称-2</el-menu-item>
            <el-menu-item index="1-3">API服务名称-3</el-menu-item>
            <el-menu-item index="1-4">API服务名称-4</el-menu-item>
            <el-menu-item index="1-5">API服务名称-5</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">SPS平台</span>
            </template>
            <el-menu-item index="1-1">API服务名称-1</el-menu-item>
            <el-menu-item index="1-2">API服务名称-2</el-menu-item>
            <el-menu-item index="1-3">API服务名称-3</el-menu-item>
            <el-menu-item index="1-4">API服务名称-4</el-menu-item>
            <el-menu-item index="1-5">API服务名称-5</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">平台名称-A</span>
            </template>
            <el-menu-item index="1-1">API服务名称-1</el-menu-item>
            <el-menu-item index="1-2">API服务名称-2</el-menu-item>
            <el-menu-item index="1-3">API服务名称-3</el-menu-item>
            <el-menu-item index="1-4">API服务名称-4</el-menu-item>
            <el-menu-item index="1-5">API服务名称-5</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">平台名称-B</span>
            </template>
            <el-menu-item index="1-1">API服务名称-1</el-menu-item>
            <el-menu-item index="1-2">API服务名称-2</el-menu-item>
            <el-menu-item index="1-3">API服务名称-3</el-menu-item>
            <el-menu-item index="1-4">API服务名称-4</el-menu-item>
            <el-menu-item index="1-5">API服务名称-5</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="row">
        <div class="col-md-8 global">
            <div class="row">
              <div class="col-md-3 requestCount">
                <p class="title">请求总量</p>
                <p class="result">17149<span style="font-size: 16px;">&nbsp;次</span></p>
                <div class="weekrate">
                  <span class="week">周同比</span>
                  <img src="../../assets/home/up.png"/>
                  <span class="week">15.6%</span>
                </div>
                <div class="weekrate">
                  <span class="week">日环比</span>
                  <img src="../../assets/home/down.png"/>
                  <span class="week">15.6%</span>
                </div>
              </div>
              <div class="col-md-3 requestCount">
                <p class="title">总体成功率</p>
                <p class="result">80.02%</p>
                <div class="weekrate">
                  <span class="week">周同比</span>
                  <img src="../../assets/home/up.png"/>
                  <span class="week">15.6%</span>
                </div>
                <div class="weekrate">
                  <span class="week">日环比</span>
                  <img src="../../assets/home/down.png"/>
                  <span class="week">15.6%</span>
                </div>
              </div>
              <div class="col-md-3 requestCount">
                <p class="title">API服务总数</p>
                <p class="result">2000<span style="font-size: 16px;">&nbsp;个</span></p>
                <div class="weekrate">
                  <span class="week">周同比</span>
                  <img src="../../assets/home/up.png"/>
                  <span class="week">15.6%</span>
                </div>
                <div class="weekrate">
                  <span class="week">日环比</span>
                  <img src="../../assets/home/down.png"/>
                  <span class="week">15.6%</span>
                </div>
              </div>
              <div class="col-md-3 requestCount">
                <p class="title">异常</p>
                <p class="result">0<span style="font-size: 16px;">&nbsp;个</span></p>
                <div class="weekrate">
                  <span class="week">周同比</span>
                  <img src="../../assets/home/up.png" style="visibility: hidden"/>
                  <span class="week">-</span>
                </div>
                <div class="weekrate">
                  <span class="week">日环比</span>
                  <img src="../../assets/home/down.png" style="visibility: hidden"/>
                  <span class="week">-</span>
                </div>
              </div>
            </div>
          <hr style="margin-bottom:5px;">
          <div class="curve">
            <span>实时请求分布</span>
            <div id="myChart" class="mychart"></div>
            <!--:style="{width: '1000px', height: '300px'}"-->
          </div>
          <div class="row">
            <div class="col-md-4">
              <div id="myChart1" class="mychart1" ></div>
              <!--:style="{width: '300px', height: '230px'}"-->
            </div>
            <div class="col-md-4">
              <div id="myChart2" class="mychart1"></div>
            </div>
            <div class="col-md-4">
              <div id="myChart3" class="mychart1"></div>
            </div>
          </div>
        </div>
        <div class="col-md-4" >

          <div class="healthForm">
            <div class="htitle">
            <p class="htitlename">重要平台健康度</p>
            <a class="btn btn-default hbutton" href="#" role="button">配置</a>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div id="myChart4" class="mychart2"></div>
                <!--:style="{width: '150px', height: '150px'}"-->
              </div>
              <div class="col-md-4">
                <div id="myChart5" class="mychart2"></div>
              </div>
              <div class="col-md-4">
                <div id="myChart6" class="mychart2"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div id="myChart7" class="mychart2"></div>
              </div>
              <div class="col-md-4">
                <div id="myChart8" class="mychart2"></div>
              </div>
              <div class="col-md-4">
                <div id="myChart9" class="mychart2"></div>
              </div>
            </div>
          </div>

          <div class="alertForm">
            <div style="margin: 10px;">
              <div class="row">
                <div class="col-md-4 altitle">
                  <label style="float: left">告警信息</label>
                </div>
                <div class="col-md-4 col-md-offset-4 altitle">
                  <button class="btn-default" style="float: right" >配置</button>
                </div>
              </div>
              <table class="table table-hover table-striped mytable col-md-12">
                    <thead class="mytable">
                    <tr class="mytable">
                      <th>api名称</th>
                      <th>服务方</th>
                      <th>告警时间</th>
                    </tr>
                    </thead>
                    <tbody class="mytable">
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>crm平台</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>计费系统</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>acc平台</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>资源系统</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>资源系统</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>资源系统</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>资源系统</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>
                    <tr>
                      <td style="color: #077EF5">api名称xx</td>
                      <td>资源系统</td>
                      <td>2020-10-15 16:00:13</td>
                    </tr>

                    </tbody>
                  </table>
              <div style="position: relative;">
                <span style="visibility: hidden;">xxxxxxx</span>
                <label class="mydetail">查看更多>></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isCollapse: true
    }
  },
  created(){

  },
  mounted() {
    this.drawLine();
  },
  methods:{
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
      let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
      let myChart6 = this.$echarts.init(document.getElementById('myChart6'))
      let myChart7 = this.$echarts.init(document.getElementById('myChart7'))
      let myChart8 = this.$echarts.init(document.getElementById('myChart8'))
      let myChart9 = this.$echarts.init(document.getElementById('myChart9'))
      var dataBJ = [
        [1,55,9,56,0.46,18,6,"良"],
        [2,25,11,21,0.65,34,9,"优"],
        [3,56,7,63,0.3,14,5,"良"],
        [4,33,7,29,0.33,16,6,"优"],
        [5,42,24,44,0.76,40,16,"优"],
        [6,82,58,90,1.77,68,33,"良"],
        [7,74,49,77,1.46,48,27,"良"],
        [8,78,55,80,1.29,59,29,"良"],
        [9,267,216,280,4.8,108,64,"重度污染"],
        [10,185,127,216,2.52,61,27,"中度污染"],
        [11,39,19,38,0.57,31,15,"优"],
        [12,41,11,40,0.43,21,7,"优"],
        [13,64,38,74,1.04,46,22,"良"],
        [14,108,79,120,1.7,75,41,"轻度污染"],
        [15,108,63,116,1.48,44,26,"轻度污染"],
        [16,33,6,29,0.34,13,5,"优"],
        [17,94,66,110,1.54,62,31,"良"],
        [18,186,142,192,3.88,93,79,"中度污染"],
        [19,57,31,54,0.96,32,14,"良"],
        [20,22,8,17,0.48,23,10,"优"],
        [21,39,15,36,0.61,29,13,"优"],
        [22,94,69,114,2.08,73,39,"良"],
        [23,99,73,110,2.43,76,48,"良"],
        [24,31,12,30,0.5,32,16,"优"],
        [25,42,27,43,1,53,22,"优"],
        [26,154,117,157,3.05,92,58,"中度污染"],
        [27,234,185,230,4.09,123,69,"重度污染"],
        [28,160,120,186,2.77,91,50,"中度污染"],
        [29,134,96,165,2.76,83,41,"轻度污染"],
        [30,52,24,60,1.03,50,21,"良"],
        [31,46,5,49,0.28,10,6,"优"]
      ];

      var dataGZ = [
        [1,26,37,27,1.163,27,13,"优"],
        [2,85,62,71,1.195,60,8,"良"],
        [3,78,38,74,1.363,37,7,"良"],
        [4,21,21,36,0.634,40,9,"优"],
        [5,41,42,46,0.915,81,13,"优"],
        [6,56,52,69,1.067,92,16,"良"],
        [7,64,30,28,0.924,51,2,"良"],
        [8,55,48,74,1.236,75,26,"良"],
        [9,76,85,113,1.237,114,27,"良"],
        [10,91,81,104,1.041,56,40,"良"],
        [11,84,39,60,0.964,25,11,"良"],
        [12,64,51,101,0.862,58,23,"良"],
        [13,70,69,120,1.198,65,36,"良"],
        [14,77,105,178,2.549,64,16,"良"],
        [15,109,68,87,0.996,74,29,"轻度污染"],
        [16,73,68,97,0.905,51,34,"良"],
        [17,54,27,47,0.592,53,12,"良"],
        [18,51,61,97,0.811,65,19,"良"],
        [19,91,71,121,1.374,43,18,"良"],
        [20,73,102,182,2.787,44,19,"良"],
        [21,73,50,76,0.717,31,20,"良"],
        [22,84,94,140,2.238,68,18,"良"],
        [23,93,77,104,1.165,53,7,"良"],
        [24,99,130,227,3.97,55,15,"良"],
        [25,146,84,139,1.094,40,17,"轻度污染"],
        [26,113,108,137,1.481,48,15,"轻度污染"],
        [27,81,48,62,1.619,26,3,"良"],
        [28,56,48,68,1.336,37,9,"良"],
        [29,82,92,174,3.29,0,13,"良"],
        [30,106,116,188,3.628,101,16,"轻度污染"],
        [31,118,50,0,1.383,76,11,"轻度污染"]
      ];



      var schema = [
        {name: 'date', index: 0, text: '日'},
        {name: 'AQIindex', index: 1, text: 'AQI指数'},
        {name: 'PM25', index: 2, text: 'PM2.5'},
        {name: 'PM10', index: 3, text: 'PM10'},
        {name: 'CO', index: 4, text: '一氧化碳（CO）'},
        {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
        {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
      ];


      var itemStyle = {
        opacity: 0.3,
        /*shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'*/
      };

      var option = {
        backgroundColor: '#FFFFFF',
        color: [
          '#52C41A', '#F86E80'
        ],
        legend: {
          top: 10,
          data: ['请求成功', '请求失败'],
          textStyle: {
            color: '#000000',
            fontSize: 16
          }
        },
        grid: {
          left: '5%',
          right: 50,
          top: '18%',
          bottom: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#FFFFFF',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
              + obj.seriesName + ' ' + value[0] + '日：'
              + value[7]
              + '</div>'
              + schema[1].text + '：' + value[1] + '<br>'
              + schema[2].text + '：' + value[2] + '<br>'
              + schema[3].text + '：' + value[3] + '<br>'
              + schema[4].text + '：' + value[4] + '<br>'
              + schema[5].text + '：' + value[5] + '<br>'
              + schema[6].text + '：' + value[6] + '<br>';
          }
        },
        xAxis: {
          type: 'value',
          name: '',
          nameGap: 16,
          nameTextStyle: {
            color: '#fff',
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'black'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#fff',
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: 'black'
            }
          },
          splitLine: {
            show: false
          }
        },

        series: [
          {
            name: '请求成功',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ,
            markLine: {
              silent: true,
              symbol: ['none', 'none'],
              label: {show: false},
              data: [
                {yAxis: 50},
                {yAxis: 100},
                {yAxis: 150},
                {yAxis: 200},
                {yAxis: 250},
                {yAxis: 300}
              ],
              lineStyle:{
                color:'#cccccc'
              }
            },
          },
          {
            name: '请求失败',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
          }
        ]
      };
      var option1 = {
        color: ['#3398DB'],
        title: {
          text: '请求数/耗时分布',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
      var option2 = {
        title: {
          text: '提供服务请求量/分钟',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
      var option3 = {
        title: {
          text: '提供服务平均时长/分钟',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
      var option4 = {
        /*title: {
          text: '重要平台健康度',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: 'CRM平台',
            type: 'gauge',
            itemStyle:{
              color: '#077EF5'
            },
            detail: {
              formatter: '{value}%',
              fontSize: 15
            },
            splitLine: {
              lineStyle: {
                color: "rgba(227, 7, 7, 1)",
                width: 0
              },
              show:false
            },
            axisTick: {
              lineStyle: {
                width: 1,
                color: '#077EF5'
              }
            },
            pointer: {
              show: true,
              length: "28%",
              width: 5
            },
            backgroundColor:'#FFFFFF',
            data: [
              {
                value: '60',
                name: 'CRM平台',
                itemStyle:{
                  fontSize:10,
                }
              }
            ],
            radius: "80%",
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0, // 这个是修改宽度的属性
              },
              color:'#077EF5'
            },
            splitNumber: 8,
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 11,
              fontStyle: 'italic'
            },
          }
        ]
      }
      var option5 = {
        /*title: {
          text: '重要平台健康度',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: 'CRM平台',
            type: 'gauge',
            itemStyle:{
              color: '#077EF5'
            },
            detail: {
              formatter: '{value}%',
              fontSize: 15
            },
            splitLine: {
              lineStyle: {
                color: "rgba(227, 7, 7, 1)",
                width: 0
              },
              show:false
            },
            axisTick: {
              lineStyle: {
                width: 1,
                color: '#077EF5'
              }
            },
            pointer: {
              show: true,
              length: "28%",
              width: 5
            },
            backgroundColor:'#FFFFFF',
            data: [
              {
                value: '60',
                name: 'CRM平台',
                itemStyle:{
                  fontSize:10,
                }
              }
            ],
            radius: "80%",
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0, // 这个是修改宽度的属性
              },
              color:'#077EF5'
            },
            splitNumber: 8,
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 11,
              fontStyle: 'italic'
            },
          }
        ]
      }
      var option6 = {
        /*title: {
          text: '重要平台健康度',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: 'CRM平台',
            type: 'gauge',
            itemStyle:{
              color: '#077EF5'
            },
            detail: {
              formatter: '{value}%',
              fontSize: 15
            },
            splitLine: {
              lineStyle: {
                color: "rgba(227, 7, 7, 1)",
                width: 0
              },
              show:false
            },
            axisTick: {
              lineStyle: {
                width: 1,
                color: '#077EF5'
              }
            },
            pointer: {
              show: true,
              length: "28%",
              width: 5
            },
            backgroundColor:'#FFFFFF',
            data: [
              {
                value: '60',
                name: 'CRM平台',
                itemStyle:{
                  fontSize:10,
                }
              }
            ],
            radius: "80%",
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0, // 这个是修改宽度的属性
              },
              color:'#077EF5'
            },
            splitNumber: 8,
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 11,
              fontStyle: 'italic'
            },
          }
        ]
      }
      var option7 = {
        /*title: {
          text: '重要平台健康度',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: 'CRM平台',
            type: 'gauge',
            itemStyle:{
              color: '#077EF5'
            },
            detail: {
              formatter: '{value}%',
              fontSize: 15
            },
            splitLine: {
              lineStyle: {
                color: "rgba(227, 7, 7, 1)",
                width: 0
              },
              show:false
            },
            axisTick: {
              lineStyle: {
                width: 1,
                color: '#077EF5'
              }
            },
            pointer: {
              show: true,
              length: "28%",
              width: 5
            },
            backgroundColor:'#FFFFFF',
            data: [
              {
                value: '60',
                name: 'CRM平台',
                itemStyle:{
                  fontSize:10,
                }
              }
            ],
            radius: "80%",
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0, // 这个是修改宽度的属性
              },
              color:'#077EF5'
            },
            splitNumber: 8,
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 11,
              fontStyle: 'italic'
            },
          }
        ]
      }
      var option8 = {
        /*title: {
          text: '重要平台健康度',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: 'CRM平台',
            type: 'gauge',
            itemStyle:{
              color: '#077EF5'
            },
            detail: {
              formatter: '{value}%',
              fontSize: 15
            },
            splitLine: {
              lineStyle: {
                color: "rgba(227, 7, 7, 1)",
                width: 0
              },
              show:false
            },
            axisTick: {
              lineStyle: {
                width: 1,
                color: '#077EF5'
              }
            },
            pointer: {
              show: true,
              length: "28%",
              width: 5
            },
            backgroundColor:'#FFFFFF',
            data: [
              {
                value: '60',
                name: 'CRM平台',
                itemStyle:{
                  fontSize:10,
                }
              }
            ],
            radius: "80%",
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0, // 这个是修改宽度的属性
              },
              color:'#077EF5'
            },
            splitNumber: 8,
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 11,
              fontStyle: 'italic'
            },
          }
        ]
      }
      var option9 = {
        /*title: {
          text: '重要平台健康度',
          textStyle: {
            fontSize:16,
            color: '#333333'
          }
        },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: 'CRM平台',
            type: 'gauge',
            itemStyle:{
              color: '#077EF5'
            },
            detail: {
              formatter: '{value}%',
              fontSize: 15
            },
            splitLine: {
              lineStyle: {
                color: "rgba(227, 7, 7, 1)",
                width: 0
              },
              show:false
            },
            axisTick: {
              lineStyle: {
                width: 1,
                color: '#077EF5'
              }
            },
            pointer: {
              show: true,
              length: "28%",
              width: 5
            },
            backgroundColor:'#FFFFFF',
            data: [
              {
                value: '60',
                name: 'CRM平台',
                itemStyle:{
                  fontSize:10,
                }
              }
            ],
            radius: "80%",
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 0, // 这个是修改宽度的属性
              },
              color:'#077EF5'
            },
            splitNumber: 8,
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 11,
              fontStyle: 'italic'
            },
          }
        ]
      }

      myChart.setOption(option);
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option4);
      myChart5.setOption(option5);
      myChart6.setOption(option6);
      myChart7.setOption(option7);
      myChart8.setOption(option8);
      myChart9.setOption(option9);

      window.addEventListener("resize", function() {
        console.log("xxxxx");
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
        myChart8.resize();
        myChart9.resize();

        /*myChart.resize()
        this.myChart1.resize();
        this.myChart2.resize();
        this.myChart3.resize();
        this.myChart4.resize();
        this.myChart5.resize();
        this.myChart6.resize();
        this.myChart7.resize();
        this.myChart8.resize();
        this.myChart9.resize();*/

      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global {
  /*width: 896px;*/
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}

.global .metric .row {
  margin:0 auto;
}

.healthForm {
  /*width: 472px;
  height: 340px;*/
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
  margin-bottom: 10px;
}

.alertForm {
  /*width: 472px;
  height: 395px;*/

  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}
.altitle{
  margin-top: 20px;
  margin-bottom: 10px;
}

.mytable th{
  text-align: center;
}
.mytable thead{
  background-color: #D8D8D8;

  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.mytable td{
  border-top:0px solid transparent;
  text-align: center;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 12px;

}
.mydetail{
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 14px;
  /*float: right;
  margin-bottom: 20px;*/
  position:absolute;
  bottom:2px;
  right:4px;
}
.requestCount {
  margin-top:15px;
  text-align: center;
}

.title {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.result {
  /*width: 248px;*/
  height: 20px;
  font-size: 33px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #077EF5;
  line-height: 20px;
}
nav {
  margin-bottom:10px;
}

.navSide {
  position: absolute;
  left:0;
  top:0;
  z-index:999;
  height:100%;
  box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.25);
  opacity: 1;
  background-color: #FFFFFF;
}

.navSide .sideBar img {
  position:absolute;
  right:0;
  top:50%;
  z-index: 1000;
  transform: translate(0,-50%);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.weekrate .week {
  font-size:12px;
  color: #999999;
}

.curve {
  margin-bottom: 20px;
}

.curve span {
  font-size: 14px;
  display: inline-block;
  color: #333333;
  font-weight: 500;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom:10px;
}

.htitle {
  height:30px;
  line-hight:30px;
  position: relative;
  margin-bottom: 10px;
}

.htitle .htitlename{
  position: absolute;
  left:24px;
  top:10px;
  font-size:16px;
  color:#333333;
  font-weight: bolder;
  vertical-align: middle;
}

.htitle .hbutton{
  position: absolute;
  right:20px;
  top:5px;
  vertical-align: middle;
}

.mychart {
  width:900px;
  height:250px;
}

.mychart1 {
  width:250px;
  height:200px;
}

.mychart2 {
  width:130px;
  height:130px;
}

</style>
