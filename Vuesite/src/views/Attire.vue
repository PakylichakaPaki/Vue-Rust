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
          name: "Arctic Suit",
          description:
            "An arctic variant of the hazmat suit which trades radiation for cold protection.",
          imageUrl: "/src/assets/Att/ArcticSuit.png",
        },
        {
          id: 2,
          name: "Boots",
          description:
            "The limited available clothing slots often force a player to choose between boots, gloves, and bandanas, with the superior stats of the boots usually giving it priority.",
          imageUrl: "/src/assets/Att/Boots.png",
        },
        {
          id: 3,
          name: "Coffee Can Helmet",
          description:
            "The coffee can helmet is a face protector that is one tier below the metal facemask, it offers good protection against physical damage to the head and costs less to craft than its older and better brother, the metal facemask.",
          imageUrl: "/src/assets/Att/Coffee.png",
        },
        {
          id: 4,
          name: "Hazmat Suit",
          description:
            "The Hazmat Suit allows the wearer to travel through rad-towns and other irradiated areas safely. While it doesn't provide full protection in certain places at monuments, such as the main building at Launch Site, or the cooling tower at the Nuclear Power Plant, it offers protection from radiation poisoning at almost every other monument on the map, making it useful for exploring. The suit itself is a bright yellow color, meaning it is easy to spot from a distance.",
          imageUrl: "/src/assets/Att/Hazmat.png",
        },
        {
          id: 5,
          name: "Heavy Plate Helmet",
          description:
            "A high-tier protective helmet which protects the entire head. It costs High Quality Metal and Sheet Metal making it fairly easy to acquire near monuments and dungeons. The Heavy Plate Helmet will cause a user's view to be diminished to a small rectangle. Due to heavy plate armour suffering from increased fire damage, it can be countered by a flamethrower or incendiary ammo.",
          imageUrl: "/src/assets/Att/HeavyPlateHelmet.png",
        },
        {
          id: 6,
          name: "Heavy Plate Jacket",
          description:
            "A high-tier protective item that will protect the user from a large portion of the damage dealt by most sources at the price of a movement penalty. It will also amplify the effects of cold and heat damage on the player, making it a situational item.",
          imageUrl: "/src/assets/Att/HeavyPlateJacket.png",
        },
        {
          id: 7,
          name: "Heavy Scientist Suit",
          description:
            "A Heavy Scientist Suit worn by the heavy scientists which are spawned at the oil rigs. Unobtainable during normal gameplay, it can only be acquired through console by admins.",
          imageUrl: "/src/assets/Att/HeavyScientistSuit.png",
        },
        {
          id: 8,
          name: "Hoodie",
          description:
            "The hoodie offers the greatest projectile and melee resistance out of all the under armor variants. This superiority is offset by its high research and production cost.",
          imageUrl: "/src/assets/Att/Hoodie.png",
        },
        {
          id: 9,
          name: "Jacket",
          description:
            "Though not as widely employed as its wooden counterpart, the jacket bridges the gap dividing the aforementioned and road sign. It offers superior projectile resistance to its predecessors, and founds the melee resistance that will remain static up through to the metal chest plate.",
          imageUrl: "/src/assets/Att/Jacket.png",
        },
        {
          id: 10,
          name: "Longsleeve T-Shirt",
          description:
            "Common torso attire sharing the same stats as the t-shirt. Default skin is very noticeable.",
          imageUrl: "/src/assets/Att/LongsleeveTShirt.png",
        },
        {
          id: 11,
          name: "Metal Chest Plate",
          description:
            "The metal chest plate is a versatile end-game armor used most often when roaming and raiding. Though high quality metal is often stored in abundance due to its limited use, players should begin making room for the sewing kits as this period comes into the horizon.",
          imageUrl: "/src/assets/Att/MetalChestPlate.png",
        },
        {
          id: 12,
          name: "Metal Facemask",
          description:
            "A high-tier protective face mask which somehow protects the entire head. It costs High Quality Metal, making it quite expensive compared to its alternatives, but in return offers the greatest protection to almost all forms of physical damage in exchange for decreasing cold protection.",
          imageUrl: "/src/assets/Att/MetalMask.png",
        },
        {
          id: 13,
          name: "Pants",
          description:
            "As the best available clothing for the legs the pants are a must-research.",
          imageUrl: "/src/assets/Att/Pants.png",
        },
        {
          id: 14,
          name: "Riot Helmet",
          description:
            "A mid-tier helmet that protects the user's head. Made without the need for High-Quality-Metal, the helmet is an inexpensive form of protection that offers exceptional melee resistance and amicable projectile resistance. It comes in a rather form-fitting default black skin, which tends to camouflage rather well, with several other user skins in the same vein.",
          imageUrl: "/src/assets/Att/RiotHelmet.png",
        },
        {
          id: 15,
          name: "Road Sign Jacket",
          description:
            "The road sign jacket has become the staple of mid-game armor due primarily to its worthwhile projectile resistance without necessitating high quality metal.",
          imageUrl: "/src/assets/Att/RoadSignJacket.png",
        },
        {
          id: 16,
          name: "Road Sign Kilt",
          description:
            "The lack of a metal chest plate or jacket equivalent to leg armor allows the road sign kilt a monopoly on both mid and end-game leg armor. Heavy plate pants are all that can surpass it statistically, but those are seldom seen outside of airlock brawls due to their movement penalty.",
          imageUrl: "/src/assets/Att/RoadSignKilt.png",
        },
        {
          id: 17,
          name: "Roadsign Gloves",
          description:
            "Gloves made out of metal offers a good amount of protection to the upper body.",
          imageUrl: "/src/assets/Att/RoadsignGloves.png",
        },
        {
          id: 18,
          name: "Wolf Headdress",
          description:
            "Scavenging the wolf skull necessary to produce this headdress won't be easy, but it pays for itself and then some with the resistances it grants; phenomenal melee and explosive protection, excellent projectile defense, and a pleasant resistance to cold makes this thing a primitive powerhouse. If that weren't enough, its ability to combine with the bandana can push it even further beyond its already unbelievable state. Treasure these.",
          imageUrl: "/src/assets/Att/WolfHeaddress.png",
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
