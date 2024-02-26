<template>
    <div class="city__card">
        <div class="city__card-blur"></div>
        <div class="city__card-content">
            <!-- <div class="city__card-name">{{ props.weatherCity.name }}</div> -->
            <div class="city__card-temp">
                <div class="city__card-temp-icon">
                    <NuxtIcon class="city__card-temp-img" :name="props.weatherCity.weather[0].icon" filled=""/>
                </div>
                <div class="city__card-temp-value">{{ Math.round(props.weatherCity.main.temp) }}</div>
            </div>
            <div class="city__card-desc">{{ props.weatherCity.weather[0].description }}</div>
            <div class="city__card-feels-like">Ощущается как <span>{{ Math.round(props.weatherCity.main.feels_like) }}</span></div>
        </div>
        <!-- <pre>
            {{ props.weatherCity }}
        </pre> -->
    </div>
</template>
<script setup>
    import '~/components/city/__city.css'
    const props = defineProps(['weatherCity'])
</script>