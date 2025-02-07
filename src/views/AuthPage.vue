<template>
  <div>
    <div class="d-flex flex-column mx-auto auth-block">
      <h3 class="mx-auto mt-4 mb-5">Авторизация</h3>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4 mx-5">
          <label for="inputLogin" class="form-label fs-5">Логин</label>
          <input type="text" class="form-control" id="inputLogin" required v-model="login">
        </div>
        <div class="mb-4 mx-5">
          <label for="inputPassword" class="form-label fs-5">Пароль</label>
          <input type="password" class="form-control" id="inputPassword" required v-model="password">
        </div>
        <button type="submit" class="mb-5 auth-btn">Войти</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const login = ref('')
const password = ref('')
const isLoggedIn = ref(false)

const handleSubmit = () => {
  if (login.value === 'reviewer' && password.value === '12345678') {
    isLoggedIn.value = true
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userLogin', login.value)
    window.location.href = '/profile'
  } else {
    alert('Неверный логин или пароль')
  }
}



const checkAuth = () => {
  const storedStatus = localStorage.getItem('isLoggedIn')
  if (storedStatus === 'true') {
    isLoggedIn.value = true
    login.value = localStorage.getItem('userLogin')
  }
}

checkAuth()
</script>