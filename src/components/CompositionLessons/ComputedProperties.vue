<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
// Using computed for lamda function
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// Writable computed
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
  <h2>Computed Properties</h2>
  <!-- Basic Example -->
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  <br />
  <span>Not very good a bit cluttered</span>
  <br />
  <span>{{ publishedBooksMessage }}</span>
  <br />
  <span>{{
    computed(() => {
      return author.books.length
    })
  }}</span>
  <br />
  computed properties are cached based on their reactive dependencies (if the reactive dependency
  not changed, return cached value without running again)
  <br />
  {{ computed(() => Date.now()) }}
  <br />
  This will not change, because Date.Now() is don't have reactive dependency.
  <br />
  <!-- Writable Computed -->
  {{ fullName }}
  <br />
  {{ (fullName = 'Kong Hong') }}
  <br />
  {{ lastName }}
</template>

<style scoped></style>
