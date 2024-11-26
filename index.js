import { Todo } from "./components/Todo.js";

import { reload } from "./utils/reload.js";

const container = document.querySelector('.container')
const form = document.forms.namedItem('add')

const res = await fetch("http://localhost:2020/todos")
const todos = await res.json()

form.onsubmit = (e) => submit(e, container)

reload(todos, Todo, container)
