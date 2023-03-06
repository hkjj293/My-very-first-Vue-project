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
    <h2>Conditional Rendering</h2>
    <br />
    <h3 v-if="awesome">Vue is awesome!</h3>
    <h3 v-else-if="count > 10">Null</h3>
    <h3 v-else>Vue is...</h3>
    <h4>{{ count }}</h4>
    <button @click="ohno">Toggle</button>
    <h3 v-show="showMe">Show me</h3>
</template>

<style scoped></style>
