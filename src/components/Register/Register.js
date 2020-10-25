import React from 'react';
import DragDropComponent from './DragDrop';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      submitBtnVisibility: 'none',
    };
  }

  fileUploadCallback = (imgUrl) => {
    this.setState({
      imageUrl: imgUrl,
      submitBtnVisibility: 'inline',
    });
  };

  render() {
    const { imageUrl, submitBtnVisibility } = this.state;

    return (
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Registration form for CryptInvest
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
              <form action="https://sdee3.com:5000/user/register" method="post">
                <div className="form-group text-left">
                  <label htmlFor="inputFullName">Full name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="inputFullName"
                    name="fullName"
                    placeholder="Enter your full name here"
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="inputUsername">Username</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="inputUsername"
                    name="username"
                    placeholder="Enter your desired username here"
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group text-left">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    name="password"
                    required
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                  <input
                    hidden
                    id="imageUrl"
                    name="imageUrl"
                    value={imageUrl}
                  />
                </div>
                <DragDropComponent
                  imageUploadFunction={this.fileUploadCallback}
                />
                <br />
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lfck0EUAAAAAOEVMgacMiC5ozT_5E63M_ZxoU9r"
                  data-callback="enableSubmitBtn"
                />
                <input
                  type="submit"
                  style={{ display: submitBtnVisibility }}
                  id="submitBtnRegister"
                  disabled
                  className="btn btn-success btn-lg btn-block mt-2"
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
