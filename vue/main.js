//  const app = {
//     data: function () {
//         return {
//             product: "Socks"
//         }
//     }
// }

// Vue.createApp(app).mount("#app"); 

// Vue3.js coding
const app = Vue.createApp({
    //Options object
    data() {
        return {
            product: "Socks",
            image: "./assets/images/socks_green.jpg",
            inStock: true
        }
    }
})