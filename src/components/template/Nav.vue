<template>
    <div class="nav">
        <router-link to="/" id="logo">
            <img src="../../assets/logo.png" alt="logo">
        </router-link>
        <div class="links" v-show="!windowWidth">
            <router-link  to="/">Home</router-link>
            <router-link to="/menu">Menu</router-link>
            <a href="https://www.ifood.com.br" target="_blank">Delivery</a>
        </div>
        <div class="social" v-show="!windowWidth">
            <a href="https://www.instagram.com/" target="_blank"><BIconInstagram class="icon" /></a>
            <a href="https://pt-br.facebook.com/" target="_blank"><BIconFacebook  class="icon" /></a>
        </div>
        <div class="toggle">
            <BIconList class="toggle" v-show="windowWidth" @click="toggleMobile" :class="{ 'icon-active': mobileNav }"/>
        </div>
        <transition name="mobile-nav">
            <div class="dropdown-nav" v-show="mobileNav" @click="toggleMobile">
                <router-link to="/">Home</router-link>
                <router-link to="/menu">Menu</router-link>
                <a href="https://www.ifood.com.br" target="_blank">Delivery</a>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            mobileNav: null,
            windowWidth: false,
        }
    },
    methods: {
        toggleMobile() {
            this.mobileNav = !this.mobileNav
        },

        watchScreen() {
            this.windowWidth = window.innerWidth < 550
        }
    },
    watch: {
        windowWidth(value) {
            if(!value) {
                if(this.mobileNav) {
                    this.mobileNav = false;
                }
            }
        },
    },
    mounted() {
        this.watchScreen()
        window.addEventListener("resize", this.watchScreen, { passive: true })
    },
}
</script>

<style>
    .nav {
        position: fixed;
        grid-area: nav;
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 20px 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        z-index: 20000000000000000000;
    }

    #logo {
        margin: auto;
        margin-left: 0;
    }

    #logo img {
        height: 40px;
        width: 40px;
    }

    .links a {
        padding-left: 2rem;
        font-size: 1.2rem;
        text-decoration: none;
        color: #fff;
    }

    .links a:hover {
        color: rgb(250, 250, 36);
    }

    .social .icon {
        margin-left: 2rem;
        font-size: 1.2rem;
        color: #fff;
    }

    .social .icon:hover {
        color: rgb(250, 250, 36);
    }

    .toggle {
        font-size: 2.2rem;
        display: flex;
        color: #fff;
        cursor: pointer;
    }

    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100vh;
        max-width: 50vh;
        height: 100%;
        background-color: #111;
        top: 0;
        left: 0;
    }

    .dropdown-nav a {
        border-bottom: 1px solid rgb(250, 250, 36);
        width: 100%;
        color: #fff;
        text-decoration: none;
        text-align: center;
        font-size: 1.2rem;
        padding-block: 1.5rem;
    }

    .dropdown-nav a:hover {
        color: rgb(250, 250, 36);
    }

    .toggle:hover {
        color: rgb(250, 250, 36);
    }
</style>