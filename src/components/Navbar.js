import React from 'react';

export const TopNavbar = () => {

    const goToHomePage = () => {
      this.props.history.push('/store/beer');
    }
  
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <a className="sidebar-toggle text-light mr-3 d-xl-none d-lg-block d-md-block d-sm-block d-block" >
          </a>
          <a className="navbar-brand" onClick={goToHomePage}>
          </a>
          <h2 className="navbar-breadcrumb d-md-block d-none">{'Store App'}</h2>
        </nav>
    );
}