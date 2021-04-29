import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username:'',
            password:'',
            email:''
        }
    }

    setUsername = (e)=>{
        this.setState({username:e.target.value})
    }
    setEmail = (e)=>{
        this.setState({email:e.target.value})
    }
    setPassword = (e)=>{
        this.setState({password:e.target.value})
    }

    login = async (e)=>{
        let user = {
            email : this.state.email,
            password: this.state.password
        }
        let res = await fetch('https://reqres.in/api/login',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        });
        let resJson = res.json();
        if (resJson.token){
            alert('login succes')
        }else{
            alert('user not found')
        }
    }

    render() {
        return(
            <div>
                <h2 className="mb-4">Login</h2>
                <div class="form-group">
                    <label>Username : </label>
                    <input className="form-control" type="text" onChange={this.setUsername}  value={this.state.username}/><br/>
                </div>
                <div class="form-group">
                    <label>email : </label>
                    <input className="form-control" type="email" onChange={this.setEmail} value={this.state.email}/><br/>
                </div>
                <div class="form-group">
                    <label>password : </label>
                    <input className="form-control" type="password" onChange={this.setPassword} value={this.state.password}/><br/>
                </div>
                <button className="btn btn-success" onClick={this.login}>Login</button>
            </div>
            
        )
    }
}
