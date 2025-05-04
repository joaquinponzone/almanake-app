"use client";

import * as React from "react";
import { RiAddLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { etiquettes } from "@/components/big-calendar"; // Assuming etiquettes are globally relevant
import { cn } from "@/lib/utils";

// Define the Task interface
interface Task {
  id: string;
  title: string;
  dueDate?: Date | null;
  doneDate?: Date | null;
  eventReference?: string | null;
  etiquette?: (typeof etiquettes)[number];
}

// Define mock tasks data (moved from app-sidebar)
const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Review design mockups",
    dueDate: null,
    doneDate: null,
    eventReference: null,
    etiquette: etiquettes[1], // Marketing Team
  },
  {
    id: "task-2",
    title: "Prepare meeting agenda",
    dueDate: new Date(2025, 4, 10),
    doneDate: null,
    eventReference: null,
    etiquette: etiquettes[0], // My Events
  },
  {
    id: "task-3",
    title: "Send follow-up email",
    dueDate: null,
    doneDate: new Date(2025, 4, 5),
    eventReference: "event-123",
    etiquette: etiquettes[3], // Events Planning
  },
];

export function TasksSidebar() {
  // Add state management for tasks later if needed
  // const [tasks, setTasks] = React.useState(mockTasks);

  return (
    <aside className="w-64 shrink-0 p-4 flex flex-col gap-4 dark scheme-only-dark">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-lime-200">Pending Tasks</h2>
        <Button variant="ghost" size="icon" className="size-7">
          <RiAddLine size={16} />
          <span className="sr-only">New Task</span>
        </Button>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-2 overflow-y-auto flex-1">
        {mockTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between text-sm px-2 py-1">
            <span
              className={cn(
                "font-medium",
                task.doneDate && "line-through text-muted-foreground",
              )}
            >
              {task.title}
            </span>
            {task.etiquette && (
              <span
                className="size-2 rounded-full bg-[--event-color]"
                style={
                  {
                    "--event-color": `var(--color-${task.etiquette.color}-400)`,
                  } as React.CSSProperties
                }
              ></span>
            )}
          </div>
        ))}
        {mockTasks.length === 0 && (
           <p className="text-sm text-muted-foreground">No tasks for today.</p>
        )}
      </div>
       {/* Potential Footer or additional actions */}
    </aside>
  );
}
