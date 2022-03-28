import { StatusProps } from "../../types";
import "./Status.scss";
const Status: React.FC<StatusProps> = ({
  status = "unknown",
  message = "unknown",
}) => {
  return (
    <span className="status">
      <span className={`status__icon status__icon--${status}`}></span>
      {message}
    </span>
  );
};

export default Status;
