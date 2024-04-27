import "./index.css";

interface Props {
  btnText: string;
}

function Button({ btnText }: Props) {
  return (
    <div>
      <button className="button border border-primary-subtle fw-semibold rounded-pill ">
        {btnText}
      </button>
    </div>
  );
}

export default Button;
