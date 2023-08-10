<template>
    <div class="travelers container section">
        <div class="sectionContainer">
            <h2 data-aos="fade-down" data-aos-duration="1000">Top travelers of this month !</h2>
            <div class="travelersContainer grid">

                <div v-for="traveler in travelers" :key="traveler.id" class="singleTraveler" data-aos="fade-up" data-aos-duration="1000">
                    <img :src="traveler.destinationImage" alt="" class="destinationImage" />
                    <div class="travelerDetails">
                        <div class="travelerPicture">
                            <img :src="traveler.travelerImage" class="travelerImage" alt="" />
                        </div>
                        <div class="travelerName">
                            <span>{{ traveler.travelerName }}</span>
                            <p>{{ traveler.socialLink }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    data() {
        return {
            travelers: [
                {
                    id: 1,
                    destinationImage: '/src/Assets/rusya.jpg', 
                    travelerImage: '/src/Assets/ENG1.jpg',
                    travelerName: 'Natasha',
                    socialLink: '@natasha'
                },
                {
                    id: 2,
                    destinationImage: '/src/Assets/istanbul.jpeg', 
                    travelerImage: '/src/Assets/pp.jpg',
                    travelerName: 'MSD',
                    socialLink: '@msd'
                },
                {
                    id: 3,
                    destinationImage: '/src/Assets/kapadokya.jpg', 
                    travelerImage: '/src/Assets/ENG2.jpg',
                    travelerName: 'Maria',
                    socialLink: '@maria'
                },
                {
                    id: 4,
                    destinationImage: '/src/Assets/dubai.jpeg', 
                    travelerImage: '/src/Assets/ENG5.jpg',
                    travelerName: 'Alex',
                    socialLink: '@alex'
                }
            ]
        };
    },
    name: 'AOSExample',
    mounted() {
        AOS.init({
            duration: 1000,
        });
    },
}
</script>

<style></style>