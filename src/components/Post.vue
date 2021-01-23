<template>
  <div class="post">
    <!-- header -->
    <header class="header section">
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
    <div class="post-media ">
      <img
        src="https://instagram.fesb4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/140795563_195909758938798_2587130559280240183_n.jpg?_nc_ht=instagram.fesb4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=F7m8venPjzcAX-jHVS1&tp=1&oh=b2f4d45686fa304a50ca556d1ae4b1cd&oe=60360C31"
        alt=""
      />
    </div>
    <!-- action-button -->
    <div class="actions-buttons section">
      <button type="button">
        <IconLikeFill />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="save-button" type="button">
        <IconSave />
      </button>
    </div>
    <!-- view-count -->
    <div class="ivew-count section">
      <CustomText tag="b">1.345 beğenme</CustomText>
    </div>
    <!-- comment-list -->
    <div class="comment-list section">
      <CustomText class="comment-count">49 yorumun tümünü gör </CustomText>
      <div class="comment-person">
        <CustomText tag="b">onurykaya </CustomText>
        <CustomText class="comment">çok güzel manzara</CustomText>
        <IconLike class="like-icon" />
      </div>
    </div>
    <!-- date-time -->
    <div class="date-time section">
      <CustomText>9 SAAT ÖNCE</CustomText>
    </div>
    <!-- comment-form -->
    <div class="comment-form section">
      <input type="text" placeholder="Yorum ekle..." />
      <CustomText class="share">Paylaş</CustomText>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconLikeFill from "@/icons/like-fill.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save-fill.svg";
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
    IconLikeFill
  }
};
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}
.header {
  display: flex;
  align-items: center;
  height: 60px;
}
.section {
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
}
.save-button {
  margin-left: auto;
  margin-right: 0;
}
button {
  margin-right: 16px;
}

.comment-list {
  margin-top: 8px;
  margin-bottom: 8px;
}
.comment-count {
  color: rgb(var(--f52));
}
.comment-person {
  margin-top: 8px;
  display: flex;
}
.date-time {
  color: rgb(var(--f52));
  margin-bottom: 10px;
}
.comment-form {
  height: 55px;
  display: flex;
  text-align: center;
  border-top: 1px solid rgb(var(--b6a));
  align-items: center;
}
input {
  width: 100%;
  outline: none;
}
.share {
  color: rgb(var(--d69),0.5);
  font-size: 16px;
}
.like-icon {
  margin-left: auto;
}
.comment {
  margin-left: 5px;
}
</style>
