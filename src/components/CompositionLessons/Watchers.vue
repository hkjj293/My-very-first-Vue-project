<script>
import { reactive, watchEffect } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import { watch } from 'vue'
export default {
    setup() {
        const text = ref('');
        const dyn = ref('');
        const s = ref('');
        const w = ref('');
        const AoMS = ref('');
        const react = reactive({ haha: true })
        const reactVal = ref(false);
        const eager = ref('Haha');
        // watch (src, (newVal,oldVal,cleanUpFunc))
        watch(dyn, (newD, oldD) => {
            text.value = text.value + newD;
        });
        //Single source
        watch(text, (newW) => {
            s.value = s.value + newW;
        });
        // getter
        watch(() => text.value + dyn.value, (result) => {
            w.value = result;
        });
        // Array of multiple sources
        watch([text, () => dyn.value], ([newT, newD]) => {
            AoMS.value = newT + newD;
        });
        // Watch elements inside reactive needs a getter instead of single source, because the proxy only return a rvalue
        // but watching reactive itself nfot only wil kork, it also create a deep watch
        watch(react, (newReact, oldReact) => {
            reactVal.value = newReact.haha;
        }, { deep: true })
        // Eager water -> simply the watcher with option immediate: true ->additional call at start 
        const stop1 = watch(eager, (newV, oldV) => {
            window.alert(newV);
        }, { immediate: true })
        watchEffect(() => {
            stop1();
            window.alert('watchEffect: ' + eager.value)
        })
        return {
            text,
            dyn,
            s,
            w,
            AoMS,
            react,
            reactVal,
            eager,
        }
    }
}
</script>

<template>
    <h2>Watchers</h2>
    <br />
    {{ text }}
    <br />
    <!-- Basic watcher -->
    <input type="checkbox" id="dynamicBinding" true-value="true" false-value="false" v-model="dyn">
    <label for="dynamicBinding">{{ dyn }}</label>
    <br />
    <!-- Different source type -->
    <!-- Single -->
    {{ s }}
    <br />
    <!-- getter -->
    {{ w }}
    <br />
    <!-- AoMS -->
    {{ AoMS }}
    <br />
    Deep watcher
    <br />
    Deep watchers require traversal of whole object it will be expensive when the nested object is large
    <br />
    <button @click="react.haha = !react.haha">Click</button>
    react: {{ react }}
    reactVal: {{ reactVal }}
    <br />
    Eager Watchers
    <br />
    <input id="eager" v-model="eager" />
    <br />
</template>

<style scoped></style>
