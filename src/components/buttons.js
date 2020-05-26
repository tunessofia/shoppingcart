import React from 'react';

export const PrimaryButton = (props) => {

    return (
        <div className="row justify-content-end">
            <div className="col-offset-lg-9 col-lg-3 col-offset-md-9 col-md-3 col-sm-12">
                <button className="btn btn-primary btn-block mb-lg-0 mb-2"
                    disabled={this.props.disabled ? this.props.disabled : false}
                    onClick={this.props.onClick}>
                    {this.props.label}
                </button>
            </div>
        </div>
    );
}