<template>
    <div class="main-page">
        <div class="main-page__bg" @click="hide = true">
            <div class="main-page__bg-color --day"></div>
            <div class="main-page__bg-color --night"></div>
        </div>
        <div class="search --width50dvw">
            <input v-model="citySearch" @input="search" class="search__input" type="text" placeholder="Введите город"/>
            <div class="search__result">
                <ul v-show="hide === false" class="search__result-city">
                    <CityList v-for="(city, index) in cities" :city="city" :key="index" @click="getWeather(city)"/>
                </ul>
            </div>
        </div>
        <div v-if="weatherCity" class="city --width50dvw">
            <div class="city__cards " @click="hide = true">
                <CityCard :weatherCity="weatherCity" />
            </div>
            <div class="city__forecast">
                <div class="city__card-blur"></div>
                <CityForecast :weatherFiveDays="weatherFiveDays" />
            </div>
        </div>
    </div>
</template>
<script setup>
    const keyApi = ref('87895888171177b90a2353c64ee213d5');
    const citySearch = ref();
    let weatherCity;
    let weatherFiveDays;
    let cities;
    const hide = ref(true)

    async function getWeather(city){
        const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${keyApi.value}&lang=ru&units=metric`);
        const { data2, error2 } = useFetch(`api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${keyApi.value}&lang=ru&units=metric`);
        //const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${keyApi.value}&lang=ru`);

        weatherCity = data;
        weatherFiveDays = data2;
        console.log(data2)
        hide.value = true;
    }
            
    async function search() {
        hide.value = false;
        const { data, error } = useFetch(`http://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=10&appid=${keyApi.value}`);
        cities = data;
    }
</script>