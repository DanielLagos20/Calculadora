import "../assets/styles/ButtonClear.css";
export default function ButtonClear(props) {
  return (
    <>
      <button className="button-clear" onClick={() => props.handleClear()}>
        Clear
      </button>
    </>
  );
}
