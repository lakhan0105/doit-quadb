import React from "react";
import star from "../assets/page-links-icons/star.svg";
import blackStar from "../assets/icons/ph_star.svg";

function TaskListItem({ data, handleCheckboxChange }) {
  const { $id, title, isCompleted, isImp } = data;
  return (
    <div className="w-full flex justify-between px-4 py-5 border-t" key={$id}>
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            handleCheckboxChange({ $id, isCompleted });
          }}
        />
        <p>{title}</p>
      </div>

      <button>
        <img src={`${isImp ? blackStar : star}`} alt="not found" />
      </button>
    </div>
  );
}

export default TaskListItem;
