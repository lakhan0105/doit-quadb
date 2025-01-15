import board from "../assets/page-links-icons/board.svg";
import calendar from "../assets/page-links-icons/calendar.svg";
import star from "../assets/page-links-icons/star.svg";
import planned from "../assets/page-links-icons/planned.svg";
import me from "../assets/page-links-icons/me.svg";

export const pageListData = [
  {
    id: 1,
    img: board,
    linkName: "all tasks",
    path: "all-tasks",
  },
  {
    id: 2,
    img: calendar,
    linkName: "today",
    path: "today",
  },
  {
    id: 3,
    img: star,
    linkName: "important",
    path: "important",
  },
  {
    id: 4,
    img: planned,
    linkName: "planned",
    path: "planned",
  },
  {
    id: 5,
    img: me,
    linkName: "me",
    path: "me",
  },
];
