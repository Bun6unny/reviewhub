<template>
  <div class="d-flex profile">
    <div class="d-flex user-card">
      <img src="@/assets/avatar.jpg" class="avatar" alt="">
      <p class="info mt-3">{{ login }}</p>
    </div>
    <div class="d-flex user-info mx-3">
      <h3>Информация о пользователе {{ login }}</h3>
      <p class="info mt-5">Дата регистрации: 08.02.2025</p>
      <p class="info mt-1">Описание: аристократ, филантроп, последний из магикян</p>
      <p class="info mt-1">Количество рецензий: 10</p>
    </div>
  </div>
  <div class="d-flex">
    <div class="d-flex user-liked mt-3">
      <h4 class="mb-3">Любимый исполнитель</h4>
      <img src="@/assets/playboicarti.jpg" class="avatar mt-4 mb-3" alt="">
      <p class="mt-2">Playboy Carti</p>
    </div>
    <div class="d-flex user-liked mt-3 mx-3">
      <h4 class="mb-3">Любимый трек</h4>
      <img src="@/assets/playboicarti_magnolia.jpg" class="avatar mt-4 mb-3" alt="">
      <p class="mt-2">Playboy Carti - Magnolia</p>
    </div>
    <div class="d-flex user-liked mt-3">
      <h4 class="mb-3">Лучшая рецензия на трек</h4>
      <img src="@/assets/playboicarti_magnolia.jpg" class="avatar mt-4 mb-3" alt="">
      <p class="mt-2 text-center">Playboy Carti - Magnolia <small>(оценка: 9.7)</small></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import router from "@/router";

const login = localStorage.getItem('userLogin')

onMounted(() => {
  console.log('login:', login)
  console.log('router:', router)

  if (login === null) {
    router.push('/auth')
  }
})
</script>