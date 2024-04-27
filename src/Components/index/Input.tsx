import "./index.css";

interface Props {
  label: string;
}

function Input({ label }: Props) {
  return (
    <div className="d-flex flex-column gap-1">
      <label className="fs-5 fw-medium text-dark">{label}</label>
      <input
        type="text"
        name=""
        id=""
        className="border border-primary-subtle fw-semibold rounded-pill input"
      />
    </div>
  );
}

export default Input;
