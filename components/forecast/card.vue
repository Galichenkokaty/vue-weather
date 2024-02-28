<template>
    <div class="forecast__card">
        <div class="city__card-blur"></div>
        <div class="city__card-date" >{{ new Date(props.card[0].dt_txt).toLocaleString("ru", options) }}</div>

        <div class="forecast__card-hours">
            <div v-for="(hour,index) in props.card" class="forecast__card-hour">

                <div class="forecast__card-hour-time"><span>{{ hour.dt_txt.split(' ')[1].split(':')[0] }}</span><span>:00</span></div>
                <div class="forecast__card-hour-icon">
                    <NuxtIcon class="forecast__card-hour-img" :name="hour.weather[0].icon" filled=""/>
                </div>
                <div class="forecast__card-hour-value">{{ Math.round(hour.main.temp) }}</div>

            </div>
        </div>
    </div>
</template>
<script setup>
    import '~/components/forecast/__forecast.css'
    const props = defineProps(['card']);
    let options = {
        // year: 'numeric',
        month: 'long',
        weekday: 'short',
        day: 'numeric',
        timezone: 'UTC'
    };
</script>