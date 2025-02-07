<script setup>
import { ref } from 'vue';
import { reviews } from '../data/reviews.js';
import { useRouter } from 'vue-router';

const sortedReviews = ref([...reviews]);
const sortDirection = ref('desc');



const router = useRouter();


const openReview = (id) => {
  router.push(`/review/${id}`);
};

const toggleSort = () => {
  sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc';
  sortedReviews.value.sort((a, b) => {
    if (sortDirection.value === 'desc') {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });
};
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center fw-bold fst-italic">ReviewHub</h2>
    <div class="table-responsive">
      <table class="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>Исполнитель - Альбом</th>
            <th @click="toggleSort" style="cursor: pointer">
              Рейтинг {{ sortDirection === 'desc' ? '↓' : '↑' }}
            </th>
            <th>Год выпуска</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="review in sortedReviews" :key="review.id" @click="openReview(review.id)" style="cursor: pointer">
            <td>{{ review.artist }} - {{ review.song_name }}</td>
            <td>{{ review.rating }}</td>
            <td>{{ review.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
}
.table {
  border-radius: 10px;
  overflow: hidden;
}
th, td {
  text-align: center;
}
</style>
