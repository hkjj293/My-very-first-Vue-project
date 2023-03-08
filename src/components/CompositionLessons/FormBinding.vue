<script>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import { watch } from 'vue'
export default {
    setup() {
        const text = ref('');
        const selected = ref([]);
        const dyn = ref('');
        return {
            text,
            selected,
            dyn,
        }
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
    <input type="checkbox" id="a" value="a" v-model="selected">
    <input type="checkbox" id="b" value="b" v-model="selected">
    <input type="checkbox" id="c" value="c" v-model="selected">
    {{ selected }}
    <!-- Value binding -->
    <input type="checkbox" id="dynamicBinding" true-value="true" false-value="false" v-model="dyn">
    <label for="dynamicBinding">{{ dyn }}</label>
</template>

<style scoped></style>
