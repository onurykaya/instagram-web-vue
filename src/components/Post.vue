<template>
  <div class="post">
    <!-- header -->
    <header class="header">
      <div class="header-author">
        <Avatar size="35" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">onurykaya</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Bolu, Tukey</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>
    <!-- media -->
    <div class="post-media">
      <img
        src="https://instagram.fesb4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/140795563_195909758938798_2587130559280240183_n.jpg?_nc_ht=instagram.fesb4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=F7m8venPjzcAX-jHVS1&tp=1&oh=b2f4d45686fa304a50ca556d1ae4b1cd&oe=60360C31"
        alt=""
      />
    </div>
    <!-- action-button -->
<div class="actions-buttons">
  <button type="button">
    <IconLike />
  </button>
  <button type="button">
    <IconComment />
  </button>
  <button type="button">
    <IconDirect />
  </button>
  <button type="button">
    <IconSave />
  </button>
</div>
    <!-- view-count -->

    <!-- comment-list -->

    <!-- date-time -->

    <!-- comment-form -->
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";
export default {
  name: "Post",
  components: {
    CustomText,
    Avatar,
    IconMore,
    IconComment,
    IconDirect,
    IconLike,
    IconSave,
  }
};
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a))
}
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}
.header-author {
  display: flex;
  align-items: center;
}
.header-author-info {
  margin-left: 8px;
}

.header-more {
  margin-left: auto;
}
.actions-buttons {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 16px;
  button {
    margin-right: 16px;
  }
}
</style>
