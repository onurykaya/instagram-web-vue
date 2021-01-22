<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1">Merhaba Dünya</CustomText>
    <CustomText class="a2" tag="p" size="small">Merhaba Dünya</CustomText>
    <CustomText class="a3" tag="p" size="xsmall">Merhaba Dünya</CustomText>
    <IconHome width="60" height="60"/>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from "../icons/home.svg";
export default {
  name: "Home",
  components: {
    CustomText,
    IconHome
  }
};
</script>

<style scoped>
.a1 {
  color: rgb(var(--ba8), 0, 5);
}
.a2 {
  color: rgb(var(--b3f));
}
.a3 {
  color: rgb(var(--ba8));
}
</style>
