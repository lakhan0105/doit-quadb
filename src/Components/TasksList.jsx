import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { updateTask } from "../features/task/taskSlice";
import TaskListItem from "./TaskListItem";

function TasksList({ allTasksData, isLoading }) {
  const [pendingtasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setPendingTasks(() => {
      return allTasksData?.filter((task) => {
        if (task.isCompleted === false) {
          return task;
        }
      });
    });

    setCompletedTasks(() => {
      return allTasksData?.filter((task) => task.isCompleted === true);
    });
  }, [allTasksData]);

  // handleCheckboxChange
  function handleCheckboxChange(data) {
    console.log(data);
    const updatedData = { ...data, isCompleted: !data.isCompleted };
    dispatch(updateTask(updatedData));
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        {pendingtasks.map((data) => {
          return (
            <TaskListItem
              key={data?.$id}
              data={data}
              handleCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </div>

      <div>
        <h2 className="mb-2 mt-1">Completed</h2>
        {completedTasks.map((data) => {
          return (
            <TaskListItem
              key={data?.$id}
              data={data}
              handleCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TasksList;
