import { useState } from 'react'
import { CheckCircle, Circle, Plus, Trash2 } from 'lucide-react'

interface Task {
  id: number
  text: string
  completed: boolean
}

function CurrentTasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Dokončit webovou stránku', completed: false },
    { id: 2, text: 'Napsat dokumentaci', completed: true },
    { id: 3, text: 'Otestovat funkčnost', completed: false },
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Aktuální úkoly</h1>

      <form onSubmit={addTask} className="bg-white p-4 rounded-lg shadow-md mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Nový úkol..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={24} />
        </button>
      </form>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white p-4 rounded-lg shadow flex items-center gap-3 ${
              task.completed ? 'opacity-60' : ''
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className="text-blue-600 hover:text-blue-800"
            >
              {task.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
            </button>
            <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentTasksPage
