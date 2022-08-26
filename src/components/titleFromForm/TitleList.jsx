import "./TitleList.css";

function TitleList({ taskList = [], setList }) {
  const deleteHandler = (id) => {
    const newperem = taskList.filter((item) => item.id !== id);
    setList(newperem);
  };
  return (
    <div className="title-block">
      {taskList.map(({ id, task, date }, index) => {
        return (
          <div key={id}>
            <p>{date}</p>
            <p>{task}</p>
            <button onClick={() => deleteHandler(id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default TitleList;
