<script>
// Экспорт компонента с данными
export default {
  // Определение данных компонента
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Контейнер для футера -->
  <div class="container_footer">
    <!-- Заголовок футера -->
    <div class="title_footer">
      <!-- Блок с текстом -->
      <div class="text_footer">
        <p class="text_p">
          We are on social media<br />and we have a lot of news!<br />Follow us!
        </p>
      </div>
      <!-- Блок с социальными ссылками -->
      <div class="social">
        <!-- Ссылки на социальные сети -->
        <a href="https://vk.com/RUSThelper" class="link_footer">
          <img
            src="/src/assets/Footer/icon_vkontakte.png"
            alt="icon_vkontakte"
            class="social_footer"
          />
        </a>
        <a href="https://t.me/RUST_helper" class="link_footer">
          <img
            src="/src/assets/Footer/icon_telegram.png"
            alt="icon_telegram"
            class="social_footer"
          />
        </a>
        <a href="https://www.youtube.com/RUST_helper" class="link_footer">
          <img
            src="/src/assets/Footer/icon_youtube.png"
            alt="icon_youtube"
            class="social_footer"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Импорт шрифта из Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
.container_footer {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.text_footer {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 0 0 10vh;
}
.text_p {
  font-size: 24px;
  color: white;
  margin: 25px 0 25px 0;
}
.title_footer {
  font-size: 75px;
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  font-family: "Archivo Black", sans-serif;
}
.social {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-evenly;
  margin: 0 0 0 10vh;
}
.social_footer {
  width: 51px;
  height: 51px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
