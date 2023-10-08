import { useState } from "react";
import { Confirmation } from "./Confirmation";
import { Form } from "./Form";
import { CardBox } from "./CardBox";

export function InterActivCardContent() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");
  const [submit, setSubmit] = useState(null);

  const cardInformation = {
    name,
    number,
    month,
    year,
    cvc,
    submit,
  };

  function handleResetForm() {
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCVC("");
    setSubmit(null);
  }

  return (
    <div className="card_content">
      <CardBox cardInformation={cardInformation} />
      <div className="form_content">
        {!submit ? (
          <Form
            cardInformation={cardInformation}
            onSetName={setName}
            onSetNumber={setNumber}
            onSetMonth={setMonth}
            onSetYear={setYear}
            onSetCVC={setCVC}
            onSetSubmit={setSubmit}
          />
        ) : (
          <Confirmation onSetHandleResetForm={handleResetForm} />
        )}
      </div>
    </div>
  );
}
