<script setup>
import { ref, reactive, computed } from 'vue';
const exp = ref(true);
const input = defineProps(['input']);
defineEmits(['enlarge-text'])
</script>

<template>
    <p v-if="exp" class="a b">
        <b>Example {{ input }}</b>
        <button @click="$emit('say-hi')">Say Hi!</button>
        <slot name="start" />
        <button @click="$emit('say-hi')">Say Hi again!</button>
        <slot name="end" />
    </p>
</template>

<style scoped>
.child {
    color: blue;
}
</style>
