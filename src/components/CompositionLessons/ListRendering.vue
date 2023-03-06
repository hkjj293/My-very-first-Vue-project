<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const parentMessage = ref('Parent')
</script>

<template>
    <h2>List Rendering</h2>
    <br />
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <!-- With index -->
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
</template>

<style scoped></style>
