import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert("Please enter text");
      return;
    }
    if (!day) {
      const date = new Date().toDateString();
      setDay(date);
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  }
  return (
    <form className="form-control py-2 mb-3" onSubmit={(e) => onSubmit(e)}>
      <div className="form-group py-1">
        <label htmlFor="text">Task</label>
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group py-1">
        <label htmlFor="day&time">Day & Time</label>
        <input
          type="text"
          className="form-control"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-group py-1 ">
        <label htmlFor="reminder" className="px-2">
          Set Reminder
        </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="form-group py-1 text-center">
        <input type="submit" value="Save Task" className="btn btn-dark w-100" />
      </div>
    </form>
  );
};
AddTask.propTypes = {
  reminder: PropTypes.bool,
};
export default AddTask;
