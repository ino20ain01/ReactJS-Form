import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            description: '',
            gender: 1,
            language: 'en',
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(e) {
        var target = e.target,
            name   = target.name,
            value  = target.value;
        this.setState({
            [name]: value
        });
    }

    onHandleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Form</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={ this.onHandleSubmit }>
                                <div className="form-group">
                                    <label htmlFor="">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={ this.onHandleChange }
                                        value={ this.state.username }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={ this.onHandleChange }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description:</label>
                                    <textarea
                                        cols="30" rows="10"
                                        className="form-control"
                                        name="description"
                                        value={ this.state.description }
                                        onChange={ this.onHandleChange }
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Gender:</label>
                                    <select name="gender"
                                            className="form-control"
                                            value={ this.state.gender }
                                            onChange={ this.onHandleChange }
                                    >
                                        <option value={0}>Nữ</option>
                                        <option value={1}>Nam</option>
                                    </select>
                                </div>
                                <label htmlFor="">Language:</label>
                                <div className="form-group">
                                    <label className="radio-inline">
                                        <input
                                            value="vi"
                                            type="radio"
                                            name="language"
                                            onChange={ this.onHandleChange }
                                            checked={ this.state.language === 'vi' }
                                        />Vietnamese
                                    </label>
                                    <label className="radio-inline">
                                        <input
                                            value="en"
                                            type="radio"
                                            name="language"
                                            onChange={ this.onHandleChange }
                                            checked={ this.state.language === 'en' }
                                        />English
                                    </label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
