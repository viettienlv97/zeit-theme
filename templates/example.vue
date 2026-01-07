<template>
  <!-- Root container with class binding and conditional rendering -->
  <div
    :class="['container', { active: isActive, disabled: isDisabled }]"
    :style="{ backgroundColor: bgColor, padding: spacing + 'px' }"
    @click="handleClick"
    @mouseenter="handleHover"
  >
    <!-- Conditional rendering with v-if, v-else-if, v-else -->
    <h1
      v-if="showTitle"
      class="title"
    >
      {{ title }}
    </h1>
    <h2 v-else-if="showSubtitle">{{ subtitle }}</h2>
    <p v-else>No title available</p>

    <!-- V-show for toggling visibility -->
    <div
      v-show="isVisible"
      class="content"
    >
      <!-- Text interpolation and computed properties -->
      <p>User: {{ userName }} - {{ fullName }}</p>
      <p>Count: {{ count }} - Double: {{ doubleCount }}</p>

      <!-- Props binding with shorthand -->
      <button
        :disabled="isDisabled"
        :aria-label="buttonLabel"
        @click.stop="increment"
        @keyup.enter="submit"
      >
        {{ buttonText }}
      </button>
    </div>

    <!-- List rendering with v-for -->
    <ul v-if="items.length > 0">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ selected: item.id === selectedId }"
        @click="selectItem(item)"
      >
        {{ index + 1 }}. {{ item.name }} - {{ item.price }}
      </li>
    </ul>

    <!-- Two-way binding with v-model -->
    <div class="form-section">
      <input
        v-model="inputValue"
        type="text"
        placeholder="Enter text"
        @input="handleInput"
      />
      <input
        v-model.number="numberValue"
        type="number"
      />
      <input
        v-model.trim="trimmedValue"
        type="text"
      />
      <textarea
        v-model="textareaValue"
        rows="3"
      ></textarea>

      <select v-model="selectedOption">
        <option
          disabled
          value=""
        >
          Please select
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <div class="checkbox-group">
        <input
          v-model="checked"
          type="checkbox"
          id="checkbox"
        />
        <label for="checkbox">{{ checked }}</label>
      </div>

      <div class="radio-group">
        <input
          v-model="picked"
          type="radio"
          id="one"
          value="One"
        />
        <label for="one">One</label>
        <input
          v-model="picked"
          type="radio"
          id="two"
          value="Two"
        />
        <label for="two">Two</label>
      </div>
    </div>

    <!-- Slot for content projection -->
    <div class="slot-container">
      <slot name="header">Default Header</slot>
      <slot>Default Content</slot>
      <slot
        name="footer"
        :data="slotData"
        >Default Footer</slot
      >
    </div>

    <!-- Dynamic component -->
    <component
      :is="currentComponent"
      :data="componentData"
      @custom-event="handleCustomEvent"
    />

    <!-- Custom directives -->
    <div
      v-custom-directive="directiveValue"
      v-focus
    ></div>

    <!-- Teleport for portal rendering -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="modal"
      >
        <p>Modal Content</p>
        <button @click="closeModal">Close</button>
      </div>
    </Teleport>

    <!-- Transition for animations -->
    <Transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="show"
        key="content"
      >
        Animated Content
      </div>
    </Transition>

    <!-- TransitionGroup for list animations -->
    <TransitionGroup
      name="list"
      tag="ul"
    >
      <li
        v-for="item in animatedItems"
        :key="item.id"
      >
        {{ item.text }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
  provide,
  inject,
  nextTick,
  defineProps,
  defineEmits,
  defineExpose,
  useSlots,
  useAttrs,
  type Ref,
  type PropType
} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex' // or pinia
import type { Item, Option } from '@/types'

// Define props with TypeScript
interface Props {
  title?: string
  subtitle?: string
  initialCount?: number
  items?: Item[]
  required: string
  callback?: (value: string) => void
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title',
  subtitle: 'Default Subtitle',
  initialCount: 0,
  items: () => []
})

// Define emits
const emit = defineEmits<{
  update: [value: string]
  delete: [id: number]
  customEvent: [data: { name: string; value: number }]
}>()

// Composables
const router = useRouter()
const route = useRoute()
const store = useStore()
const slots = useSlots()
const attrs = useAttrs()

// Reactive state with ref
const count = ref<number>(props.initialCount)
const isActive = ref<boolean>(false)
const isDisabled = ref<boolean>(false)
const isVisible = ref<boolean>(true)
const showTitle = ref<boolean>(true)
const showSubtitle = ref<boolean>(false)
const userName = ref<string>('John Doe')
const inputValue = ref<string>('')
const numberValue = ref<number>(0)
const trimmedValue = ref<string>('')
const textareaValue = ref<string>('')
const selectedOption = ref<string>('')
const checked = ref<boolean>(false)
const picked = ref<string>('')
const bgColor = ref<string>('#ffffff')
const spacing = ref<number>(16)
const showModal = ref<boolean>(false)
const show = ref<boolean>(true)
const currentComponent = ref<string>('ComponentA')
const directiveValue = ref<string>('custom')
const selectedId = ref<number | null>(null)

// Reactive state with reactive
const state = reactive({
  user: {
    name: 'Jane',
    age: 25,
    email: 'jane@example.com'
  },
  settings: {
    theme: 'dark',
    language: 'en'
  }
})

