<script setup>
import { ref, onMounted } from 'vue'
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
  <hr />
  <TemplateRef />
  <hr />
  <ComponentBasics />
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
