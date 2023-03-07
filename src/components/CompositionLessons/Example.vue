<script setup>
import { ref, reactive, computed } from 'vue';
const exp = ref(true);
const input = defineProps(['input']);
</script>

<template>
    <p v-if="exp" class="a b">
        <b>Example {{ input }}</b>
    </p>
</template>

<style scoped>
.child {
    color: blue;
}
</style>
