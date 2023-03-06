<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'

const awesome = ref(true);
const count = ref(0);
const { showMe } = reactive({ showMe: true });
const ohno = () => {
    awesome.value = !awesome.value;
    if (awesome.value) {
        count.value++;
    }
}
</script>

<template>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else-if="count > 10">Null</h1>
    <h1 v-else>Vue is...</h1>
    <h2>{{ count }}</h2>
    <button @click="ohno">Toggle</button>
    <h1 v-show="showMe">Show me</h1>
</template>

<style scoped></style>
