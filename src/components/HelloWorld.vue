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
          <a class="navbar-brand" href="#">API服务聚合平台</a>
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
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 global">
            <div class="row">
              <div class="col-md-3 requestCount">
                <p class="title">请求总量</p>
                <p class="result">17149次</p>
                <div class="weekrate">
                  <span>周同比</span>
                  <img/>
                  <span>15.6%</span>
                </div>
                <p class="dayrate">日环比</p>
              </div>
              <div class="col-md-3 requestCount">
                <p>请求总量</p>
                <p>17149次</p>
                <p>周同比</p>
                <p>日环比</p>
              </div>
              <div class="col-md-3 requestCount">
                <p>请求总量</p>
                <p>17149次</p>
                <p>周同比</p>
                <p>日环比</p>
              </div>
              <div class="col-md-3 requestCount">
                <p>请求总量</p>
                <p>17149次</p>
                <p>周同比</p>
                <p>日环比</p>
              </div>
            </div>
          <hr>
          <div>
            <p>实时请求分布</p>
          </div>
          <div></div>
        </div>
        <div class="col-md-4" >
          <div class="healthForm">c</div>
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

    }
  },
  created(){

  },
  mounted() {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global {
  /*width: 896px;*/
  height: 702px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}

.global .metric .row {
  margin:0 auto;
}

.healthForm {
  /*width: 472px;*/
  height: 310px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
  margin-bottom: 15px;
}

.alertForm {
  /*width: 472px;*/
  height: 377px;

  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}
.altitle{
  margin-top: 33px;
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
.requestCount {
  margin-top:15px;
}

.title {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.result {
  width: 248px;
  height: 20px;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #077EF5;
  line-height: 20px;
}
nav {
  margin-bottom:10px;
}
</style>
