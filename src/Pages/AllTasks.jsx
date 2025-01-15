import React, { useEffect } from "react";
import { Createtask, TasksList } from "../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTasks } from "../features/task/taskSlice";

function AllTasks() {
  const { user } = useSelector((state) => state.authReducer);
  const { isLoading, allTasksData } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetch all tasks ");
    const userId = user?.$id;
    if (userId) {
      dispatch(fetchAllTasks(userId));
    }
  }, [user]);

  return (
    <div className="w-full">
      AllTasks
      <Createtask />
      <TasksList allTasksData={allTasksData} isLoading={isLoading} />
    </div>
  );
}

export default AllTasks;
