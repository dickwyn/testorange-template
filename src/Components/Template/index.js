import React, { Component } from 'react';
import '../../styles/template.scss';

class Template extends Component {
  render() {
    return (
      <div class="template">
        <div className="title">Default template</div>
        <div class="message">
          <div class="card">
            <div class="card-body">
              <p class="lead" id="copyMessage">
                Hi <span id="name" />,
                <br />
                <br />I came across your profile through the alumni search. I
                will be graduating ASU this December with a CS degree. I'm
                looking to apply for <span id="job" /> within{' '}
                <span id="company" />. I would like to have a chat with you to
                get some pointers when applying for a role at{' '}
                <span id="company" />.<span id="signature" />
                <span id="txtAge">
                  <br />
                  <br />
                  Go Devils!
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="inputs">
          <div className="select">
            <label for="templateName" class="col-sm-2 col-form-label">
              Template
            </label>
            <div class="col-sm-10" id="templateName">
              <select class="form-control">
                <option>Default Template</option>
                <option>Template #1</option>
                <option>Templete #2</option>
              </select>
            </div>
          </div>
          <div className="name">
            <label for="personName" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="personName"
                placeholder="John"
              />
            </div>
          </div>
          <div className="company">
            <label for="companyName" class="col-sm-2 col-form-label">
              Company
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="companyName"
                placeholder="Google"
              />
            </div>
          </div>
          <div className="job">
            <label for="jobName" class="col-sm-2 col-form-label">
              Job
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="jobName"
                placeholder="Full Stack developer roles"
              />
            </div>
          </div>
          <div className="signature">
            <label for="jobName" class="col-sm-2 col-form-label" />
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="signatureName"
                  checked
                />
                <label class="form-check-label" for="defaultCheck1">
                  Signature
                </label>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary btn-block"
            data-clipboard-target="#copyMessage"
          >
            Copy Text
          </button>
        </div>
      </div>
    );
  }
}

export default Template;