<template>
    <div id="app">
        <nav class="Menu">
            <a v-for="link in links" :href="link[1]" :key="link[0]" v-text="link[0]"></a>
        </nav>
        <h1>Webpack + {{ name }}</h1>
        <p>Aloha, Webpack con {{ name }} !!</p>
        <img :src="logo" alt="Logo de VueJS">
    </div>
</template>

<script>
import "./styles.css";
import sass from "./scss/main.scss";
import data from "./data.json";
import logo from "./img/vue-logo.png";

export default {
    data() {
        return {
            name: "VueJS",
            logo: logo,
            links: data.links
        }
    }
}

console.log(data)
</script>
