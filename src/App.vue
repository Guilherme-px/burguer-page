<template>
    <div id="app">
        <Nav />
        <Content />
        <Footer />
    </div>
</template>

<script>
import Nav from '@/components/template/Nav'
import Footer from '@/components/template/Footer'
import Content from './components/template/Content'

export default {
    name: 'App',
    components: { Nav, Footer, Content }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h2 {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1.6rem;
        font-size: 2rem;
        color: rgb(250, 250, 36);
        background: #222;
        border-radius: 20px;
        padding: 8px 15px;
    }

    .underline {
        content: '';
        border: 1px solid rgb(250, 250, 36);
        width: 8rem;
        margin-bottom: 5rem;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        display: grid;
        grid-template-rows: 80px 1fr 1fr;
        grid-template-areas: 
            "nav"
            "content"
            "footer";
    }
</style>
