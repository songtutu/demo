<template>
  <div class="content">
    <!-- 顶部 header -->
    <mt-header fixed title="fixed top"></mt-header>
    <!-- 中部 路由 router-view -->
    <!-- 底部 tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <a href="#" class="mui-tab-item mui-active">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a href="#" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a href="#" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a href="#" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.content{
  padding-top: 40px;
  padding-bottom: 50.4px;
}
</style>
