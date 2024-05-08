import React from "react";
import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import ProjectDetails from "./ProjectDetails";


const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
      <Outlet />
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;