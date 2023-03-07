<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
const clickToggle = ref(false);
const currentEvent = reactive({});
const onClick = () => {
    clickToggle.value = !clickToggle.value;
}
</script>

<template>
    <h2>Event handling</h2>
    <br />
    <div @click="onClick">Click me</div>
    <div v-if="clickToggle">Now you see me</div>
    <div @click="(event) => { currentEvent.event = event }">CurrEvent {{ JSON.stringify(currentEvent.event) }}</div>
</template>

<style scoped></style>
