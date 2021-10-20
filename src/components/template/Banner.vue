<template>
    <div class="banner">
        <span>Hamburgers made with love and incomparable flavor</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .banner {
        background-image: url('../../assets/banner.jpg');
        background-position: 0 -190px;
        background-size: cover;
        background-repeat: no-repeat;
        height: 545px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        z-index: 0;
    }

    span {
        font-size: 2rem;
        position: absolute;
        right: 0;
        top: 200px;
        padding-left: 50px;
        padding-right: 50px;
        color: rgb(250, 250, 36);
    }

    @media (max-width: 1150px) {
        .banner {
			background-position: 0 -100px;
		}

        span {
            width: 90%;
            top: 150px;
            padding-right: 0;
            text-align: left;
            max-width: 50%;
        }
    }

    @media (max-width: 1000px) {
        .banner {
			background-position: 0 0;
		}

        span {
            width: 90%;
            top: 150px;
            padding-right: 10px;
            max-width: 60%;
            text-align: center;
        }
    }
</style>