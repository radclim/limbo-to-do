<template>
  <div class="bg-secondary">
  <div id="listContainer" class="bg-secondary md:ma-8 flex flex-col items-center border-1 border-solid border-primary ma-4">
    <div class="mt-4 flex flex-row items-center justify-between 2xl:w-93vw xl:w-90vw lg:w-85vw sm:w-80vw xs:w-70vw">
      <svg width="84" height="26" viewBox="0 0 84 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo logo-visible" data-v-dd9e2f5e="" style="transform: translate(0px, 0px);"><path d="M4.88001 25V1.89995H0.950012V25H4.88001Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <path d="M10.7537 5.88995C11.6337 5.88995 12.2837 5.68995 12.7037 5.28995C13.1437 4.86995 13.3637 4.19995 13.3637 3.27995C13.3637 2.31995 13.1437 1.64995 12.7037 1.26995C12.2637 0.889952 11.6137 0.699951 10.7537 0.699951C9.89368 0.699951 9.24368 0.889952 8.80368 1.26995C8.36368 1.64995 8.14368 2.31995 8.14368 3.27995C8.14368 4.25995 8.34368 4.93995 8.74368 5.31995C9.14368 5.69995 9.81368 5.88995 10.7537 5.88995ZM12.7037 25V7.74995H8.71368V25H12.7037Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <path d="M20.4352 15.76C20.4352 14.28 20.7452 13.08 21.3652 12.16C21.9852 11.22 22.9352 10.75 24.2152 10.75C25.1152 10.75 25.8152 10.95 26.3152 11.35C26.8352 11.73 27.1952 12.25 27.3952 12.91C27.5152 13.25 27.5952 13.61 27.6352 13.99C27.6952 14.35 27.7252 14.73 27.7252 15.13V25H31.6252V15.22C31.6252 13.92 31.9052 12.85 32.4652 12.01C33.0252 11.17 33.9452 10.75 35.2252 10.75C36.5452 10.75 37.4752 11.17 38.0152 12.01C38.5552 12.83 38.8252 13.92 38.8252 15.28V25H42.7552V14.2C42.7552 12.06 42.2352 10.38 41.1952 9.15995C40.1752 7.93995 38.6552 7.32995 36.6352 7.32995C35.2352 7.32995 34.0652 7.65995 33.1252 8.31995C32.1852 8.95995 31.4952 9.82995 31.0552 10.93C30.6752 9.80995 30.0452 8.92995 29.1652 8.28995C28.2852 7.64995 27.1052 7.32995 25.6252 7.32995C24.2652 7.32995 23.1252 7.65995 22.2052 8.31995C21.3052 8.95995 20.6252 9.81995 20.1652 10.9L19.8052 7.74995H16.5052V25H20.4352V15.76Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <path d="M55.7244 25.45C57.9844 25.45 59.7844 24.67 61.1244 23.11C62.4644 21.53 63.1344 19.32 63.1344 16.48V16.03C63.1344 14.11 62.8244 12.51 62.2044 11.23C61.5844 9.94995 60.7244 8.97995 59.6244 8.31995C59.0644 7.99995 58.4744 7.75995 57.8544 7.59995C57.2344 7.41995 56.5644 7.32995 55.8444 7.32995C54.4444 7.32995 53.2444 7.66995 52.2444 8.34995C51.2444 9.00995 50.4944 9.90995 49.9944 11.05V1.89995H46.1844V25H49.5144L49.8744 21.52C50.3344 22.7 51.0544 23.65 52.0344 24.37C53.0144 25.09 54.2444 25.45 55.7244 25.45ZM54.5244 21.97C53.1244 21.97 52.0044 21.47 51.1644 20.47C50.3244 19.47 49.9044 18.08 49.9044 16.3V16C49.9044 14.42 50.3344 13.13 51.1944 12.13C52.0544 11.13 53.1944 10.63 54.6144 10.63C55.9544 10.63 57.0444 11.11 57.8844 12.07C58.7244 13.03 59.1444 14.37 59.1444 16.09V16.45C59.1444 18.27 58.7444 19.65 57.9444 20.59C57.1444 21.51 56.0044 21.97 54.5244 21.97Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <path d="M74.4057 25.45C76.1457 25.45 77.6657 25.11 78.9657 24.43C80.2657 23.75 81.2857 22.76 82.0257 21.46C82.3857 20.82 82.6557 20.11 82.8357 19.33C83.0157 18.53 83.1057 17.66 83.1057 16.72V16.27C83.1057 14.37 82.7357 12.76 81.9957 11.44C81.2557 10.1 80.2257 9.07995 78.9057 8.37995C78.2657 8.01995 77.5657 7.75995 76.8057 7.59995C76.0657 7.41995 75.2657 7.32995 74.4057 7.32995C72.7257 7.32995 71.2257 7.67995 69.9057 8.37995C68.6057 9.05995 67.5857 10.06 66.8457 11.38C66.4657 12.04 66.1757 12.78 65.9757 13.6C65.7957 14.42 65.7057 15.31 65.7057 16.27V16.72C65.7057 19.52 66.4557 21.68 67.9557 23.2C69.4757 24.7 71.6257 25.45 74.4057 25.45ZM74.4057 22C72.9457 22 71.7957 21.54 70.9557 20.62C70.1357 19.68 69.7257 18.36 69.7257 16.66V16.27C69.7257 14.45 70.1557 13.07 71.0157 12.13C71.8957 11.17 73.0357 10.69 74.4357 10.69C75.8557 10.69 76.9857 11.18 77.8257 12.16C78.6857 13.14 79.1157 14.51 79.1157 16.27V16.66C79.1157 18.36 78.6957 19.68 77.8557 20.62C77.0357 21.54 75.8857 22 74.4057 22Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path></svg>
      <svg width="39" height="49" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="staircase" data-v-dd9e2f5e="" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.9134C0 7.93057 8.89981 0 19.5 0C30.1002 0 39 7.93057 39 17.9134V49H0V17.9134ZM19.5 3C10.2907 3 3 9.84146 3 17.9134V46H36V17.9134C36 9.84146 28.7093 3 19.5 3Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <rect x="22" y="19" width="0" height="11" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></rect> <rect x="14" y="28" width="0" height="11" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></rect> <rect x="3" y="37" width="0" height="11" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 37H39V49H0V37ZM3 40V46H36V40H3Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 28H39V40H11V28ZM14 31V37H36V31H14Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19 19H39V31H19V19ZM22 22V28H36V22H22Z" fill="#F2CECF" style="fill:#f2cecf" data-v-dd9e2f5e=""></path></svg>
    </div>
    <h1  class="text-primary font-sans">To Do List</h1>
    <p class="text-primary font-sans">Keep track of your to-do-s with this handy list.</p>
    <div>
      <form class="flex items-center md:gap-15px mb-4 xs:gap-5px">
        <input type="text" v-model="newToDo" placeholder="Add a new to do..." @keypress.enter="addToDo" class="p-15px border-1 border-solid border-primary text-primary bg-secondary placeholder-primary-shadow placeholder-italic"/>
        <div class="dropdownContainer">
          <select v-model="selectedTag" class="border-1 border-primary border-solid bg-secondary text-primary p-4">
            <option value="" disabled>Choose category...</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <button class="text-primary bg-secondary min-w-1 p-4 m-1 border-1 border-solid border-primary uppercase transition duration-200 ease-in-out hover:cursor-pointer hover:scale-103" @click="addToDo"><i class="fa-solid fa-plus"></i></button>
      </form>
    </div>
    <ToDoList
      :toDoList="toDoList"
      @remove="removeToDo"
      @edit="editToDo"
      @save="saveToDo"
      @cancel="cancelEdit"
      @toggle="toggleDone"
      @updateList="updateToDoList"
      @editTag="editTagChange"
    />
  </div>
