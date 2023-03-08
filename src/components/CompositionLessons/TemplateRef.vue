<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import { onMounted } from 'vue';
import Example from './Example.vue';

const input = ref(null);
const buttons = ref([]);
const a = ref(null);
const b = ref(null);
defineExpose({
    a,
    b
});
const c = ref(null);
onMounted(() => {
    //input.value will be the refernce of the DOM the ref pointing from
    input.value.focus();
    if (buttons.value && buttons.value.length > 3) {
        buttons.value[3].focus();
    }
    console.log(a.value);
    console.log(c.value.focus());
})

</script>

<template>
    <h2>Template Ref</h2>
    <br />
    Used to apply DOM manipulations for components
    <br />
    <!-- basic Ref -->
    <input name="one" />
    <input ref="input" />
    <!-- Ref on v-for -->
    <button v-for="n in 10" ref="buttons">{{ n }}</button>
    <!-- Ref on Function == passing the element as param -->
    <input :ref="(el) => { c = el; }">
    {{ c }}
    <!-- Ref on Components -->
    <div>
        <Example ref="a" input="y" />
        <Example ref="b" input="p" />
        {{ a }}{{ b }}
    </div>
    <slot />
</template>

<style scoped></style>
