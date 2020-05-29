import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MainViewConnected } from "./components/Main";
import { Layout} from 'antd';
import { CheckoutConnected } from './components/Checkout';
const { Header, Footer, Content } = Layout;

export const AppLayout = (componentToRender) => {
  const Component = componentToRender;
  return () => (
    <Layout className="layout">
      <Header className="navbar theme-content-light navbar-expand"> 
        <h2 className="p-10-20 d-md-block d-none"><Link to="/">Store App</Link></h2>
      </Header>
      <Content className="site-layout-content">
          <Component />
      </Content> 
      <Footer className="theme-content-light"/> 
    </Layout>
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