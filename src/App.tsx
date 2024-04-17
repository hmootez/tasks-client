import React from "react";
import "./App.css";
import TaskList from "./features/TaskList";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <TaskList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
