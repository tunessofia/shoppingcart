import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MainViewConnected } from "./components/Main";
import { Layout} from 'antd';
import { CheckoutConnected } from './components/Checkout';
const { Header, Content } = Layout;

export const AppLayout = (componentToRender) => {
  const Component = componentToRender;
  return () => (
    <Fragment>
      <Header className="theme-content-light">
        <h2 className="p-10-20 d-md-block d-none"><Link to="/">Store App</Link></h2>
      </Header>
      <Layout>
        <Content className="site-layout-content content p-md-5 pt-5 p-3">
          <div className="row p-40-0">
            <div className="col-12 max-content-width">
              <Component />
            </div>
          </div>
        </Content>
      </Layout>
    </Fragment>
  );
}
  
export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppLayout(MainViewConnected)} />
        <Route exact path="/checkout" component={AppLayout(CheckoutConnected)} />
      </Switch>
    </Router>
  );
}