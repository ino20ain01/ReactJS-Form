import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <ColorPicker color={ this.state.color } onReceiveColor={ this.onSetColor } />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize={ this.state.fontSize } onChangeSize={ this.onChangeSize } />
                        <Reset onReset={ this.onReset } />
                    </div>
                    <Result color={ this.state.color } fontSize={ this.state.fontSize } />
                </div>
            </div>
        );
    }
}

export default App;
