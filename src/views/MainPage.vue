<script setup>
import { reviews } from '../data/reviews.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const openReview = (id) => {
  router.push(`/review/${id}`);
};
</script>

<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 g-4 align-items-center">
      <div v-for="review in reviews" :key="review.id" class="col">
        <div class="card bg-review custom-card" @click="openReview(review.id)">
          <img :src="review.img" class="card-img-top" alt="Обложка">
          <div class="card-body">
            <h5 class="card-title text-center">{{ review.artist }} - {{ review.song_name }}</h5>
            <p class="card-text text-end">{{ review.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.custom-card:hover {
  transform: scale(1.05);
}

.card-img-top{
  width: 100%;
  height: 270px;
  border-radius: 15px!important;
}
</style>