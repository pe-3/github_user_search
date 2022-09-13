import React, { Component } from 'react';
import style from './index.module.css'

class Search extends Component {
    render() {
        const { getLst, changeId, usernum } = this.props;
        return (
            <div className={style.search}>
                <input type="text" placeholder='输入GitHub用户id' className={style.input} onChange={(e) => { changeId(e.target.value); }} />
                <button onClick={getLst} className={style.button}>搜索</button>
                <span style={{ display: usernum === 0 ? 'none' : '' }}>总共有{usernum}个搜索结果</span>
            </div>
        );
    }
}

export default Search;
