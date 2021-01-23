<template>
  <div class="home">
    <div class="timeline">
      <CustomText tag="h1">Home</CustomText>
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p">
        Onur
      </CustomText>
    </div>
    <div class="sidebar">
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
      <CustomText tag="p"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        dolore expedita harum optio pariatur rerum sint. Alias atque beatae
        delectus dignissimos ea maxime nesciunt nulla sit tempora unde
        voluptatem, voluptatum.</CustomText
      >
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Home",
  components: {
    CustomText
  }
};
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
