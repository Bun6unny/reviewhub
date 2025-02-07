<template>
  <div>
    <div class="sidebar">
      <div class="d-flex flex-column flex-shrink-0 bg-dark bg-review border-right" style="width: 4.5rem;height: 100%;">
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center mt-7">
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              <i class="menu-icons-size bi bi-house"></i>        
              <span class="menu-label">Главная</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-person"></i>        
              <span class="menu-label">Личный кабинет</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-newspaper"></i>        
              <span class="menu-label">Новости</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-question-circle"></i>        
              <span class="menu-label">Часто задаваемые вопросы</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3 border-bottom">
              <i class="menu-icons-size bi bi-info-circle-fill"></i>        
              <span class="menu-label">О нас</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-star"></i>        
              <span class="menu-label">Рейтинг</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-pencil-square"></i>        
              <span class="menu-label">Рецензии</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-person-vcard-fill"></i>        
              <span class="menu-label">Авторы</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="menu-icons nav-link py-3">
              <i class="menu-icons-size bi bi-headset"></i>        
              <span class="menu-label">Обратная связь</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <nav class="navbar navbar-dark bg-dark bg-review ms-10 mb-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="@/assets/rev-logo.png" alt="logo"></a>
      </div>
    </nav>

    <div class="content ms-10 me-2">
      <router-view />
    </div>
  </div>
</template>
