<template>
    <div class="main-page">
        <div class="main-page__bg" @click="hide = true">
            <NuxtImg class="main-page__img" src="/bg__main.jpg" />
        </div>
        <div class="search">
            <input v-model="citySearch" @input="search" class="search__input" type="text" placeholder="Введите город"/>
            <div class="search__result">
                <ul v-show="hide === false" class="search__result-city">
                    <CityList v-for="(city, index) in cities" :city="city" :key="index" @click="getWeather(city)"/>
                </ul>
            </div>
        </div>
        <div class="city__cards">
            <CityCard :weatherCity="weatherCity" />
        </div>
    </div>
</template>
<script setup>
    const keyApi = ref('87895888171177b90a2353c64ee213d5');
    const citySearch = ref();
    let weatherCity;
    let cities;
    const hide = ref(true)

    async function getWeather(city){
        //const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${keyApi.value}&lang=ru`);
        const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=${keyApi.value}&lang=ru`);
        weatherCity = data;
        hide.value = true;
    }
            
    async function search() {
        hide.value = false;
        const { data, error } = useFetch(`http://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=10&appid=${keyApi.value}`);
        cities = data;
    }
</script>