// Arrays and objects
const options = ref<Option[]>([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
])

const animatedItems = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' }
])

const componentData = ref({ value: 'test' })
const slotData = ref({ message: 'Slot data' })
const buttonLabel = ref('Click me')

// Computed properties
const doubleCount = computed(() => count.value * 2)
const fullName = computed(() => `${userName.value} (${state.user.email})`)
const buttonText = computed(() => (isDisabled.value ? 'Disabled' : 'Click Me'))

// Computed with getter and setter
const computedValue = computed({
  get: () => count.value * 2,
  set: (val) => {
    count.value = val / 2
  }
})

// Watchers
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
})

watch(
  [isActive, isDisabled],
  ([newActive, newDisabled], [oldActive, oldDisabled]) => {
    console.log('Multiple values changed')
  }
)

watch(
  () => state.user.name,
  (newName) => {
    console.log(`User name changed to ${newName}`)
  },
  { deep: true, immediate: true }
)

watchEffect(() => {
  console.log(`Count is: ${count.value}`)
})

// Methods
const increment = (): void => {
  count.value++
  emit('update', count.value.toString())
}

const handleClick = (event: MouseEvent): void => {
  console.log('Clicked', event)
  isActive.value = !isActive.value
}

const handleHover = (): void => {
  console.log('Hovered')
}

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement
  console.log('Input value:', target.value)
}

const selectItem = (item: Item): void => {
  selectedId.value = item.id
  emit('customEvent', { name: item.name, value: item.price })
}

const submit = (): void => {
  console.log('Submitted')
}

const closeModal = (): void => {
  showModal.value = false
}

const handleCustomEvent = (data: any): void => {
  console.log('Custom event received:', data)
}

// Async method
const fetchData = async (): Promise<void> => {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Lifecycle hooks
onBeforeMount(() => {
  console.log('Before mount')
})

onMounted(async () => {
  console.log('Component mounted')
  await fetchData()
  await nextTick()
  console.log('DOM updated')
})

onBeforeUpdate(() => {
  console.log('Before update')
})

onUpdated(() => {
  console.log('Component updated')
})

onBeforeUnmount(() => {
  console.log('Before unmount')
})

onUnmounted(() => {
  console.log('Component unmounted')
})

// Provide/Inject
provide('globalData', { theme: 'dark', version: '1.0.0' })
const injectedValue = inject<string>('injectedKey', 'default value')

// Expose public methods for parent access
defineExpose({
  increment,
  fetchData,
  count
})

// Custom composable example
function useCounter(initialValue: number = 0) {
  const count = ref(initialValue)
  const increment = () => count.value++
  const decrement = () => count.value--
  return { count, increment, decrement }
}

const { count: customCount, increment: customIncrement } = useCounter(10)
</script>

<style lang="scss" scoped>
// Variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$danger-color: #e74c3c;
$border-radius: 8px;
$spacing: 16px;
$transition-duration: 0.3s;

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-style($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  transition: all $transition-duration ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

// Container styles
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: $spacing;

  &.active {
    border: 2px solid $primary-color;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

// Title styles
.title {
  font-size: 2rem;
  color: $primary-color;
  margin-bottom: $spacing;
  font-weight: bold;
}

// Content styles
.content {
  background-color: #f5f5f5;
  padding: $spacing;
  border-radius: $border-radius;

  p {
    margin: 8px 0;
    line-height: 1.6;
  }

  button {
    @include button-style($primary-color);

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
}

// List styles
ul {
  list-style: none;
  padding: 0;

  li {
    padding: 12px;
    margin: 8px 0;
    background-color: white;
    border-radius: $border-radius;
    cursor: pointer;
    transition: all $transition-duration ease;

    &:hover {
      background-color: #e8f4f8;
      transform: translateX(5px);
    }

    &.selected {
      background-color: $primary-color;
      color: white;
    }
  }
}

// Form styles
.form-section {
  margin: $spacing 0;

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: $border-radius;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
    }
  }

  .checkbox-group,
  .radio-group {
    margin: 12px 0;

    input[type='checkbox'],
    input[type='radio'] {
      width: auto;
      margin-right: 8px;
    }

    label {
      cursor: pointer;
      user-select: none;
    }
  }
}

// Slot container
.slot-container {
  border: 2px dashed #ddd;
  padding: $spacing;
  margin: $spacing 0;
  border-radius: $border-radius;
}

// Modal styles
.modal {
  @include flex-center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2 * $spacing;
  border-radius: $border-radius;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  button {
    @include button-style($danger-color);
  }
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-duration ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// List transition animations
.list-enter-active,
.list-leave-active {
  transition: all $transition-duration ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform $transition-duration ease;
}

// Responsive design
@media (max-width: 768px) {
  .container {
    padding: $spacing / 2;
  }

  .title {
    font-size: 1.5rem;
  }

  ul li {
    padding: 8px;
  }
}

// Deep selector for child components
:deep(.child-component) {
  background-color: #f0f0f0;
}

// Slotted selector
:slotted(.slot-content) {
  color: $primary-color;
}

// Global selector
:global(.global-class) {
  font-weight: bold;
}
</style>
