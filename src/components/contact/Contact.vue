<template>
    <div class="contact">
        <h2>Contact us</h2>
        <div class="underline"></div>
        <div class="container">
            <div class="infos">
                <h3>Information:</h3>
                <p> <span><BIconGeoAltFill /></span> 37 Lorem ipsum dolor St.</p>
                <p> <span><BIconCashCoin /></span> We accept cash and credit card payments.</p>
                <p> <span><BIconCalendarCheck /></span> We make reservations for parties.</p>
                <h4>Schedule:</h4>
                <p> <span><BIconClockFill /></span> Local - monday to saturday 4pm to 12am.</p>
                <p> <span><BIconClockFill /></span> Delivery - monday to saturday 4pm to 1am.</p>
            </div>
            <div class="contact-form">
                <h5>Contact:</h5>
                <input type="text" placeholder="Name">
                <input type="email" placeholder="E-mail">
                <input type="text" placeholder="Subject">
                <textarea name="message" cols="30" rows="6" placeholder="Message"></textarea>
                <button>Send</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #222;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 100px;
        margin: 0 auto 50px auto;
        align-items: center;
    }

    h2 {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1.6rem;
        font-size: 2rem;
        color: #222;
        background: rgb(250, 250, 36);
        border-radius: 20px;
        padding: 8px 15px;
    }

    .infos span {
        padding-right: 10px;
    }

    .infos h3, h4{
        font-size: 2.2rem;
        padding-bottom: 20px;
        color: rgb(250, 250, 36);
    }

    .infos h4 {
        padding-top: 50px;
    }

    .infos p {
        padding-block: 15px;
        color: #fff;
        font-size: 1.2rem;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        width: 350px;
        justify-self: center;
    }

    .contact-form h5 {
        font-size: 2.2rem;
        padding-bottom: 20px;
        color: rgb(250, 250, 36);
    }

    .contact-form input {
        padding: 12px 20px;
        margin: 8px 0;
        border: 3px solid #000;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        font-size: 1rem;
    }

    .contact-form  input:focus {
        border: 3px solid rgb(250, 250, 36);
    }
    
    .contact-form textarea {
        padding: 12px 20px;
        margin: 8px 0;
        border: 3px solid #000;
        border-radius: 4px;
        outline: none;
        font-size: 1.1rem;
        resize: none;
    }

    .contact-form  textarea:focus {
        border: 3px solid rgb(250, 250, 36);
    }

    .contact-form button {
        height: 40px;
        margin-block: 30px;
        background-color: rgb(250, 250, 36);
        border: 1px solid #000;
        border-radius: 4px;
        font-size: 1.2rem;
        box-shadow: 3px 4px 5px rgb(95, 94, 94);
    }

    .contact-form button:hover {
        cursor: pointer;
    }

    .contact-form button:active {
        box-shadow: 1px 1px 5px rgb(128, 128, 128);
        transform: translateY(2px);
    }

    @media (max-width: 950px) {
        .container {
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
        }

        .contact-form {
            margin-top: 50px;
        }
    }
</style>