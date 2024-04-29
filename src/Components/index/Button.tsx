import "./index.css";

interface Props {
  btnText: string;
  onClick: () => void;
}

function Button({ btnText, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className="button border border-primary-subtle fw-semibold rounded-pill "
      >
        {btnText}
      </button>
    </div>
  );
}

export default Button;
