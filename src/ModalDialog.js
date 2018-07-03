import React, { Component } from 'react';

const ModalDialog = (props) => {
  return (
    <div className={"modal fade " + (props.toggle ? 'show': 'hide') } style={{ display: props.toggle ? 'block' : 'none'}} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.content.author}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.onClose()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.content.philosophy}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.closeDialog()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;