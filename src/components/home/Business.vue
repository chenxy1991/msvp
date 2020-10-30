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
          <div style="margin-bottom: 28px;">
            <div class="row apiForm">
              <div class="col-md-4"><span class="APItop10">API调用TOP10</span></div>
              <div class="col-md-4 col-md-offset-4">
                <el-input
                placeholder="请输入内容">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </div>
            </div>
            <div class="apiGraph">
              <canvas id="mycanvas" style="position: absolute;top:0;left:0;width:100%;height:100%;"></canvas>
              <div class="one">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-01</p>
              </div>
              <div class="two">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-02</p>
              </div>
              <div class="three">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-03</p>
              </div>
              <div class="four">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-04</p>
              </div>
              <div class="five">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-05</p>
              </div>
              <div class="centerItem">
                <div><img src="../../assets/home/centerItem.png"></div>
                <p class="apiTitle">CRM平台</p>
              </div>
              <div class="six">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-06</p>
              </div>
              <div class="seven">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-07</p>
              </div>
              <div class="eight">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-08</p>
              </div>
              <div class="nine">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-09</p>
              </div>
              <div class="ten">
                <div><img src="../../assets/home/apiItem.png"></div>
                <p class="apiTitle">API名称-10</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <el-dropdown>
                <el-button>
                  最近30分钟<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
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
            <div style="margin: 10px;position: relative;">
              <div class="row">
                <div class="col-md-4 altitle">
                  <label style="float: left">告警信息</label>
                </div>
                <div class="col-md-4 col-md-offset-4 altitle">
                  <button class="btn-default" style="float: right" >配置</button>
                </div>
              </div>
              <table class="table table-hover table-striped mytable">
                <thead class="mytable">
                <tr class="mytable">
                  <th>api名称</th>
                  <th>服务方</th>
                  <th>告警时间</th>
                </tr>
                </thead>
                <tbody class="mytable">
                <tr @click="openModal">
                  <td style="color: #077ef5">api名称xx</td>
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
              <div>
                <span style="visibility: hidden;">xxxxxxx</span>
                <label class="mydetail">查看更多>></label>
              </div>
              <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header" style="position:relative;padding:10px;height:70px;line-height:70px;overflow:hidden;margin-bottom:20px;">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <div class="headerContent" style="position:absolute;left:10px;">
                      <h4 class="modal-title" id="myModalLabel">告警列表</h4>
                      <el-input style="width:300px;"
                        placeholder="请输入服务名称/提供方进行查询"
                        prefix-icon="el-icon-search">
                      </el-input>
                      <span class="el-icon-refresh" style="font-size: 15px;">刷新列表</span>
                      </div>
                      <div style="position:absolute;right:50px;z-index:1001;">
                        <el-row>
                          <el-button>导出</el-button>
                          <el-button>确认并清除</el-button>
                          <el-button>清除告警</el-button>
                          <el-button style="background-color: #077EF5;">确认告警</el-button>
                        </el-row>
                      </div>
                    </div>
                    <div class="modal-body">
                      <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                          type="selection"
                          width="50">
                        </el-table-column>
                        <el-table-column
                          label="告警级别"
                          width="120">
                          <template slot-scope="scope">
                            <el-button :style="{backgroundColor:scope.row.backgroundcolor,borderRadius:scope.row.borderRadius}">{{ scope.row.extent }}</el-button>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="服务名称"
                          width="155">
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          width="220"
                          label="告警内容">
                          <template>
                            <el-input
                              type="textarea"
                              placeholder="请输入内容"
                              v-model="textarea"
                              resize="None"
                              show-word-limit
                            ></el-input>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="告警时间"
                          width="200">
                        </el-table-column>
                        <el-table-column
                          prop="provider"
                          label="提供方"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="request"
                          label="请求方"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="costTime"
                          label="耗时"
                          width="90">
                        </el-table-column>
                        <el-table-column
                          prop="operation"
                          fixed="right"
                          label="操作"
                          width="100">
                          <template slot-scope="scope">
                            <el-button style="width:50px;text-align: center;background-color: #FFFFFF;border-color: #EAEEF1;">{{ scope.row.buttonContent }}</el-button>
                          </template>
                        </el-table-column>

                      </el-table>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
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
  name: 'Business',
  data () {
    return {
      isCollapse: true,
      textarea:"xxxxxxxxxx",
      tableData: [{
        extent: '紧急',
        name: 'API-服务编号001',
        backgroundcolor:"#FF3333",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"确认"
      }, {
        extent: '重要',
        name: 'API-服务编号001',
        backgroundcolor:"#FF9F00",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"清除"
      }, {
        extent: '次要',
        name: 'API-服务编号001',
        backgroundcolor:"#FFF9E5",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"确认"
      },
      {
        extent: '重要',
        name: 'API-服务编号001',
        backgroundcolor:"#FF3333",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"清除"
      }, {
        extent: '重要',
        name: 'API-服务编号001',
        backgroundcolor:"#FF3333",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"确认"
      },
      {
        extent: '重要',
        name: 'API-服务编号001',
        backgroundcolor:"#FF3333",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"清除"
      },
      {
        extent: '重要',
        name: 'API-服务编号001',
        backgroundcolor:"#FF3333",
        borderRadius:"20px",
        date:"2020-10-28 17:00:00",
        provider:"CRM平台",
        request:"SPS平台",
        costTime:"2s",
        buttonContent:"确认"
      }],
      multipleSelection: []
    }
  },
  created(){

  },
  mounted() {
      this.drawLine();
  },
  methods:{
    drawLine() {
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
      let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
      let myChart6 = this.$echarts.init(document.getElementById('myChart6'))
      let myChart7 = this.$echarts.init(document.getElementById('myChart7'))
      let myChart8 = this.$echarts.init(document.getElementById('myChart8'))
      let myChart9 = this.$echarts.init(document.getElementById('myChart9'))
      var c = document.getElementById("mycanvas");//初始化
      var ctx = c.getContext("2d");
      var point1 = { left: 60, top: 35 };//第一个点
      var point3 = { left: 105, top: 35 };
      var point4 = { left: 137, top: 35 };
      var point5 = { left: 180, top: 35};
      var point2 = { left: 125, top: 70};//第二个点
      var point21 = { left: 150,top: 70};
      var point6 = { left: 220,top: 35};
      var point7 = { left:60,top:105};
      var point8 = { left:105,top:105};
      var point9 = { left:138,top:105};
      var point10 = { left:180,top:105};
      var point11 = { left:220,top:105}
      ctx.beginPath();
      ctx.lineWidth=0.5;
      ctx.strokeStyle = '#52C41A';
      ctx.setLineDash([2,5]);
      ctx.moveTo(point1.left, point1.top);//起始位置
      ctx.lineTo(point2.left, point2.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point3.left, point3.top);//起始位置
      ctx.lineTo(point2.left, point2.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point4.left, point4.top);//起始位置
      ctx.lineTo(138, 48);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point5.left, point5.top);//起始位置
      ctx.lineTo(point21.left, point21.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point6.left, point6.top);//起始位置
      ctx.lineTo(point21.left, point21.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point7.left, point7.top);//起始位置
      ctx.lineTo(point2.left, point2.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point8.left, point8.top);//起始位置
      ctx.lineTo(point2.left, point2.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point9.left, point9.top);//起始位置
      ctx.lineTo(138, 90);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point10.left, point10.top);//起始位置
      ctx.lineTo(point21.left, point21.top);//停止位置
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(point11.left, point11.top);//起始位置
      ctx.lineTo(point21.left, point21.top);//停止位置
      ctx.stroke();

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
    },

    openModal(){
      console.log("xxxxx");
      $('#myModal').modal({
        keyboard: false
      })
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.global {
  /*width: 896px;*/
  height:100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}

.global .metric .row {
  margin:0 auto;
}

.apiForm {
  margin-top:15px;
  height:40px;
  line-height: 40px;
}

.APItop10 {
  width: 100px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 14px;
}

.apiGraph {
  margin-top:20px;
  position:relative;
  height:250px;
}


.apiGraph .one {
  position:absolute;
  left:157px;
  text-align: center;
}

.apiTitle {
  margin-top:5px;
  height:17px;
  light-height:17px;
  font-weight: 500;
  color: #999999;
}

.apiGraph .two {
  position:absolute;
  left:287px;
  text-align: center;
}
.apiGraph .three {
  position:absolute;
  left:393px;
  text-align: center;
}
.apiGraph .four {
  position:absolute;
  left:514px;
  text-align: center;
}
.apiGraph .five {
  position:absolute;
  left:641px;
  text-align: center;
}

.apiGraph .six {
  position:absolute;
  left:157px;
  top:185px;
  text-align: center;
}

.apiGraph .seven {
  position:absolute;
  left:287px;
  top:185px;
  text-align: center;
}
.apiGraph .eight {
  position:absolute;
  left:393px;
  top:185px;
  text-align: center;
}
.apiGraph .nine {
  position:absolute;
  left:514px;
  top:185px;
  text-align: center;
}
.apiGraph .ten {
  position:absolute;
  left:641px;
  top:185px;
  text-align: center;
}

.centerItem {
  position:absolute;
  left:395px;
  text-align: center;
  top:85px;
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

.table {
  margin-bottom: 17px;
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
  bottom:0px;
  right:4px;
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

/*.mychart {
  width:900px;
  height:350px;
}*/

.mychart1 {
  width:250px;
  height:250px;
}

.mychart2 {
  width:130px;
  height:130px;
}

.el-button {
  padding:5px;
  padding-left: 2px;
  margin-bottom:10px;
  width:150px;
  /*background:#FFFFFF;*/
  color:black;
  border-color: black;
}

.modal-title {
  display:inline-block;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #50557C;
  line-height: 14px;
}

.modal-body {
  padding-top:0px;
}

.has-gutter{
  text-align: center;
}

.modal-header .el-button {
  width:90px;
}

.el-table .el-button {
  width:50px;
}

</style>
