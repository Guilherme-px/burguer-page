<template>
    <div class="home">
        <Banner />
        <About />
        <Contact />
    </div>
</template>

<script>
import Banner from '@/components/template/Banner';
import About from './About';
import Contact from '@/components/contact/Contact'

export default {
    name: "Home",
    components: { Banner, About, Contact }
};
</script>

<style>
    
</style>