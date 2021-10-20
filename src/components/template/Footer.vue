<template>
    <footer class="footer">
        <div class="social">
            <span>Our social networks:</span>
            <div>
                <a href="https://www.instagram.com/" target="_blank"><BIconInstagram class="icon" /></a>
                <a href="https://pt-br.facebook.com/" target="_blank"><BIconFacebook  class="icon" /></a>
            </div>
        </div>
        <span class="dev">Developed by Guilherme Augusto - &copy; Copyright 2021-{{new Date().getFullYear()}}</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    .footer {
        grid-area: footer;
        background-color: #222;
        border-top: 4px solid #111;
        padding-block: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .footer span {
        color: #fff;
        font-size: 1.2rem;
        padding-bottom: 15px;
        margin: auto;
    }

    .social {
        margin: auto;
        padding: 20px 0 50px;
        display: flex;
    }

    .social span {
        font-size: 1.2rem;
    }

    .social .icon {
        font-size: 1.5rem;
    }

    @media (max-width: 500px) {
        .social {
            flex-direction: column;
        }

        .dev {
            padding: 0 50px;
            text-align: center;
            line-height: 40px;
        }
    }
</style>