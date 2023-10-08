export function Confirmation({ onSetHandleResetForm }) {
  return (
    <div className="confirmation">
      <img src="images/icon-complete.svg" alt="icon complete" />
      <div className="confirmation_content">
        <h1>thank you!</h1>
        <p>We've added your card details</p>
      </div>
      <button className="confirmation_btn" onClick={onSetHandleResetForm}>
        Continue
      </button>
    </div>
  );
}
