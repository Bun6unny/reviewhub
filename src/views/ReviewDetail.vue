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

console.log(review)
</script>

<template>
    <div v-if="review.artist" class="review-detail w-50 d-flex flex-column m-auto">
        <img :src="review.img" alt="Обложка" class="review-img">
        <div class="review-head d-flex flex-row w-100 m-2 p-1 justify-content-evenly align-items-center">
            <h1>{{ review.artist }} - {{ review.song_name }}</h1>
            <div class="review-text">
            <p><strong>Автор:</strong> {{ review.author }}</p>
            <p><strong>Дата:</strong> {{ review.date }}</p></div>
        </div>
        <p class="text-start">{{ review.text }}</p>

        <audio v-if="review.audio && review.audio.length > 0" controls class="w-100">
            <source :src="review.audio" type="audio/mpeg">
            Ваш браузер не поддерживает аудио.
        </audio>

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
    max-height: 500px;
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
