import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import "./Assignment.css";
function Assignment(props) {
  return (
    <div className="assignment-container">
      <LibraryBooksIcon className="icon" />
      <h3>{props.assign}</h3>
    </div>
  );
}
export default Assignment;
