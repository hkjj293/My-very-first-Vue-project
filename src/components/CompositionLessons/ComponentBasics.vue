<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import Example from './Example.vue';
const hi = ref("");
</script>

<template>
    <h2>Component Basics</h2>
    <br />
    Passing Props
    <br />
    <Example input="Hello" />
    <br />
    <!-- Listen to Events && slots-->
    <br />
    <Example @say-hi="hi = 'hi'" input="Test Hi">
        <template v-slot:end>
            Yo
        </template>
        <template v-slot:start>
            HIHI
        </template>
    </Example>
    {{ hi }}
    <!-- Dynamic component -->
    <component :is="Example">
        <template v-slot:end>
            KO
        </template>
    </component>
</template>

<style scoped></style>