</div>
</template>

<script setup>

const newToDo = ref('');
const toDoList = ref([]);
const selectedTag = ref('');

const addToDo = (e) => {
  e.preventDefault();
  if (newToDo.value) {
    const newToDoItem = {
      id: Date.now(),
      text: newToDo.value,
      done: false,
      tag: selectedTag.value
    };
    toDoList.value.push(newToDoItem);
    saveToLocalStorage();
    newToDo.value = '';
    selectedTag.value = '';
  }
};
const editTagChange = (id, tag) => {
  const todo = toDoList.value.find(todo => todo.id === id);
  if (todo) {
    todo.editTag = tag;
  }
}

const fetchToDoList = () => {
  const storedTodos = localStorage.getItem('todos');
  toDoList.value = storedTodos ? JSON.parse(storedTodos) : [];
  console.log(toDoList.value);
};

const updateToDoList = (updatedList) => {
  toDoList.value = updatedList;
  saveToLocalStorage();
};

const saveToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(toDoList.value));
};

const removeToDo = (id) => {
  toDoList.value = toDoList.value.filter(todo => todo.id !== id);
  saveToLocalStorage();
};

const editToDo = (id, tag) => {
  const todo = toDoList.value.find(todo => todo.id === id);
  if (todo) {
    todo.editTag = tag;
    todo.editText = todo.text;
    todo.isEditing = true;
  };
};

const saveToDo = (id) => {
  const todo = toDoList.value.find(todo => todo.id === id);
  if (todo) {
    todo.tag = todo.editTag;
    todo.text = todo.editText;
    todo.isEditing = false;
    saveToLocalStorage();
  }
};

const cancelEdit = (id) => {
  const todo = toDoList.value.find(todo => todo.id === id);
  if (todo) {
    todo.isEditing = false;
    todo.editText = todo.text;
  }
};

const toggleDone = (id) => {
  const todo = toDoList.value.find(todo => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
    saveToLocalStorage();
  }
};

onMounted(fetchToDoList);
</script>
