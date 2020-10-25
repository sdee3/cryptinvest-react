import React from 'react';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login back to CryptInvest
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* FORM START */}
              <form action="https://sdee3.com:5000/user/login" method="post">
                <div className="form-group text-left">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    required
                    type="password"
                    name="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lfck0EUAAAAAOEVMgacMiC5ozT_5E63M_ZxoU9r"
                  data-callback="enableSubmitBtn"
                />
                <input
                  type="submit"
                  id="submitBtnLogin"
                  disabled
                  className="btn btn-success btn-lg btn-block mt-5"
                  value="Submit"
                />
              </form>{' '}
              {/* FORM END */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning text-white"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
