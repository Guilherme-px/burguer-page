<template>
    <div class="about">
        <h2>About us</h2>
        <div class="underline"></div>
        <div class="text-about">
            <img src="" alt="">
            <div class="text">
                <p>Lovers of a good hamburger, we opened this hamburger shop so that we could make hamburgers of unrivaled quality and flavor for our customers.</p>
                <br>
                <p>We create a relaxed atmosphere with music and quality service.</p>
                <br>
                <p>We have an excellent team of professionals and high quality meats to prepare our burgers.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: whitesmoke;
        width: 100%;
    }

    .text-about {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        padding: 0 50px;
    }

    .text {
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-self: center;
        max-width: 500px;
    }

    .text-about img {
        background-image: url('../assets/about.jpg');
        background-size: cover;
        max-width: 500px;
        height: 300px;
    }

    @media (max-width: 900px) {
        .text-about {
            grid-template-columns: repeat(1, 1fr);
        }

        .text {
            padding: 50px 0;
        }
    }
</style>