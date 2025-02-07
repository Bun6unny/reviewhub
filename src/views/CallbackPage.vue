<template>
  <h1>Обратная связь</h1>
    <div class="callback">
      <div class="d-flex callback-form w-50">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Имя</label>
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Введите имя..." required>
          </div>
          <div class="mb-3">
            <label class="form-label">Текст обращения</label><br>
            <textarea v-model="message" name="" id="" cols="100" rows="10" placeholder="Введите текст обращения..." required></textarea>
          </div>
          <button type="submit" class="send-btn">Отправить обращение</button>
        </form>
      </div>
      <div class="callback-img">
        <img src="@/assets/techsupport.png" alt="">
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Состояние для полей формы
const name = ref('')
const message = ref('')

// Обработчик отправки формы
const handleSubmit = (event) => {
  event.preventDefault()

  // Показываем alert с именем из формы
  alert(`Здравствуйте, ${name.value}, ваше обращение принято в обработку.\n\nВ ближайшее время вам поступит ответ на E-Mail, указанный при регистрации.`)

  // Очищаем поля формы
  name.value = ''
  message.value = ''
}
</script>