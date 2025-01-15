import React, { useEffect, useState } from "react";
import bell from "../assets/icons/bell.svg";
import repeat from "../assets/icons/repeat.svg";
import calendar from "../assets/page-links-icons/calendar.svg";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../features/task/taskSlice";

function Createtask() {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const [newTaskData, setNewTaskData] = useState({
    userId: null,
    title: null,
    isCompleted: false,
    isImp: false,
    dueDate: null,
  });

  // add the userId when the user is loaded from the authReducer
  useEffect(() => {
    setNewTaskData((prev) => {
      return { ...prev, userId: user?.$id };
    });
  }, [user]);

  // handle input change
  function handleInputChange(e) {
    setNewTaskData((prev) => {
      return { ...prev, title: e.target.value };
    });
  }

  function handleAddTask() {
    dispatch(createTask(newTaskData));
  }

  return (
    <div className="w-full h-[178px] border-b flex flex-col justify-between px-5 py-4 bg-gradient-to-t from-[#357937]/10 to-[#D0FFD2]/10">
      <input
        type="text"
        className="translate-y-[40px] outline-none bg-transparent"
        placeholder="Add Task"
        onChange={handleInputChange}
      />

      <div className="flex items-center justify-between">
        {/* icons container */}
        <div className="flex gap-6">
          <button>
            <img src={bell} alt="not found" />
          </button>
          <button>
            <img src={repeat} alt="not found" />
          </button>
          <button>
            <img src={calendar} alt="not found" />
          </button>
        </div>

        {/* add task btn */}
        <button
          className="uppercase bg-[#357937]/15 px-3 py-1.5 rounded text-[#357937] font-medium text-sm"
          onClick={handleAddTask}
        >
          add task
        </button>
      </div>
    </div>
  );
}

export default Createtask;
