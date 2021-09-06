<template>
    <div class="card w-80 lg:w-96 text-mentor-light">
        <img src="img/illustration-hero.svg" class="rounded-t-2xl w-full" alt="">
        <div class="flex flex-col gap-5 p-5 lg:p-10">
            <div class="flex flex-col items-center justify-center">
                <span class="text-2xl font-bold text-mentor-dark py-2">Order Summary</span>
                <span class="text-center font-medium px-4">You can listen now to millions of songs, audiobooks, and podcasts on any device anywhere you like!</span>
            </div>
            <div class="flex items-center justify-between w-full px-4 py-4 bg-gray-100 rounded-xl">
                <IconMusic />
                <div class="flex flex-col items-center justify-center -ml-8">
                    <span class="text-mentor-dark font-bold">Annual Plan</span>
                    <span class="font-medium">$59.99/year</span>
                </div>
                <a href="#" class="text-mentor-medium underline font-semibold text-sm active:text-mentor-active">Change</a>
            </div>
            <div class="flex flex-col gap-3">
                <button class="bg-mentor-medium font-bold text-white shadow-lg active:bg-mentor-active">Proceed to Payment</button>
                <button class="font-bold text-gray-400 active:text-gray-800">Cancel Order</button>
            </div>
        </div>
    </div>
</template>
<script>
import ImgHero from '@/components/SVG/ImgHero.vue'
import IconMusic from '@/components/SVG/IconMusic.vue'
export default {
    components: {
        ImgHero,
        IconMusic
    }
}
</script>
<style lang="postcss" scoped>
.card{
    @apply flex flex-col items-center justify-center rounded-3xl bg-white max-w-xl;
}
button {
    @apply px-6 py-3 text-center rounded-lg;
}
</style>