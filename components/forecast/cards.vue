<template>
    <div class="forecast__cards">
        <ForecastCard v-for="(card, index) in getListDays(props.weatherFiveDays.list)" :card="card"/>
    </div>
</template>
<script setup>
    import '~/components/forecast/__forecast.css'
    const props = defineProps(['weatherFiveDays'])
    let weatherFiveDaysList = [];
    function getListDays(obj){
        let after, now;
        let count = 0;
        obj.forEach((item)=>{
            after = obj.indexOf(item) - 1;
            now = obj.indexOf(item);
            if(now == 0 || obj[after].dt_txt.split(' ')[0] == obj[now].dt_txt.split(' ')[0]){
                 
            } else if( obj[after].dt_txt.split(' ')[0] !== obj[now].dt_txt.split(' ')[0]){
                const chunk = obj.slice(count, now);
                weatherFiveDaysList.push(chunk);
                count = now;
            }
        })
        return weatherFiveDaysList
    }
    
</script>