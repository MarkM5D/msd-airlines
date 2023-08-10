<template>
    <div class="info section">
        <div class="infoContainer container">

            <div class="titleDiv flex">
                <h2 data-aos="fade-right" data-aos-duration="1000">Travel to make memories all around the world</h2>
                <button class="btn" data-aos="fade-left" data-aos-duration="1000">View All</button>
            </div>
            <div class="cardsDiv grid">
                <div class="singleCard grid" data-aos="fade-up" data-aos-duration="1000">
                    <div class="iconDiv flex">
                        <v-icon name="io-calendar-outline" class="icon" />
                    </div>
                    <span class="cardTitle">Book & Relax</span>
                    <p>You can also call airlines from your phone and book a flight ticket !</p>
                </div>

                <div class="singleCard grid" data-aos="fade-up" data-aos-duration="3000">
                    <div class="iconDiv flex colorOne">
                        <v-icon name="io-shield-checkmark-outline" class="icon" />
                    </div>
                    <span class="cardTitle">Smart Checklist</span>
                    <p>You can also call airlines from your phone and book a flight ticket !</p>
                </div>

                <div class="singleCard grid" data-aos="fade-up" data-aos-duration="4000">
                    <div class="iconDiv flex colorTwo">
                        <v-icon name="bi-bookmark-check" class="icon" />
                    </div>
                    <span class="cardTitle">Save More</span>
                    <p>You can also call airlines from your phone and book a flight ticket !</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'AOSExample',
    mounted() {
        AOS.init({
            duration: 1000,
        });
    },
};
</script>

<style></style>