<script setup>
// <script setup> implicitly expose setup() in SFCs.
// More info in https://vuejs.org/guide/essentials/reactivity-fundamentals.html
// Declaring Reactive state
import { reactive } from 'vue'
import { nextTick } from 'vue'
import { ref } from 'vue'

const state = reactive({ count: 0 })

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

const raw = {}
const proxy = reactive(raw)

const proxy2 = reactive({})
const raw2 = {}
proxy2.nested = raw2

const cc = ref(0)

const cd = ref(0)
// Unwrap automatically (and st become the proxy of cd, modifying st changes cd)
const st = reactive({
  cd
})

const books = reactive([ref('Vue 3 Guide')])
const map = reactive(new Map([['count', ref(0)]]))

function increment() {
  state.count++
}

function incrementNextTick() {
  state.count++
  nextTick(() => {
    // access updated DOM
    if (state.count > 2) {
      state.hi = 'Hello'
    }
  })
}

function mutateDeeply() {
  // these will work as expected.
  obj.nested.count++
  obj.arr.push('baz')
}

function ccValue() {
  return 'cc: ' + JSON.stringify(cc)
}

function ccDotValue() {
  return 'cc.value: ' + cc.value
}
</script>

<template>
  <h2>Reactivity Fundamental</h2>
  <br />
  <!-- Declaring Reactive State -->
  <button @click="increment">
    {{ state.count }}
  </button>
  <br />
  <!-- DOM Update Timing -->
  <button @click="incrementNextTick">
    {{ state.count }}
    {{ state.hi ? state.hi : '' }}
  </button>
  <br />
  <!-- Deep Reactivity -->
  <button @click="mutateDeeply">
    {{ obj.nested.count }}
  </button>
  {{ obj.arr }}
  <br />
  <!-- Reactive Proxy vs. Original -->
  {{ 'proxy === raw? ' + (proxy === raw).toString() }}
  <br />
  {{ 'reactive(raw) === proxy? ' + (reactive(raw) === proxy).toString() }}
  <br />
  {{ 'reactive(proxy) === proxy? ' + (reactive(proxy) === proxy).toString() }}
  <br />
  {{ 'reactive(raw) === reactive(raw)? ' + (reactive(raw) === reactive(raw)).toString() }}
  <br />
  {{ '-- That means there is only one proxy for a raw => one-to-one relationship' }}
  {{ 'proxy2.nested === raw2? ' + (proxy2.nested === raw2).toString() }}
  <br />
  {{ '-- That means nested objects in proxy are also proxy ==> becoz of deep reactivity' }}
  {{ '-- When accessing a proxy, you only get a deep copy version of object' }}
  <br />
  <!-- Reactive Variables with ref() -->
  {{ ccValue() }}
  <br />
  {{ ccDotValue() }}
  <br />
  <!-- Ref Unwrapping in Templates (but the object must be in top level)-->
  {{ 'Count Value -> ' + cc }}
  <br />
  {{ 'Count Value -> ' + cc.value }}
  <br />
  <!-- Ref Unwrapping in Reactive Objects ==> cc is connected to proxy st  (term: connected/ diconnected)-->
  {{ 'Count Value -> ' + st.cd++ }}
  <br />
  {{ 'Count Value -> ' + cd }}
  <br />
  <!-- Ref Unwrapping in Arrays and Collections (No unwrapping for array/collections) -->
  {{ books[0].value }}
  <br />
  {{ map.get('count').value }}
  <br />
</template>

<style scoped></style>
