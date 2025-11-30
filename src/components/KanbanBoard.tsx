import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Card, CardContent } from '@/components/ui/card';
import { sampleMenuItems } from '@/lib/sampleData';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';
import { Plus, Flag, MoreVertical, Clock } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignee: {
    name: string;
    avatar?: string;
  };
  dueDate: string;
  tags: string[];
  status: 'todo' | 'inprogress' | 'done';
}

export function KanbanBoard() {
  const { isOpen } = useSidebar();

  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design new landing page',
      description: 'Create mockups for the new product landing page',
      priority: 'high',
      assignee: { name: 'Sarah Chen' },
      dueDate: '2024-12-15',
      tags: ['Design', 'UI/UX'],
      status: 'todo',
    },
    {
      id: '2',
      title: 'Implement authentication',
      description: 'Add JWT authentication to the API',
      priority: 'high',
      assignee: { name: 'Mike Johnson' },
      dueDate: '2024-12-10',
      tags: ['Backend', 'Security'],
      status: 'todo',
    },
    {
      id: '3',
      title: 'Update documentation',
      description: 'Update API documentation with new endpoints',
      priority: 'low',
      assignee: { name: 'Emma Wilson' },
      dueDate: '2024-12-20',
      tags: ['Documentation'],
      status: 'todo',
    },
    {
      id: '4',
      title: 'Build dashboard charts',
      description: 'Implement analytics charts using Recharts',
      priority: 'medium',
      assignee: { name: 'John Doe' },
      dueDate: '2024-12-12',
      tags: ['Frontend', 'Charts'],
      status: 'inprogress',
    },
    {
      id: '5',
      title: 'Database optimization',
      description: 'Optimize slow queries and add indexes',
      priority: 'high',
      assignee: { name: 'Alex Kumar' },
      dueDate: '2024-12-08',
      tags: ['Backend', 'Performance'],
      status: 'inprogress',
    },
    {
      id: '6',
      title: 'Setup CI/CD pipeline',
      description: 'Configure GitHub Actions for automated deployment',
      priority: 'medium',
      assignee: { name: 'Lisa Anderson' },
      dueDate: '2024-12-05',
      tags: ['DevOps'],
      status: 'done',
    },
    {
      id: '7',
      title: 'Write unit tests',
      description: 'Add test coverage for user service',
      priority: 'medium',
      assignee: { name: 'Tom Brown' },
      dueDate: '2024-12-03',
      tags: ['Testing', 'Backend'],
      status: 'done',
    },
  ]);

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-slate-500' },
    { id: 'inprogress', title: 'In Progress', color: 'bg-blue-500' },
    { id: 'done', title: 'Done', color: 'bg-green-500' },
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'low':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      default:
        return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const stats = [
    { label: 'Total Tasks', value: tasks.length, color: 'text-blue-400' },
    { label: 'In Progress', value: getTasksByStatus('inprogress').length, color: 'text-yellow-400' },
    { label: 'Completed', value: getTasksByStatus('done').length, color: 'text-green-400' },
    {
      label: 'Completion Rate',
      value: `${Math.round((getTasksByStatus('done').length / tasks.length) * 100)}%`,
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar menuItems={sampleMenuItems} />

      <div className={cn("flex-1 transition-all duration-300", isOpen ? "pl-64" : "pl-20")}>
        <Header title="Project Board" subtitle="Manage your tasks and track progress" />

        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="border-slate-700 bg-slate-900/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                      <p className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Kanban Board */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {columns.map((column) => {
              const columnTasks = getTasksByStatus(column.id);
              return (
                <div key={column.id} className="flex flex-col">
                  {/* Column Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${column.color}`} />
                      <h3 className="text-lg font-semibold text-slate-200">{column.title}</h3>
                      <span className="px-2 py-1 text-xs font-semibold bg-slate-700 text-slate-300 rounded-full">
                        {columnTasks.length}
                      </span>
                    </div>
                    <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                      <Plus className="h-4 w-4 text-slate-400" />
                    </button>
                  </div>

                  {/* Tasks Container */}
                  <div className="flex-1 space-y-3 min-h-[500px] p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                    {columnTasks.map((task) => {
                      const daysUntil = getDaysUntilDue(task.dueDate);
                      const isOverdue = daysUntil < 0;
                      const isDueSoon = daysUntil >= 0 && daysUntil <= 3;

                      return (
                        <Card
                          key={task.id}
                          className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 animate-in fade-in slide-in-from-bottom-2"
                        >
                          <CardContent className="p-4">
                            {/* Task Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-200 mb-1 group-hover:text-blue-400 transition-colors">
                                  {task.title}
                                </h4>
                                <p className="text-sm text-slate-400 line-clamp-2">{task.description}</p>
                              </div>
                              <button className="p-1 hover:bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreVertical className="h-4 w-4 text-slate-400" />
                              </button>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {task.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Task Footer */}
                            <div className="flex items-center justify-between">
                              {/* Priority & Due Date */}
                              <div className="flex items-center gap-2">
                                <div
                                  className={cn(
                                    "flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded border",
                                    getPriorityColor(task.priority)
                                  )}
                                >
                                  <Flag className="h-3 w-3" />
                                  {task.priority}
                                </div>

                                <div
                                  className={cn(
                                    "flex items-center gap-1 px-2 py-1 text-xs rounded",
                                    isOverdue
                                      ? "bg-red-500/10 text-red-500"
                                      : isDueSoon
                                        ? "bg-yellow-500/10 text-yellow-500"
                                        : "bg-slate-700 text-slate-400"
                                  )}
                                >
                                  <Clock className="h-3 w-3" />
                                  {isOverdue
                                    ? `${Math.abs(daysUntil)}d overdue`
                                    : isDueSoon
                                      ? `${daysUntil}d left`
                                      : new Date(task.dueDate).toLocaleDateString('en-US', {
                                          month: 'short',
                                          day: 'numeric',
                                        })}
                                </div>
                              </div>

                              {/* Assignee Avatar */}
                              <div
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-semibold text-white ring-2 ring-slate-700"
                                title={task.assignee.name}
                              >
                                {getInitials(task.assignee.name)}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}

                    {/* Empty State */}
                    {columnTasks.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-full text-slate-500">
                        <p className="text-sm">No tasks yet</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
