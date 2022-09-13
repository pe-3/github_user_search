import Search from "./component/search";
import UserCard from "./component/user";

import React, { Component } from 'react'
import Empty from "./component/empty";

export default class App extends Component {
  state = {
    userid: '', userlst: [], usernum: 0
  }

  changeId = (val) => {
    this.setState({
      userid: val
    })
  }

  getLst = (e) => {
    const { userid } = this.state;
    if (!userid) {
      return alert('输入后搜索');
    }
    fetch("https://api.github.com/search/users?q=" + userid, {
      method: 'get'
    }).then(res => {
      return res.json();
    }).then(data => {
      const { items, total_count } = data;
      this.setState({
        userlst: items,
        usernum: total_count
      })
    })
  }

  render() {
    const { userlst, usernum } = this.state;
    return (
      <div className="App">
        <Search changeId={this.changeId} getLst={this.getLst} usernum={usernum} />
        {
          !userlst.length ? <Empty /> : userlst.map((val) => {
            return <UserCard {...val} key={val.login} />
          })
        }

      </div>
    )
  }
}