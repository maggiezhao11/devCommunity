import Welcome from "./Welcome";
import "./modal.scss";


export default function Modal({setOpenModal}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false)}}> X </button>
        </div>
        <div className="title">
          <h1>Hello from Modal</h1>
          <Welcome />
        </div>
      </div>
    </div>
  );
}
