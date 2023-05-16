import './App.scss';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import TodoList from "./pages/TodoList";

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TodoList />} />
                    <Route path="dashboard" element={<Dashboard />} />

                    <Route path="*" element={<div />} />
                </Route>
            </Routes>
        </div>
  )
}

export default App
