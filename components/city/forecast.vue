<template>
    <div class="city__forecast-card">
        <pre>
            {{ props.weatherFiveDays }}
        </pre>
    </div>
</template>
<script setup>
    import '~/components/city/__city.css'
    const props = defineProps(['weatherFiveDays'])
</script>