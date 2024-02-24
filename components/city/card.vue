<template>
    <div class="city__card">
        <pre>
        {{ props.weatherCity }}

        </pre>
    </div>
</template>
<script setup>
    import '~/components/city/__city.css'
    const props = defineProps(['weatherCity'])
</script>