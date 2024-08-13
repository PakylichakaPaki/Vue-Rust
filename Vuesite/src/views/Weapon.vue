<template>
  <div class="container">
    <div class="block">
      <div class="shop-container">
        <div class="products-list">
          <div class="column">
            <div
              v-for="(product, index) in products.slice(0, 9)"
              :key="product.id"
              :class="{ 'product-card': true, selected: product.isSelected }"
              @click="selectProduct(index)"
            >
              <div class="product-card-content">
                <img
                  :src="product.imageUrl"
                  alt="Product Image"
                  class="product-image"
                />
                <h2 class="product-title">{{ product.name }}</h2>
              </div>
            </div>
          </div>
          <div class="column">
            <div
              v-for="(product, index) in products.slice(9)"
              :key="product.id"
              :class="{ 'product-card': true, selected: product.isSelected }"
              @click="selectProduct(index + 9)"
            >
              <div class="product-card-content">
                <img
                  :src="product.imageUrl"
                  alt="Product Image"
                  class="product-image"
                />
                <h2 class="product-title">{{ product.name }}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="product-description" v-if="selectedProduct">
          <img
            :src="selectedProduct.imageUrl"
            alt="Selected Product Image"
            class="selected-product-image"
          />
          <h2>{{ selectedProduct.name }}</h2>
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
          name: "16x Zoom Scope",
          description:
            "The 16x Zoom Scope is a military-grade telescopic sight. Its reticle is a thin cross with bullet-drop guides. Its extreme magnification allows for precise fire over extreme distances, but its narrow field of view makes it impractical for any close quarter engagements or full-auto fire. As it's susceptible to shaking, consider using a Weapon Lasersight or Tactical Gloves in addition to this scope.",
          imageUrl: "/src/assets/Zoom16x.png",
        },
        {
          id: 2,
          name: "Bolt Action Rifle",
          description:
            "The Bolt Action Rifle is a powerful late game rifle that offers high accuracy and high damage at the cost of speed. Having the most damage and least spread of any weapon, it is often used as a designated sniper rifle, and is commonly fitted with a scope to increase the sight range for the user. Its slow rate of fire greatly limits its use in close quarters combat, and its limited capacity forces users to take shots very carefully. Having a very fast bullet velocity, users need not lead targets or compensate for gravity as much as with other weapons firing a slower bullet.",
          imageUrl: "/src/assets/Bolt.png",
        },
        {
          id: 3,
          name: "Candy Cane Club",
          description:
            "The Candy Cane Club is much better used as a Food or Medical item rather than a Melee weapon as it's damage is comparable to the Bone club.",
          imageUrl: "/src/assets/Candy.png",
        },
        {
          id: 4,
          name: "Custom SMG",
          description:
            "The Custom SMG is a quick-firing, low damage submachine gun with moderate recoil. Its moderate spread and low bullet velocity limit the use of the weapon to close and possibly moderate ranges, but its maximum range can be extended through the use of attachments like the Silencer or Weapon Lasersight to increase accuracy. The Custom SMG is the least expensive submachine gun, and fires the quickest out of every weapon in the game. With no movement penalty, like other SMGs, this weapon is most effectively used while on the move.",
          imageUrl: "/src/assets/SMG.png",
        },
        {
          id: 5,
          name: "F1 Grenade",
          description:
            "End game grenade often used in combat. Unlike the Beancan Grenade, the F1 Grenade is much more reliable as it does not dud or randomly explode.",
          imageUrl: "/src/assets/F1.png",
        },
        {
          id: 6,
          name: "Holosight",
          description:
            "The Holosight is a craftable alternative to standard weapon iron sights. Its reticle is a bright red holographic bullseye which also glows in the dark, making it the best scope for night-time combat. Thanks to its slight magnification, it can provide a greater degree of accuracy to any ranged weapon without sacrificing recoil control or close-quarter capabilities. It's especially useful if barrel attachments obscure the weapon's original sights, such as the Silencer.",
          imageUrl: "/src/assets/Holo.png",
        },
        {
          id: 7,
          name: "LR-300 Assault Rifle",
          description:
            "The LR-300 is a rare, military grade assault rifle. Dealing moderate-high damage combined with its low recoil and high ammo capacity render the LR-300 a weapon to be reckoned with. However, with its moderate rate of fire and relatively high spread, its use at long ranges may be of question. It was previously considered to be one of the rarest weapons in the game, now much more readily available due to it's availability at the Bandit Camp's Black Market merchant.",
          imageUrl: "/src/assets/LR300.png",
        },
        {
          id: 8,
          name: "M4 Shotgun",
          description: "A semi automatic military issue shotgun",
          imageUrl: "/src/assets/M4.png",
        },
        {
          id: 9,
          name: "Machete",
          description:
            "A quick and medium damaging melee weapon. Swings fast and hits hard, useful for one last quick hit when in a close range battle and out of ammo.",
          imageUrl: "/src/assets/Machete.png",
        },
        {
          id: 10,
          name: "8x Zoom Scope",
          description:
            "The 8x Zoom Scope is a hand-crafted telescopic sight. Its reticle is simply a thin cross. Its magnification allows for greater precision over long ranges and extending most weapon's range, but is not ideal for close quarter engagements.",
          imageUrl: "/src/assets/Zoom8x.png",
        },
        {
          id: 11,
          name: "Bone Club",
          description:
            "The Bone Club is a cheap, simple to craft melee weapon of the early game. Despite its shortcomings, the Bone Club serves as an upgrade to the Rock, being better at both harvesting resources and fighting.",
          imageUrl: "/src/assets/Bone.png",
        },
        {
          id: 12,
          name: "Combat Knife",
          description:
            "The Combat Knife is an extremely useful melee weapon that required Tier 1 workbench to craft, basically an upgraded bone knife. Its exquisite design structure makes it the best skinning efficiency among similar melees, which means you can get the full loot from skinning with shortest time. Its cheap cost makes it the most cost-effective farming tool.",
          imageUrl: "/src/assets/CombatKnife.png",
        },
        {
          id: 13,
          name: "Double Barrel Shotgun",
          description:
            "The Double Barrel Shotgun is a lower tier, close ranged weapon capable of one-hitting enemies within its effective range. It's best used in conjunction with other, longer range guns and against only one or two enemies at a time since it can only shoot two shells before requiring a lengthy reload. Furthermore, shots should only be made with it if it's likely that the majority of the pellets in a blast will connect with their target. ",
          imageUrl: "/src/assets/DoubleBarrel.png",
        },
        {
          id: 14,
          name: "Flame Thrower",
          description:
            "The Flame Thrower (or flamethrower) is a close range weapon that also serves as a basic raiding tool. Fire sprayed from a flamethrower may obscure a target's vision and rapidly drain their health. The Flame Thrower will start to steadily spawn fireballs once the trigger has been held long enough, and each one will damage and slow players or burn any wooden items they touch. Take care- fireballs spawned from spraying can and will burn bodies away (but their loot will fall in a bag if they do).",
          imageUrl: "/src/assets/Flame.png",
        },
        {
          id: 15,
          name: "Longsword",
          description:
            "A very powerful melee weapon. Whilst slow, it delivers a great amount of melee damage with each swing or poke.",
          imageUrl: "/src/assets/Longsword.png",
        },
        {
          id: 16,
          name: "M92 Pistol",
          description:
            "The M92 pistol is a powerful weapon with low recoil and high fire rate and damage. It can't be crafted by the player, rather it has to be found inside crates, or purchased from the Bandit Camp.",
          imageUrl: "/src/assets/M92.png",
        },
        {
          id: 17,
          name: "Molotov Cocktail",
          description: "An incendiary device",
          imageUrl: "/src/assets/Molotov.png",
        },
        {
          id: 18,
          name: "Nailgun",
          description:
            "A low powered low range early game weapon using nailgun nails as ammunition. The nailgun is easily accessible, very cheap and makes a good secondary weapon when in early game.",
          imageUrl: "/src/assets/Nailgun.png",
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
