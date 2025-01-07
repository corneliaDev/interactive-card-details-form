export function Form({
  cardInformation,
  onSetName,
  onSetNumber,
  onSetMonth,
  onSetYear,
  onSetSubmit,
  onSetCVC,
}) {
  const { name, number, month, year, cvc, submit } = cardInformation;

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !number ||
      !month ||
      !year ||
      !cvc ||
      number.match(/[^,\s,\d]/) ||
      [month, year].toString().match(/[^,\s,\d]/) ||
      cvc.match(/[^,\s,\d]/)
    ) {
      onSetSubmit(false);
    } else {
      onSetSubmit(true);
    }
  }

  function checkError(val) {
    return (submit === false && !val) ||
      (submit === false && val.match(/[^,\s,\d]/))
      ? true
      : false;
  }

  function checkErrorName() {
    return submit === false && !name ? true : false;
  }

  function checkErrorExpDate() {
    return (submit === false && month === "") ||
      (submit === false && year === "") ||
      (submit === false && [month, year].toString().match(/[^,\s,\d]/))
      ? true
      : false;
  }

  function errorContent(val) {
    return val.toString().match(/[^,\s,\d]/)
      ? `Wrong format, numbers only`
      : `Can't be blank`;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardholder-name">cardholder name</label>
        <input
          id="cardholder-name"
          className={
            checkErrorName() ? "form_input form_input-error" : "form_input"
          }
          type="text"
          placeholder="e.g Jane Appleseed"
          value={name}
          onChange={(e) => onSetName(e.target.value)}
        />
        <p className={checkErrorName() ? "form_error show" : "form_error"}>
          Can't be blank
        </p>
      </div>
      <div>
        <label htmlFor="card-number">card number</label>
        <input
          className={
            checkError(number) ? "form_input form_input-error" : "form_input"
          }
          id="card-number"
          type="text"
          maxLength="10"
          placeholder="e.g 1234 5678 9123 0000"
          value={number}
          onChange={(e) => onSetNumber(e.target.value)}
        />
        <p className={checkError(number) ? "form_error show" : "form_error"}>
          {errorContent(number)}
        </p>
      </div>
      <div className="form_date-cvc">
        <label className="form_label-date" htmlFor="date">
          exp. date (mm/yy)
        </label>
        <input
          className={
            checkErrorExpDate()
              ? "form_input form_input-error  form_month"
              : "form_input form_month"
          }
          type="text"
          placeholder="MM"
          maxLength="2"
          value={month}
          onChange={(e) => onSetMonth(e.target.value)}
        />
        <input
          className={
            checkErrorExpDate()
              ? "form_input form_input-error  form_year"
              : "form_input form_year"
          }
          type="text"
          placeholder="YY"
          value={year}
          maxLength="2"
          onChange={(e) => onSetYear(e.target.value)}
        />
        <p
          className={
            checkErrorExpDate()
              ? "form_error form_error-date show"
              : "form_error"
          }
        >
          {errorContent([month, year])}
        </p>

        <label className="form_label-cvc" htmlFor="cvc">
          cvc
        </label>
        <input
          className={
            checkError(cvc)
              ? "form_input form_input-error form_input-cvc"
              : "form_input form_input-cvc"
          }
          id="cvc"
          type="text"
          placeholder="e.g 123"
          maxLength="3"
          value={cardInformation.cvc}
          onChange={(e) => onSetCVC(e.target.value)}
        />
        <p
          className={
            checkError(cvc) ? "form_error  form_error-cvc show" : "form_error"
          }
        >
          {errorContent(cvc)}
        </p>
      </div>
      <button>Confirm</button>
    </form>
  );
}
