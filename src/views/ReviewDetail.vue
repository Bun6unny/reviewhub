<script setup>
import { useRoute } from 'vue-router';
import { reviews } from '../data/reviews.js';
import { computed } from 'vue';

const route = useRoute();

const reviewId = computed(() => Number(route.params.id));
const review = computed(() => reviews.find(r => r.id === reviewId.value) || {});

const stars = computed(() => {
  if (!review.value.rating) return []; 
  const filled = Math.min(review.value.rating, 5); 
  const empty = 5 - filled;
  return [...Array(filled).fill('bi-star-fill'), ...Array(empty).fill('bi-star')];
});
</script>

<template>
  <div v-if="review.artist" class="review-detail w-50 d-flex flex-column m-auto">
    <img :src="review.img" alt="Обложка" class="review-img">
    <h1>{{ review.artist }} - {{ review.song_name }}</h1>
    <p><strong>Автор:</strong> {{ review.author }}</p>
    <p><strong>Дата:</strong> {{ review.date }}</p>
    <p class="text-start">{{ review.text }}</p>

    <div class="rating p-3 d-flex align-items-center">
      <span class="me-2">Оценка:</span>
      <span v-for="(star, index) in stars" :key="index">
        <i :class="['bi', star]"></i>
      </span>
    </div>
  </div>

  <div v-else>
    <p>Рецензия не найдена</p>
  </div>
</template>

<style scoped>
.review-detail {
  text-align: center;
  padding: 20px;
}

.review-img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.rating i {
  font-size: 1.5rem;
  color: gold;
  margin: 2px;
}
</style>
