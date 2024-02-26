<template>
    <div class="city__list-item">
        <span class="city__list-item-name">
            {{ props.city.name }}
        </span>,
        <span class="city__list-item-country">
            {{ props.city.country }}
        </span>,
        <span v-if="props.city.state" class="city__list-item-state">
            {{ props.city.state }}
        </span>
    </div>
</template>
<script setup>
    import '~/components/city/__city.css'
    const props = defineProps(['city'])
</script>