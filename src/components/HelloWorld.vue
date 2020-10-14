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
    <div class="row">
      <div class="col-md-8 global">
        <div>
          <div class="row">
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
            <div class="col-md-3 requestCount">
              <p>请求总量</p>
              <p>17149次</p>
              <p>周同比</p>
              <p>日环比</p>
            </div>
          </div>
        </div>
        <hr>
        <div>
          <p>实时请求分布</p>
        </div>
        <div></div>
      </div>
      <div class="col-md-4">
        <div class="healthForm">a</div>
        <div class="alertForm">b</div>
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

.healthForm {
  /*width: 472px;*/
  height: 310px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}

.alertForm {
  /*width: 472px;*/
  height: 377px;
  margin-top:15px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(204, 204, 204, 0.5);
  border-radius: 5px;
}

.requestCount {
  margin-top:16px;
}
</style>
