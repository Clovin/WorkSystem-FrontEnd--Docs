<template>
  <main class="main row" :class="{ 'active': openNavbar }">
    <header class="main-header">
      <div class="main-header__navbar">
        <navbar></navbar>
      </div>
    </header>

    <section class="main-content">
      <div class="main-content__topbar--phone">
        <div class="btn navbar-toggle" @click="toggleNavbar"><span></span></div>
      </div>

      <router-view class="main-content__main markdown-body"/>
    </section>
  </main>
</template>

<script>
  import navbar from './components/navbar.vue'

  export default {
    name: 'app',
    components: {
      navbar
    },
    data () {
      return {
        openNavbar: false
      }
    },
    methods: {
      toggleNavbar () {
        this.openNavbar = !this.openNavbar
      }
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
    height: 100%;
    padding: 2rem 1rem 2rem .5rem;
    overflow: auto;
  }

  .main-content__topbar--phone {
    display: none;
  }

  @media (max-width: 768px) {

    .main {
      transition: transform .5s linear;
    }

    .main.active {
      transform: translateX(15rem);
    }

    .main-header {
      position: fixed;
      left: -14rem;
    }

    .main-content {
      width: 100%;
      padding: 0;
    }

    .main-content__topbar--phone {
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 3rem;
      background-color: #00a2fb;
    }

    .btn {
      position: relative;
      margin-top: .6rem;
      margin-left: 1.5rem;
      width: 1.8rem;
      height: 1.8rem;
      border: 1px solid #fff;
      border-radius: 3px;
    }

    .btn span {
      position: relative;
      top: .75rem;
      left: .25rem;
      display: block;
      width: 1.2rem;
      height: .15rem;
      border-radius: 10px;
      background-color: #fff;
    }

    .btn span:before, .btn span:after {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: #fff;
    }

    .btn span:before {
      top: -.35rem;
    }

    .btn span:after {
      top: .4rem;
    }

    .main-content__main {
      padding: 4.5rem 2rem 1.5rem 2rem;
    }
  }

</style>
