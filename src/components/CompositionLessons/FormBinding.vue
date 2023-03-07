<script>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
export default {
    setup() {
        const text = ref('');
        return { text }
    }
}
</script>

<template>
    <h2>Form Binding</h2>
    <br />
    <form>
        <input v-model="text">
    </form>
    output {{ text }}
</template>

<style scoped></style>
