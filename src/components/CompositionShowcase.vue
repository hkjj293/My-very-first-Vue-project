<script setup>
import { ref, onMounted } from 'vue'
// import TemplateSyntax from './CompositionLessons/TemplateSyntax.vue'
// import ReactivityFundamentals from './CompositionLessons/ReactivityFundamentals.vue'
// import ComputedProperties from './CompositionLessons/ComputedProperties.vue'
// import ClassStyleBindings from './CompositionLessons/ClassStyleBindings.vue'
// import ConditionalRenderingVue from './CompositionLessons/ConditionalRendering.vue'
// import ListRendering from './CompositionLessons/ListRendering.vue'
// import EventHandling from './CompositionLessons/EventHandling.vue'
// import FormBinding from './CompositionLessons/FormBinding.vue'
// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
  <hr />
  <TemplateSyntax />
  <hr />
  <ReactivityFundamentals />
  <hr />
  <ComputedProperties />
  <hr />
  <ClassStyleBindings />
  <hr />
  <ConditionalRenderingVue />
  <hr />
  <ListRendering />
  <hr />
  <EventHandling />
  <hr />
  <FormBinding />
  <hr />
  <Watchers />
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
