<template>
  <div class="allCards">
    <div class="card" v-for="photo in photos" v-bind:key="photo.id">
      <div class="cardHeader">
        <img class="userPic" v-bind:src="photo.thumbnailUrl" />
        <strong>{{photo.title.split(' ')[0]}}</strong>
      </div>
      <img class="photo" v-bind:src="photo.url" />
      <div class="cardFooter">
        <div class="likes">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          <i class="fa fa-comment-o" aria-hidden="true"></i>
        </div>
        <div class="annotation"></div>
        <div class="comments" v-for="n in 4" v-bind:key="n">
          <strong>{{comments[Math.floor(Math.random() * 200)].name.split(' ')[0]}}</strong>
          {{comments[Math.floor(Math.random() * 200)].body.slice(0, Math.floor(Math.random() * (50 - 5)) + 5)}}
        </div>
        <input class="addComment" placeholder="Add a comment..." />
      </div>
            
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      error: null,
      photos: [],
      comments: [],
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      this.photos = response.data.slice(0, 20);
    })
    .catch((error) => {
      this.error = error;
    });

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      this.comments = response.data.slice(0, 200);
    })
    .catch((error) => {
      this.error = error;
    });
  },
};
</script>

<style scoped>

.card {
    border: 1px solid lightgray;
    border-radius: 3px;
    margin: 60px;
    background-color: white;
}

.cardHeader {
  display: flex;
  align-items: center;
  padding: 15px;
}

.cardFooter {
  padding: 10px 15px 0 15px;
}

.userPic {
  width: 30px;
  border-radius: 50%;
  margin-right: 15px;
}

.likes {
  font-size: 1.5em;
}

.likes i {
  margin-right: 5px;
}

.comments {
  margin-bottom: 5px;
}

.addComment {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-top: 1px solid lightgray;
  color: black;
}

.addComment:focus {
  outline: none;
}

</style>