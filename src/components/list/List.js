import React from 'react';
import Profile from "../profile/Profile";

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({loading: true});
        let res = await fetch("https://reqres.in/api/users?page=1", {
            method: 'GET',
            headers: {
                'contect-type': 'application/json'
            }
        });
        let resJson = await res.json();
        this.setState({users: resJson.data, loading: false});
    }

    render() {
        return (
            <div className="row mb-5">
                {!this.state.loading ? this.state.users.map((item) => {
                    return <Profile key={item.id} user={item}/>
                    }) : <div>Users loading ...</div>}
            </div>
        )
    }
}

