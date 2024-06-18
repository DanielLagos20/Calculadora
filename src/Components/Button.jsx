import "../assets/styles/Button.css";
export default function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <>
      <button
        onClick={() => props.handleClick(props.children)}
        className={`button ${
          isOperator(props.children) ? "button-operator" : "button-number"
        }`}
      >
        {props.children}
      </button>
    </>
  );
}
