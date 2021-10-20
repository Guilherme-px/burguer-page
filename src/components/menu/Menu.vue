<template>
	<div class="menu">
		<h2>Menu</h2>
		<ul>
			<li v-for="hamburguer in hamburguers" :key="hamburguer.id">
				<MenuItem :hamburguer="hamburguer" />
			</li>
		</ul>
	</div>
</template>

<script>
import MenuItem from "@/components/menu/MenuItem";

export default {
    name: "Menu",
    components: { MenuItem },
    data() {
        return {
            hamburguers: [
                {
                    id: 1,
                    name: "hamburguer 1",
                    price: "30,00",
                    img: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg",
                    ingredientes:
							"Lorem ipsum dolor sit amet. Est eius odio qui molestiae aperiam sit galisum qui unde voluptatem!",
                },
                {
                    id: 2,
                    name: "hamburguer 2",
                    price: "35,99",
                    img: "https://cdn.pixabay.com/photo/2019/11/20/21/21/burger-4641173_960_720.jpg",
                    ingredientes:
							"Lorem ipsum dolor sit amet. Est eius odio qui molestiae aperiam sit galisum qui unde voluptatem!",
                },
                {
                    id: 3,
                    name: "hamburguer 3",
                    price: "28,90",
                    img: "https://cdn.pixabay.com/photo/2014/09/03/15/05/sandwich-434658_960_720.jpg",
                    ingredientes:
							"Lorem ipsum dolor sit amet. Est eius odio qui molestiae aperiam sit galisum qui unde voluptatem!",
                },
                {
                    id: 4,
                    name: "hamburguer 4",
                    price: "37,50",
                    img: "https://cdn.pixabay.com/photo/2021/09/20/20/47/hamburger-6641821_960_720.jpg",
                    ingredientes:
							"Lorem ipsum dolor sit amet. Est eius odio qui molestiae aperiam sit galisum qui unde voluptatem!",
                },
                {
                    id: 5,
                    name: "hamburguer 5",
                    price: "34,00",
                    img: "https://cdn.pixabay.com/photo/2020/11/08/01/44/burger-5722678_960_720.jpg",
                    ingredientes:
							"Lorem ipsum dolor sit amet. Est eius odio qui molestiae aperiam sit galisum qui unde voluptatem!",
                },
                {
                    id: 6,
                    name: "hamburguer 6",
                    price: "36,90",
                    img: "https://cdn.pixabay.com/photo/2021/07/29/18/07/burger-6507710_960_720.jpg",
                    ingredientes:
							"Lorem ipsum dolor sit amet. Est eius odio qui molestiae aperiam sit galisum qui unde voluptatem!",
                },
            ],
        };
    },
};
</script>

<style scoped>
	.menu {
		background-image: url("https://cdn.pixabay.com/photo/2021/08/25/13/32/fast-food-6573468_960_720.png");
		background-position: 0 -250px;
		background-size: 260px;
		background-repeat: repeat;
		display: flex;
		flex-direction: column;
	}

	h2 {
		align-self: center;
	}

	.menu ul {
		list-style-type: none;
		display: grid;
		grid-column-gap: 30px;
		grid-template-columns: 1fr 1fr 1fr;
		max-width: 90%;
		margin: auto;
	}

	@media (max-width: 768px) {
		.menu ul {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.menu ul {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>