import './App.css';

import { Component } from "react"

import { Layout } from 'antd';
import { Input} from 'antd';
import { Skeleton } from 'antd';

   
import React from "react";

import { Row, Card} from "antd";
import axios from "axios";


const { Search } = Input;
const { Header, Content} = Layout;


class App extends Component{
  constructor(props){
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.state={
      placeholder: "Query",
      search: false,
      phoneDetails: []
    }
  }
  onSearch(value)
  {
    this.setState({
      placeholder: "Query",
      search: true
    })
    axios
      .request({
        method: "post",
        url: "http://localhost:5000/tf",
        params: {
          query: value
        }
      })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render (){
    let content
    const details = [
      {
        id: "1",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "0",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "1",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "2",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "3",
        comments: "u are not nice",
      }]
    if(!this.state.search){
      content = <Skeleton active></Skeleton>
    }else{
      content = <div>{details.map((item) => {
        return (
          <Row style={{ justifyContent: "center" }}>
            <Card
              style={{ margin: "15px", width: "50em" }}
              title={item.title}>
              {item.description}
            </Card>
          </Row>
        );
      })}
      </div>
    }
  return (
  <div>
  <Layout>
    <Header mode='horizontal' style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'gray' }}>
      <div className="logo" />
        <h1 style={{display:'inline',fontSize:'2.5em'}}>GSM Engine</h1>
        <h4 style={{display:'inline',paddingLeft:"10px"}}>Phone recommender</h4>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64,  minHeight: '100%' }}>
      <div className="site-layout-background" style={{ padding: 24}}>
      <Search style={{display:'inline'}} placeholder={this.state.placeholder} allowClear onSearch={this.onSearch} enterButton></Search>
      {content}
      </div>
    </Content>
  </Layout>
  </div>
  );
}
}

export default App;
