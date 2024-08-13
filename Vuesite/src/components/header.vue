<script>
// Экспорт компонента с данными
export default {
  // Определение данных компонента
  data() {
    return {
      // Массив ссылок для навигационного меню
      links: [
        // Каждая ссылка состоит из имени и пути
        {
          name: "New's",
          path: "/",
        },
        {
          name: "Weapon",
          path: "/weapon",
        },
        {
          name: "Construction",
          path: "/constraction",
        },
        {
          name: "Attire",
          path: "/attire",
        },
        {
          name: "Ammo",
          path: "/ammo",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- Контейнер для шапки сайта -->
  <div class="container">
    <!-- Заголовок сайта -->
    <div class="title">
      <img class="logo" src="/Rusticon.png" alt="" />RUST
      <p class="p_text">helper</p>
    </div>
    <!-- Навигационное меню -->
    <ul class="menu">
      <!-- Генерация ссылок на основе массива links -->
      <li v-for="i in links" :key="i.path">
        <!-- Ссылка с использованием компонента router-link -->
        <router-link :class="{ active: $route.path === i.path }" :to="i.path">
          {{ i.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Импорт шрифта из Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");

a {
  text-decoration: none;
  color: white;
}
.active {
  color: #000000;
  transition: 0.2s;
}
.menu a:hover {
  color: black;
  transition: 0.2s;
}
.container {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.title {
  font-size: 75px;
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  font-family: "Archivo Black", sans-serif;
  margin: 0 0 0 10vh;
}
.logo {
  width: 51px;
  height: 51px;
  margin-right: 10px;
}
.p_text {
  font-size: 48px;
  font-weight: bold;
  color: black;
  margin: 20px 0 0 20px;
}
.block {
  height: 90vh;
  width: 90vw;
  background-color: #4801a1;
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;
}
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  width: 50vw;
  justify-content: space-evenly;
  margin: 21px 0 0 10vh;
}
li {
  text-decoration: none;
  color: white;
  font-family: "Archivo Black", sans-serif;
  font-size: 30px;
}
li:hover {
  color: #000000;
  transition: 0.2s;
  cursor: pointer;
}
</style>
