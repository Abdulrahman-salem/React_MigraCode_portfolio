import "./index.css";

function LoginAccount(props) {
  const onSubmit = props.onSubmit;

  return (
    <div className="signup--infomation modal__form">
      <div className="mb-3">
        <label htmlFor="inputUserName" className="form-label">
          User's Name
        </label>
        <input type="text" className="form-control" id="inputUserName" />
      </div>

      <div className="mb-3">
        <label htmlFor="Github" className="form-label">
          Github Name
        </label>
        <input type="text" className="form-control" id="inputGithubName" />
      </div>

      <div className="mb-3">
        <label htmlFor="LinkedIn" className="form-label">
          LinkedIn's Link
        </label>
        <input type="text" className="form-control" id="inputLinkedInLink" />
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3" id="password">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="inputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="check" />
        <label className="form-check-label" htmlFor="check">
          Check me out
        </label>
      </div>
      <button className="btn btn-send" onClick={onSubmit}>
        Send
      </button>
    </div>
  );
}

export default LoginAccount;
