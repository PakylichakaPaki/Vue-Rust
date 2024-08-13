<script>
// Импорт компонентов Header и Footer из соответствующих файлов
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

// Экспорт компонента, который использует импортированные компоненты
export default {
  components: {
    // Регистрация компонента Header
    Header,
    // Регистрация компонента Footer
    Footer,
  },
};
</script>

<template>
  <div
    class="bg"
    :class="{
      // Условие для добавления класса bg, если текущий маршрут - '/weapon'
      bg: $route.path === '/weapon',
      // Условие для добавления класса bg, если текущий маршрут - '/constraction'
      bg: $route.path === '/constraction',
      // Условие для добавления класса bg, если текущий маршрут - '/attire'
      bg: $route.path === '/attire',
      // Условие для добавления класса bg, если текущий маршрут - '/ammo'
      bg: $route.path === '/ammo',
    }"
  >
    <!-- Отображение компонента Header -->
    <Header></Header>
    <!-- Отображение компонента, соответствующего текущему маршруту -->
    <router-view />
    <!-- Отображение компонента Footer -->
    <Footer></Footer>
  </div>
</template>

<style scoped>
/* Применение стилей для класса bg */
.bg {
  /* Линейный градиент фона, направленный от правого нижнего угла к левому верхнему,
     с цветами #dadada и #000000 */
  background: linear-gradient(to right bottom, #dadada, #000000);
}
</style>  