<template>
  <!-- Контейнер для всего содержимого -->
  <div class="container">
    <!-- Блок для содержимого -->
    <div class="block">
      <!-- Контейнер для магазина -->
      <div class="shop-container">
        <!-- Список продуктов -->
        <div class="products-list">
          <!-- Первый столбец продуктов -->
          <div class="column">
            <!-- Генерация карточек продуктов -->
            <div
              v-for="(product, index) in products.slice(0, 9)"
              :key="product.id"
              :class="{ 'product-card': true, selected: product.isSelected }"
              @click="selectProduct(index)"
            >
              <!-- Контент карточки продукта -->
              <div class="product-card-content">
                <!-- Изображение продукта -->
                <img
                  :src="product.imageUrl"
                  alt="Product Image"
                  class="product-image"
                />
                <!-- Название продукта -->
                <h2 class="product-title">{{ product.name }}</h2>
              </div>
            </div>
          </div>
          <!-- Второй столбец продуктов -->
          <div class="column">
            <!-- Генерация карточек продуктов -->
            <div
              v-for="(product, index) in products.slice(9)"
              :key="product.id"
              :class="{ 'product-card': true, selected: product.isSelected }"
              @click="selectProduct(index + 9)"
            >
              <!-- Контент карточки продукта -->
              <div class="product-card-content">
                <!-- Изображение продукта -->
                <img
                  :src="product.imageUrl"
                  alt="Product Image"
                  class="product-image"
                />
                <!-- Название продукта -->
                <h2 class="product-title">{{ product.name }}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- Описание выбранного продукта -->
        <div class="product-description" v-if="selectedProduct">
          <!-- Изображение выбранного продукта -->
          <img
            :src="selectedProduct.imageUrl"
            alt="Selected Product Image"
            class="selected-product-image"
          />
          <!-- Название выбранного продукта -->
          <h2>{{ selectedProduct.name }}</h2>
          <!-- Описание выбранного продукта -->
          <p>{{ selectedProduct.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
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
.block {
  height: 90vh;
  width: 90vw;
  background-color: #505050;
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;
}
.shop-container {
  display: flex;
  justify-content: space-between;
}
.products-list {
  display: flex;
  width: 70%;
}
.column {
  display: flex;
  flex-direction: column;
  width: 46%;
  gap: 25px;
  margin: 25px 0 0 50px;
}
.product-card {
  cursor: pointer;
  gap: 10px;
  width: 24vw;
  height: 7vh;
  border-radius: 10px;
  background: linear-gradient(to right, rgb(173, 173, 173) 50%, #747474 50%);
  background-size: 201% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease;
  display: flex;
}
.product-card.selected {
  background-color: rgb(173, 173, 173);
  background-position: left bottom;
}
.product-card:hover {
  background-color: rgb(173, 173, 173);
  background-position: left bottom;
}
.product-card h2 {
  color: white;
  font-family: "Archivo Black", sans-serif;
  font-size: 24px;
}
.product-card-content {
  display: flex;
  align-items: center;
}
.product-image {
  width: 51px;
  height: 51px;
  align-items: center;
  margin: 2px 10px 1px 10px;
}
.product-title {
  margin: auto 10px;
}
.product-description {
  border-radius: 20px;
  width: 25%;
  text-align: center;
  background-color: #747474;
  margin: 1vw 2vw 0 0;
}
.product-description h2 {
  color: white;
  font-family: "Archivo Black", sans-serif;
  font-size: 30px;
  text-align: center;
  margin: 30px 0 0 0;
  border-bottom: #ffffff 1px solid;
  padding: 30px 0;
}
.product-description p {
  color: white;
  font-family: "Archivo Black", sans-serif;
  text-align: center;
  font-size: 16px;
  margin: 30px 10px 0 10px;
  padding: 0;
}
.selected-product-image {
  margin: 15px auto;
  height: auto;
  max-width: 15vw;
}
</style>
<script>
export default {
  data() {
    return {
      selectedProduct: null,
      products: [
        {
          id: 1,
          name: "12 Gauge Buckshot",
          description:
            "12 Gauge Buckshot is a type shotgun ammunition that fires a wide spread of 14 low-damage pellets. Regardless of the weapon it is fired out of, it is extremely lethal in close quarters, capable of one-shotting fully geared players at point-blank.12 Gauge buckshot has fewer pellets than the Handmade Shell, but makes up for it by doing much more damage with each pellet.",
          imageUrl: "/src/assets/Ammo/12Buckshot.png",
        },
        {
          id: 2,
          name: "12 Gauge Incendiary Shell",
          description:
            "The 12 gauge incendiary shell is a new shotgun ammunition as of Devblog 198. Once fired, unlike any other shell, it will spew out flaming shotgun projectiles. If stepped on, the player that walks over it will take fire damage. The flame projectile sparks rather than flame when the projectile hit the target.",
          imageUrl: "/src/assets/Ammo/12Incendiary.png",
        },
        {
          id: 3,
          name: "12 Gauge Slug",
          description:
            "12 Gauge Slug is a type of shotgun ammunition that fires a single, high-damage projectile. 12 Gauge Slug is most useful for when the user seeks to significantly extend the range of their shotgun at the cost of decreased lethality in close-quarters and requiring more precise aim to land a hit.",
          imageUrl: "/src/assets/Ammo/12Slug.png",
        },
        {
          id: 4,
          name: "40mm HE Grenade",
          description: "Ammunition for a 40mm Grenade Launcher.",
          imageUrl: "/src/assets/Ammo/40HE.png",
        },
        {
          id: 5,
          name: "5.56 Rifle Ammo",
          description:
            "Standard high powered ammunition, used by any rifle in the game currently. Offers superior damage, range, accuracy, damage drop off and air resistance from the Pistol Bullet.",
          imageUrl: "/src/assets/Ammo/556Ammo.png",
        },
        {
          id: 6,
          name: "Explosive 5.56 Rifle Ammo",
          description:
            "A variant of the standard 5.56 rifle ammunition. The Explosive 5.56 round deals a small amount of additional explosion damage to a player upon direct impact as well as damaging nearby structures or players. The round is effective against low-tier structures such as Wood walls and Sheet Metal doors.",
          imageUrl: "/src/assets/Ammo/556AmmoExplosive.png",
        },
        {
          id: 7,
          name: "Fire Arrow",
          description:
            "Low-velocity high-damage equivalent to the wooden arrows. Emits a fiery area of effect near its point of impact which will damage and slow anyone in its radius. In combat this can deny both a push and a retreat. As a raid tool it's faster and quieter than the eoka. Unlike the flamethrower, the fire it spreads won't damage structures.",
          imageUrl: "/src/assets/Ammo/FireArrow.png",
        },
        {
          id: 8,
          name: "HV 5.56 Rifle Ammo",
          description:
            "A variant of the standard 5.56 rifle ammunition. The High Velocity (HV) 5.56 round will travel faster than the standard round at a more expensive crafting cost. The round experiences little bullet drop. This type of ammo is best used with Bolt Action Rifle and L96 Rifle.",
          imageUrl: "/src/assets/Ammo/HV556.png",
        },
        {
          id: 9,
          name: "HV Pistol Ammo",
          description:
            "The high velocity pistol ammo is used by pistols and submachine guns. Its notable differences from regular pistol ammo include faster bullet travel and increased crafting cost.",
          imageUrl: "/src/assets/Ammo/HVPistol.png",
        },
        {
          id: 10,
          name: "Handmade Shell",
          description:
            "The handmade shell is an early-game shotgun ammunition that fires a spread of 20 low-damage pellets. It's highly damaging in close quarters, but its lethality quickly drops off as range increases. In comparison to 12 gauge buckshot, the handmade shell has significantly more pellets, but less damage overall.",
          imageUrl: "/src/assets/Ammo/HandmadeShell.png",
        },
        {
          id: 11,
          name: "High Velocity Arrow",
          description:
            "The high velocity arrow is one of four ammo types for the crossbow, compound bow, and the bow. It can be shot further and faster than the normal arrow, however, it causes less damage.",
          imageUrl: "/src/assets/Ammo/HighVelocityArrow.png",
        },
        {
          id: 12,
          name: "High Velocity Rocket",
          description:
            "The High Velocity Rocket is essentially a rocket with much less damage than the standard rocket. However, it is also much cheaper, and as the name suggests it has a higher velocity than the standard rocket, so it could be useful for rocketing targets at extreme range. Because of its lower cost and damage, it is useful for situations where a full rocket would be overkill.",
          imageUrl: "/src/assets/Ammo/HighVelocityRocket.png",
        },
        {
          id: 13,
          name: "Incendiary 5.56 Rifle Ammo",
          description:
            "A variant of the standard 5.56 rifle ammunition. The 5.56 Incendiary round will ignite on impact dealing both bullet and fire damage to a player. The round is however subject to increased bullet drop.",
          imageUrl: "/src/assets/Ammo/Incendiary556Ammo.png",
        },
        {
          id: 14,
          name: "Incendiary Pistol Bullet",
          description:
            "Slower, slightly more effective pistol bullet that also deals fire damage. Useful against Heavy Plate armor.",
          imageUrl: "/src/assets/Ammo/IncendiaryPistolBullet.png",
        },
        {
          id: 15,
          name: "Incendiary Rocket",
          description:
            "Incendiary rockets spread flames over the area of impact, dealing fire damage to its surroundings. It deals heavy damage to wooden structures and turrets. They can also be used effectively to trap and kill players in an enclosed space.",
          imageUrl: "/src/assets/Ammo/IncendiaryRocket.png",
        },
        {
          id: 16,
          name: "Pistol Bullet",
          description: "Standard ammunition for pistols and submachine guns.",
          imageUrl: "/src/assets/Ammo/PistolBullet.png",
        },
        {
          id: 17,
          name: "Rocket",
          description:
            "In Rust, rockets are the ammunition for rocket launchers, rockets will cause splash damage that can hit up to 4 walls at once. This type of ammunition is particularly effective against buildings. In terms of trajectory, rockets are launched forward with a considerable speed upon firing. However, the trajectory eventually falls off due to the in-game gravity effect.",
          imageUrl: "/src/assets/Ammo/Rocket.png",
        },
        {
          id: 18,
          name: "Wooden Arrow",
          description:
            "The Wooden Arrow is one of four ammo types for the crossbow and the bow. It has lower range and velocity than the High Velocity Arrow, but it does more damage compared to it.",
          imageUrl: "/src/assets/Ammo/WoodenArrow.png",
        },
      ],
    };
  },
  methods: {
    selectProduct(index) {
      // Сбрасываем isSelected для всех товаров
      this.products.forEach((product) => {
        product.isSelected = false;
      });
      // Устанавливаем isSelected для выбранного товара
      this.products[index].isSelected = true;
      this.selectedProduct = this.products[index];
    },
  },
};
</script>
