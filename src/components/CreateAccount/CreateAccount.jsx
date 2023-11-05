import "./index.css";

function CreateAccount() {
  return (
    <form className="signup--infomation">
      <div class="mb-3">
        <label for="inputUserName" class="form-label">
          User's Name
        </label>
        <input type="text" class="form-control" id="inputUserName" />
      </div>

      <div class="mb-3">
        <label for="Github" class="form-label">
          Github Name
        </label>
        <input type="text" class="form-control" id="inputGithubName" />
      </div>

      <div class="mb-3">
        <label for="LinkedIn" class="form-label">
          LinkedIn's Link
        </label>
        <input type="text" class="form-control" id="inputLinkedInLink" />
      </div>

      <div class="mb-3">
        <label for="inputEmail" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3" id="password">
        <label for="inputPassword" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword1" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check" />
        <label class="form-check-label" for="check">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-send">
        Send
      </button>
    </form>
  );
}

export default CreateAccount;
