<template>
  <div v-if="post.likes">
    <button class="post-likes-btn" v-if="post.likes.length > 0" @click="toggleModal">
      {{ post.likes.length }} likes
    </button>

    <users-modal @closeModal="toggleModal" v-show="isShownModal">
      <h4 slot="title" class="screen-box-top-title">Likes</h4>
      <div slot="users" v-for="like in post.likes" :key="like._id" class="screen-row flex flex-align-center">
        <router-link :to="`/${like.userName}`"><img class="user-avatar avatar-lg avatar" :src="like.imgUrl"
            :alt="`${post.by.userName}'s profile picture`" /></router-link>
        <div class="screen-row-name">
          <div class="screen-row-name-username" :title="like.userName">
            <router-link :to="`/${like.userName}`">{{ like.userName }}</router-link>
          </div>
          <div v-if="like.fullName" class="screen-row-name-fullname">{{ like.fullName }}</div>
        </div>
      </div>
    </users-modal>
  </div>
</template>

<script>
import usersModal from "@/cmps/users-modal";
export default {
  name: "post-likes",
  props: {
    post: Object
  },
  data() {
    return {
      isShownModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShownModal = !this.isShownModal;
    },
    closeModal() {
      this.isShownModal = null;
    },
  },
  components: {
    usersModal,
  },
};
</script>