import React, { useState } from "react";
import axios from "axios";
import "../../styles/Contact.css";
import Footer from "../footer/Footer"
function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/YOUR_FORM_ID",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="formulaire">
      <header>CONTACTEZ NOUS</header>

<form id="form" class="topBefore" onSubmit={handleOnSubmit}>
		
		  <input id="name" type="text" placeholder="NAME"></input>
		  <input id="email" type="text" placeholder="E-MAIL"></input>
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
  <input id="submit" type="submit" value="ENVOYEZ" disabled={serverState.submitting}></input>
  {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
</form>
    
    </div>

  );
};

export default MyForm;