<template>
  <nav class="nav">
    <ul>
      <li>
        <a class="nav-link edit-the-doc" href="javascript:void(0);">参与文档编辑</a>
      </li>
      <li>
        <router-link to="/overview" class="nav-link" active-class="nav-link--avtive">概览</router-link>
      </li>

      <template v-for="nav in navs">
        <a class="nav-label" @click.prevent="toggleVisible(nav)" href="javascript:void(0);">{{ nav.title }}</a>
        <ul class="nav__group" :class="{ 'nav__group--visible': nav.visible}">
          <li v-for="item in nav.list">
            <router-link :to="item.path" class="nav-link" active-class="nav-link--avtive">{{ item.name }}</router-link>
          </li>
        </ul>
      </template>
    </ul>
  </nav>
</template>

<script>
  import NavsConfig from '../nav.config.json'

  NavsConfig.map(item => {
    item.visible = true
    return item
  })

  export default {
    name: 'navbar',
    data () {
      return {
        navs: NavsConfig
      }
    },
    methods: {
      /*
       *  use for toggle nav__group visible
       *
       *  @params  {Object} navGroup   one nav group of the navs
       **/
      toggleVisible (navGroup) {
        navGroup.visible = !navGroup.visible
        console.log(navGroup.visible)
      }
    }
  }
</script>

<style scoped>

  .nav {
    padding: 2rem 0 2rem 2.5rem;
    text-align: left;
    background-color: #f9fafb;
  }

  .nav-label {
    display: block;
    padding: .6rem 0;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .nav-link {
    position: relative;
    display: block;
    padding: .6rem 0;
    color: #000;
  }

  .nav-link--avtive, .nav-link:hover {
    color: #3378bd;
  }

  .nav-link--avtive:after {
    position: absolute;
    top: 0;
    right: 1px;
    width: 2px;
    height: 100%;
    background: #3378bd;
    content: "";
    z-index: 1;
  }

  .edit-the-doc {
    color: #ff0000;
  }

  .nav__group {
    max-height: 0;
    overflow: hidden;
    transition: max-height .7s linear;
  }

  .nav__group--visible {
    max-height: 50rem;
  }

</style>
