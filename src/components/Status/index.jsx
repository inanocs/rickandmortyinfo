import "./status.scss";
const Status = ({ status = "unknown", message = "unknown" }) => {
  return (
    <span className="status">
      <span className={`status__icon status__icon--${status}`}></span>
      {message}
    </span>
  );
};

export default Status;
