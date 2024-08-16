<template>
  <draggable
    class="list-group"
    tag="ul"
    item-key="id"
    :list="toDoList"
    name= "!drag ? 'flip-list' : null"
    v-bind="dragOptions"
    @start="drag = true"
    @end="handleDragEnd"
  >
    <template #item="{ element }">
      <li :key="element.id" class="listItem" :class="{ done: element.done }">
        <template v-if="element.isEditing">
          <div class="dropdownContainer">
          <select :value="element.editTag" @change="$emit('editTag', element.id, $event.target.value)">
            <option value="" disabled>Choose category...</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
          </select>
        </div>
          <input v-model="element.editText"/>
          <div></div>
          <button class="button-confirm" @click="$emit('save', element.id)">
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
          <button class="button-cancel" @click="$emit('cancel', element.id)">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </template>
        <template v-else>
          <div class="emojiContainer">{{ getEmoji(element.tag) }}</div>
          <div>{{ element.text }}</div>
          <button class="button-edit util" @click="$emit('edit', element.id, element.tag)">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="button-confirm util" @click="$emit('toggle', element.id)">
            <i v-if="element.done" class="fa-solid fa-rotate-left"></i>
            <i v-else class="fa-solid fa-check"></i>
          </button>
          <button class="button-cancel util" @click="$emit('remove', element.id)">
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

