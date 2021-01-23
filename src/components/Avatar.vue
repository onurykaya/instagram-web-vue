<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size">
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default: "https://instagram.fesb4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130448509_657205508291532_780754228618110864_n.jpg?_nc_ht=instagram.fesb4-1.fna.fbcdn.net&_nc_ohc=skVlDKBm1RMAX9_FhhA&tp=1&oh=aa32e55b270e321707f97b16d1f17e18&oe=6034A080"
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
};
</script>

<style scoped>
.avatar {
  border-radius: 999px;
  display: inline-flex;
  padding: 2px;
  background:linear-gradient(
    45deg,
    #ffa95f 5%,
    #f99c4a 15%,
    #f47838 30%,
    #e75157 45%,
    #d92d7a 70%,
    #cc2a92 80%,
    #c32e92 95%
  );;
}
img {
  border-radius: inherit;
  border: 2px solid white;
}
</style>