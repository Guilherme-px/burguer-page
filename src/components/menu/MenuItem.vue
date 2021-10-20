<template>
    <div class="burguers">
        <div class="recipe-item-image">
            <img :src="hamburguer.img"
                 alt="Recipe">
        </div>
        <div class="recipe-item-name">
            <span>{{ hamburguer.name }}</span>
        </div>
        <div class="recipe-item-desc">
            <span>{{ `Ingredientes: ` + hamburguer.ingredientes }}</span>
        </div>
        <div class="recipe-item-price">
            <span>{{ 'R$' + hamburguer.price }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['hamburguer']
}
</script>

<style>
    .burguers {
        border-radius: 8px;
        margin-top: 35px;
        margin-bottom: 60px;
        background-color: #222;
        box-shadow: 10px 10px 21px 3px rgba(0,0,0,0.75);
        border: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
    }

    .recipe-item-image img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        height: 240px;
        width: 100%;
    }

    .burguers {
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }

    .recipe-item-name span {
        align-self: center;
        font-size: 2rem;
        font-family: 'Lobster', cursive;
        color: rgb(250, 250, 36);
    }

    .recipe-item-name {
        display: flex;
        align-self: center;
        flex-direction: column;
        width: 100%;
        padding-block: 10px;
    }

    .recipe-item-price span {
        align-self: center;
        font-size: 1.2rem;
        font-family: 'Lobster', cursive;
        color: #fff;
    }

    .recipe-item-price {
        display: flex;
        align-self: center;
        flex-direction: column;
        width: 100%;
        padding-block: 10px;
    }

    .recipe-item-desc span {
        text-align: center;
        font-size: 1.2rem;
        font-family: 'Lobster', cursive;
        color: #fff;
    }

    .recipe-item-desc {
        display: flex;
        align-self: center;
        flex-direction: column;
        width: 100%;
        padding-block: 10px;
    }
</style>