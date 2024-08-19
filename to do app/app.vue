<template>
  <NuxtPage />
</template>
<script></script>
<!-- <template>
  <div>
    <h1>To Do List</h1>
    <p>Keep track of your to do-s with this handy list.</p>
    <div>
      <button @click="sortToDoList">Sort Alphabetically</button>
      <input type="text" v-model="newToDo" placeholder="Add a new to do" @keypress.enter="addToDo"/>
      <button @click="addToDo">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="(todo) in toDoList" :key="toDoList[todo].key">
          <template v-if="todo.isEditing">
            <input v-model="todo.editText" />
            <button @click="saveToDo(toDoList[todo].key)">Save</button>
            <button @click="cancelEdit(toDoList[todo].key)">Cancel</button>
          </template>
          <template v-else>
            {{ todo.text }}
            <button @click="editToDo(toDoList[todo].key)">Edit</button>
            <button @click="toggleDone(toDoList[todo].key)">
              {{ todo.done ? 'Undone' : 'Done' }}
            </button>
            <button @click="removeToDo(toDoList[todo].key)">Delete</button>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Define reactive state
const newToDo = ref('');
const toDoList = reactive([]);

// Add a new to-do item
const addToDo = () => {
  if (newToDo.value) {
    const toDo = {
      text: newToDo.value,
      done: false,
    };
    const key = Math.floor(10000 + Math.random() * 90000).toString();
    localStorage.setItem(key, JSON.stringify(toDo));
    fetchToDoList();
    newToDo.value = '';
  }
};

// Fetch to-do list from localStorage
const fetchToDoList = () => {
  toDoList.length = 0; // Clear current list
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const toDo = JSON.parse(localStorage.getItem(key));
    if (key) {
      toDoList.push({
        key,
        text: toDo.text,
        done: toDo.done,
        isEditing: false,
        editText: toDo.text,
      });
    }
  }
};

// Remove a to-do item
const removeToDo = (key) => {
  localStorage.removeItem(key);
  const index = toDoList.findIndex(todo => toDoList[todo].key === key);
  if (index !== -1) toDoList.splice(index, 1);
};

// Start editing a to-do item
const editToDo = (key) => {
  const todo = toDoList.find(todo => toDoList[todo].key === key);
  if (todo) {
    todo.isEditing = true;
  }
};

// Save edited to-do item
const saveToDo = (key) => {
  const todo = toDoList.find(todo => toDoList[todo].key === key);
  if (todo) {
    const updatedTodo = {
      text: todo.editText,
      done: todo.done,
    };
    localStorage.setItem(key, JSON.stringify(updatedTodo));
    fetchToDoList();
  }
};

// Cancel editing of a to-do item
const cancelEdit = (key) => {
  const todo = toDoList.find(todo => toDoList[todo].key === key);
  if (todo) {
    todo.isEditing = false;
    todo.editText = todo.text;
  }
};

// Toggle done status of a to-do item
const toggleDone = (key) => {
  const todo = toDoList.find(todo => toDoList[todo].key === key);
  if (todo) {
    todo.done = !todo.done;
    const updatedTodo = {
      text: todo.text,
      done: todo.done,
    };
    localStorage.setItem(key, JSON.stringify(updatedTodo));
  }
};

// Sort to-do list alphabetically
const sortToDoList = () => {
  toDoList.sort((a, b) => a.text.localeCompare(b.text));
};

// Fetch to-do list on component mount
onMounted(fetchToDoList);
</script> -->
