import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar - Almanke",
};

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import BigCalendar from "@/components/big-calendar";
import { TasksSidebar } from "@/components/tasks-sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1 overflow-hidden">
          <div className="flex flex-1 flex-col gap-4 p-2 pt-0 h-full">
            <BigCalendar />
          </div>
        </SidebarInset>
        <div className="w-56">
            <TasksSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
}
