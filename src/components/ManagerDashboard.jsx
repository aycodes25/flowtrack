import ManagerTaskRow from "./ManagerTaskRow";
import ManagerStats from "./ManagerStats";

function ManagerDashboard({
  tasks,
  onToggleRisk,
}) {
  // ==========================
  // Dashboard Statistics
  // ==========================

  // Total number of employees
  const totalEmployees = tasks.length;

  // Number of completed tasks
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  // Number of pending tasks
  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  // Number of tasks marked as "At Risk"
  const riskTasks = tasks.filter(
    (task) => task.risk
  ).length;

  return (
    <div>
      {/* ==========================
          Dashboard Heading
      ========================== */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Team Task Overview
        </h2>

        <p className="text-gray-500 mt-2">
          Monitor your team's daily progress,
          track completed tasks, and flag
          tasks that may be at risk.
        </p>
      </div>

      {/* ==========================
          Summary Cards
      ========================== */}
      <ManagerStats
        totalEmployees={totalEmployees}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
        riskTasks={riskTasks}
      />

      {/* ==========================
          Team Task Cards
      ========================== */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <ManagerTaskRow
            key={task.id}
            task={task}
            onToggleRisk={onToggleRisk}
          />
        ))}
      </div>
    </div>
  );
}

export default ManagerDashboard;