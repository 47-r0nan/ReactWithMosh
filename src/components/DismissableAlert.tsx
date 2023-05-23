import { ReactNode } from "react";

interface DismissableAlertProps {
  onClose: () => void;
}

const DismissableAlert = ({ onClose }: DismissableAlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default DismissableAlert;
