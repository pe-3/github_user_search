import React, { Component } from 'react';
import './index.css'

class UserCard extends Component {
    render() {
        const { html_url: url, login, avatar_url } = this.props;
        return (
            <div className='user-card'>
                <a href={url}>
                    <img src={avatar_url} className='user-img' />
                    <span>{login}</span>
                </a>
            </div>
        );
    }
}

export default UserCard;
