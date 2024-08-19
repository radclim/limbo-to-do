<template>
  <draggable
    class="mb-20 divide-x-0 divide-y-1 divide-primary divide-solid"
    item-key="id"
    tag="ul"
    :list="toDoList"
    name= "!drag ? 'flip-list' : null"
    v-bind="dragOptions"
    @start="drag = true"
    @end="handleDragEnd"
    v-auto-animate
  >
    <template #item="{ element }">
      <li :key="element.id" class="text-primary font-sans grid grid-cols-[1fr_6fr_1fr_1fr_1fr] items-center p-6 w-75vw hover:cursor-grab md: w-60vw" :class="{ 'opacity-44': element.done }">
        <template v-if="element.isEditing">
          <div class="dropdownContainer">
          <select :value="element.editTag" @change="$emit('editTag', element.id, $event.target.value)" class="border-1 border-primary border-solid bg-secondary text-primary p-4">
            <option value="" disabled>Choose category...</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
          </select>
        </div>
          <input v-model="element.editText" class="p-15px ml-2 border-1 border-solid border-primary text-primary bg-secondary placeholder-primary-shadow placeholder-italic"/>
          <div></div>
          <button  class="max-w-fit text-primary bg-secondary border-none transition duration-200 ease-in-out hover:cursor-pointer hover:scale-103" @click="$emit('save', element.id)">
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
          <button class="max-w-fit text-primary bg-secondary border-none transition duration-200 ease-in-out hover:cursor-pointer hover:scale-103" @click="$emit('cancel', element.id)">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </template>
        <template v-else>
          <div class="text-center">{{ getEmoji(element.tag) }}</div>
          <div>{{ element.text }}</div>
          <button class="max-w-fit text-primary bg-secondary border-none transition duration-200 ease-in-out hover:cursor-pointer hover:scale-103" @click="$emit('edit', element.id, element.tag)">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="max-w-fit text-primary bg-secondary border-none transition duration-200 ease-in-out hover:cursor-pointer hover:scale-103" @click="$emit('toggle', element.id)">
            <i v-if="element.done" class="fa-solid fa-rotate-left"></i>
            <i v-else class="fa-solid fa-check"></i>
          </button>
          <button class="max-w-fit text-primary bg-secondary border-none transition duration-200 ease-in-out hover:cursor-pointer hover:scale-103" @click="$emit('remove', element.id)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </template>
      </li>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable';

const props = defineProps({
  toDoList: Array,
});

const emit = defineEmits(['updateList','save','edit','cancel','toggle','remove','editTag']);

function handleDragEnd() {
  drag.value = false;
  emit('updateList', props.toDoList);
}

const drag = ref(false);

function getEmoji(tag) {
  const emojis = {
    work: '💼',
    school: '📚',
    personal: '🏠'
  };
  return emojis[tag] || '';
}

const dragOptions = {
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost'
};
</script>


