<template>
  <main class="main row">
    <header class="main-header">
      <div class="main-header__navbar">
        <navbar></navbar>
      </div>
    </header>

    <section class="main-content">
      <div class="main-content__topbar--phone">
        <div class="btn navbar-toggle"></div>
      </div>

      <router-view class="markdown-body" />
    </section>
  </main>
</template>

<script>
  import navbar from './components/navbar.vue'

  export default {
    name: 'app',
    components: {
      navbar
    }
  }
</script>

<style scoped>
  .main {
    height: 100%;
  }

  .main-header {
    float: left;
    min-width: 14.5rem;
    height: 100%;
    padding-right: .5rem;
    overflow: hidden;
  }

  .main-header__navbar {
    width: 100%;
    height: 100%;
    background-color: #f9fafb;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .main-content {
    float: left;
    width: calc(100% - 15rem);
    max-width: 50rem;
    padding: 2rem 1rem 2rem .5rem;
    overflow: auto;
  }

</style>
