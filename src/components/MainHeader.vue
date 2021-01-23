<template>
  <header class="header">
    <Container class="header-inner">
      <!--  logo    -->
      <router-link class="logo" to="/">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="main-logo"
        />
      </router-link>

      <!--  seacrh    -->
      <form class="search">
        <input class="search-input" type="text" placeholder="Search" />
      </form>

      <!--  navigation    -->
      <nav class="navigation">
        <router-link class="nav-a" to="/">
          <IconHome v-if="$route.name !== 'Home'" />
          <IconHomeFill v-else />
        </router-link>
        <router-link class="nav-a" to="/direct">
          <IconDirect v-if="$route.name !== 'Direct'" />
          <IconDirectFill v-else />
        </router-link>
        <router-link class="nav-a" to="/explore">
          <IconExplore v-if="$route.name !== 'Explore'" />
          <IconExploreFill v-else />
        </router-link>
        <router-link class="nav-a" to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";
import IconDirect from "@/icons/direct.svg";
import IconDirectFill from "@/icons/direct-fill.svg";
import IconExplore from "@/icons/explore.svg";
import IconExploreFill from "@/icons/explore-fill.svg";
import Container from "@/components/Container";
export default {
  name: "MainHeader",
  components: {
    IconHome,
    IconHomeFill,
    IconExplore,
    IconExploreFill,
    IconDirect,
    IconDirectFill,
    Container
  }
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid rgb(var(--b6a));
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.search {
  display: none;
  @media (--t) {
    display:block;
    text-align: center;
  }
}
.search-input {
  display: none;
  @media (--t) {
    display: block;
    border: 1px solid rgb(var(--b6a));
    border-radius: 3px;
    background-color: rgb(var(--b3f));
    height: 28px;
    padding: 0 20px;
    width: 215px;
  }
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}
.header-inner {height: 60px;
display:flex;
align-items: center;
justify-content: center;
height: var(--header-height);
  @media (--t) {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.navigation {
  align-items: center;
  bottom: 0;
  background-color: white;
  display: flex;
  left: 0;
  right: 0;
  position: fixed;
  height: 80px;
  justify-content: space-around;
  border-top: 1px solid rgb(var(--b6a));

  @media (--t) {
    border: 0;
    height: auto;
    justify-content: flex-end;
    position: static;
  }
}
.nav-a {
  margin-left: 20px;
}
</style>
