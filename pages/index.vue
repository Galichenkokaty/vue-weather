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
                    <CityList v-for="(city, index) in cities" :city="city" :key="index" @click="getWeather(city), hide = true"/>
                </ul>
            </div>
        </div>
        <div v-if="weatherCity" class="city --width50dvw">
            <div class="city__cards " @click="hide = true">
                <CityCard :weatherCity="weatherCity" />
            </div>
            <ForecastCards v-if="weatherFiveDays" :weatherFiveDays="weatherFiveDays" />
        </div>
    </div>
</template>
<script setup>
    const keyApi = ref('87895888171177b90a2353c64ee213d5');
    const citySearch = ref();
    let weatherCity;
    let cities;
    const hide = ref(true);
    let weatherFiveDays;
    
    function search() {
        hide.value = false;
        const { data, error } = useFetch(`http://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=10&appid=${keyApi.value}`);
        cities = data;
    }

    function getWeather(city){
        const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${keyApi.value}&lang=ru&units=metric`);
        //const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${keyApi.value}&lang=ru`);

        weatherCity = data;
        getForecast(city)
    }
    function getForecast(city){
        const { data, error } =  useFetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${keyApi.value}&lang=ru&units=metric`);

        weatherFiveDays = data;
    }

</script>