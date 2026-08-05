import { useState } from "react";

// Components
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import DashboardStats from "./components/DashboardStats";
import TaskCard from "./components/TaskCard";
import ManagerDashboard from "./components/ManagerDashboard";

// Data
import tasks from "./data/tasks";
import managerTasks from "./data/managerTasks";


function App() {
      // Stores the employee's daily tasks
    const [taskList, setTaskList] = useState(tasks);

      // Stores all team tasks for the manager dashboard
    const [managerTaskList, setManagerTaskList] =
    useState(managerTasks);

      // Controls which dashboard is currently displayed
    const [role, setRole] = useState("employee");                                             


  // Count only completed tasks
  const completedTasks = taskList.filter(
    (task) => task.completed
  ).length;

  // Total number of employee tasks
  const totalTasks = taskList.length;

  // Total number of pending tasks
const pendingTasks = totalTasks - completedTasks;

  // Calculate completion percentage
  const progressPercentage = Math.round(
    (completedTasks / totalTasks) * 100
  );

 
  // Toggle the completed status of an employee task
  function toggleTask(id) {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTaskList(updatedTasks);
  }

  // Toggle the "At Risk" status for a manager task
  function toggleRisk(id) {
    const updatedTasks = managerTaskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          risk: !task.risk,
        };
      }

      return task;
    });

    setManagerTaskList(updatedTasks);
  }

  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation / greeting */}
      <Header
        name="Good Afternoon, Tomi👋"
        role="Frontend Developer"
      />

      <main className="max-w-4xl mx-auto p-6">

        {/* Switch between Employee and Manager dashboard */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() =>
              setRole(
                role === "employee"
                  ? "manager"
                  : "employee"
              )
            }
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Switch to{" "}
            {role === "employee"
              ? "Manager"
              : "Employee"}{" "}
            View
          </button>
        </div>

        {role === "employee" ? (
          <>
            {/* Weekly progress summary */}
           <DashboardStats
  totalTasks={totalTasks}
  completedTasks={completedTasks}
  pendingTasks={pendingTasks}
  progressPercentage={progressPercentage}
/>
            <ProgressBar
              completedTasks={completedTasks}
              totalTasks={totalTasks}
              progressPercentage={progressPercentage}
            />

            {/* Employee task list */}
            <h2 className="text-2xl font-bold mb-4">
              Today's Tasks
            </h2>

            {taskList.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
              />
            ))}
          </>
        ) : (
          /* Manager dashboard */
          <ManagerDashboard
            tasks={managerTaskList}
            onToggleRisk={toggleRisk}
          />
        )}
      </main>
    </div>
  );
}

export default App;