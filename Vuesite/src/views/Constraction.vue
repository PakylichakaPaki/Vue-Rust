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

<style>
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
.p_text {
  font-size: 48px;
  font-weight: bold;
  color: black;
  margin: 20px 0 0 20px;
}
.block {
  height: 90vh;
  width: 90vw;
  background-color: #505050;
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
  background-color: rgb(170, 169, 169);
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
          name: "Armored Door",
          description:
            "The Armored Door is the highest tier door and is the best option for base defense. If the door is put on a weaker door frame, the door frame will be targeted instead of the door itself. The door has a working hatch which allows you to see outside of the door and can be shot through in both directions.",
          imageUrl: "/src/assets/Const/ArmoredDoor.png",
        },
        {
          id: 2,
          name: "High Stone Gate",
          description:
            "The High External Stone Gate is used with High External Stone Walls as a door for a player's compound.",
          imageUrl: "/src/assets/Const/HighStoneGate.png",
        },
        {
          id: 3,
          name: "Tool Cupboard",
          description:
            "The Tool Cupboard is essential for any base because it prevents people who are not authorized from upgrading building blocks and placing and picking up deployables within a 25-meter radius (around 9 foundation blocks) from the cupboard. If you press 'E' on the cupboard you can authorize yourself so you are able to build in this area. If you hold 'E' on the cupboard you can clear the list of players authorized including yourself. Any player authorized from the cupboard will not be targeted by any flame turrets or shotgun traps within the cupboard's radius.",
          imageUrl: "/src/assets/Const/ToolCupboard.png",
        },
        {
          id: 4,
          name: "Armored Double Door",
          description:
            "The armored double door is the highest tier double door and is the best for base defense. Because of its high durability, if the door is placed in a weak wall frame, raiders may target the wall frame instead of the door itself. The door has working hatches and these hatches allow you to see outside of the door and can be shot through in both directions.",
          imageUrl: "/src/assets/Const/ArmoredDoubleDoor.png",
        },
        {
          id: 5,
          name: "High Stone Wall",
          description:
            "High External Stone Walls are generally used in the construction of compounds, and, unlike their wooden relatives, are fire-resistant and require explosives to get through unless you use a ladder, though this may prove difficult due to the damage and slow inflicted by the barbed wire on top of these walls. Both these and their wooden equivalents are also commonly used in pvp combat, as they can be carried in stacks of ten for some portable cover.",
          imageUrl: "/src/assets/Const/HighStoneWall.png",
        },
        {
          id: 6,
          name: "Key Lock",
          description:
            "Key locks are used to lock doors, hatches, storage boxes and tool cupboards. Once placed it should be locked by activating it and selecting Lock. For players other than the one who placed it to unlock it, they must have a key created by by the originating player. To remove a lock, unlock it and pick it up.",
          imageUrl: "/src/assets/Const/KeyLock.png",
        },
        {
          id: 7,
          name: "Sheet Metal Door",
          description:
            "The Sheet Metal Door is the most common door found on bases due to its resistances to melee weapons and fire but relatively cheap cost to craft. Regardless, it is still relatively weak to explosives compared to its expensive indirect upgrade, the 'Armoured Door'.",
          imageUrl: "/src/assets/Const/SheetMetalDoor.png",
        },
        {
          id: 8,
          name: "Triangle Ladder Hatch",
          description: "A hatch that opens and changes into a ladder.",
          imageUrl: "/src/assets/Const/TriangleLadderHatch.png",
        },
        {
          id: 9,
          name: "Wooden Ladder",
          description: "A ladder will help you climb walls in any base.",
          imageUrl: "/src/assets/Const/WoodenLadder.png",
        },
        {
          id: 10,
          name: "Code Lock",
          description:
            "The code lock is used to lock doors, hatches, and storage crates. Players may set a new four-digit PIN if the lock is unlocked. Once locked, an LED on the keypad will change to red, indicating its status. Other players may attempt to gain access to a locked item by typing in a PIN in the keypad. If they are correct, a short beep will emit from the lock, and the player will subsequently have permanent access to the locked item (assuming the code isn't changed). If the player guesses incorrectly, a failure beep will play alongside an electric arc animation on the keypad, and the player will take increasing increments of damage until they wait long enough or die.",
          imageUrl: "/src/assets/Const/CodeLock.png",
        },
        {
          id: 11,
          name: "High Wooden Gate",
          description:
            "The High External Wooden Gate is a deployable building object used in conjunction with High External Wooden Walls to deny access to an area. The high external gate entrance is about the height and width of a standard 2x2 wall. While its total width is approximately 2.5 foundations wide. The wall model comes with barbed wire but does not slow down or damage any players like its wall counterpart.",
          imageUrl: "/src/assets/Const/HighWoodenGate.png",
        },
        {
          id: 12,
          name: "Metal Shop Front",
          description:
            "The metal shop front is quite useful for trading. The vendor can stand safely behind it without worrying about getting shot, as the glass is bulletproof. When the player on the inside and the player on the outside have put in items to make the desired trade, they both have to accept the deal for the items to be transferred.",
          imageUrl: "/src/assets/Const/MetalShopFront.png",
        },
        {
          id: 13,
          name: "Sheet Metal Double Door",
          description:
            "It has the same health as a sheet metal door. It requires double the materials, but allows for more space within your base. Ideal for loot rooms and other cramped areas.",
          imageUrl: "/src/assets/Const/SheetMetalDoubleDoor.png",
        },
        {
          id: 14,
          name: "Garage Door",
          description:
            "The garage door is a form of lockable door which slides upward from the bottom when opened. It fits within a wall frame, like the double door, but opens much slower than any other type of door. It is, however, more durable than the sheet metal double door - making it an effective loot room door.",
          imageUrl: "/src/assets/Const/GarageDoor.png",
        },
        {
          id: 15,
          name: "High Wooden Wall",
          description:
            "The High External Wooden Wall is a deployable building object used to wall off an area. The high external is about the height and width of a standard 2x2 wall. The wall also comes with a barbed wire top slowing down and damaging any players that come into contact with it. High externals can be a cheap and effective way to deny entry, however they decay fairly quickly and need to be maintained.",
          imageUrl: "/src/assets/Const/HighWoodenWall.png",
        },
        {
          id: 16,
          name: "Reinforced Glass Window",
          description:
            "The Reinforced Glass Window is now the highest-tier glass window. It replaced the Strengthened glass Window's spot for the highest HP window, and you are now unable to shoot through it. This makes it vital for loot rooms and external TCs. Not very useful for information gathering, as the viewing area is quite small and obstructed by thick bars.",
          imageUrl: "/src/assets/Const/ReinforcedGlassWindow.png",
        },
        {
          id: 17,
          name: "Strengthened Glass Window",
          description:
            "Bulleproof window glass, can block any incoming bullet projectile. Cannot block explosives.",
          imageUrl: "/src/assets/Const/StrengthenedGlassWindow.png",
        },
        {
          id: 18,
          name: "Wood Double Door",
          description:
            "A Cheap door to secure your base. Its vulnerability to fire and weak explosive resistance makes the door a temporary solution to securing your base. Due to its flaws you should look at upgrading to a higher tier door such as Sheet Metal.",
          imageUrl: "/src/assets/Const/WoodDoubleDoor.png",
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
