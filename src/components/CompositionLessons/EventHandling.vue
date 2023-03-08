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
    <!-- Ten modifiers for @ event directives -->
    <!-- Including prevent, lazy, once, {keys}, middle, left, right -->
    <div @click="(event) => { currentEvent.event = event }">CurrEvent {{ JSON.stringify(currentEvent.event) }}</div>
    <!-- For keys, it have to be focued to trigger the key events -->
    <button @keydown.a="onClick">Key down</button>
    <button @keydown.w.exact="onClick">Key down exac</button>
</template>

<style scoped></style>
