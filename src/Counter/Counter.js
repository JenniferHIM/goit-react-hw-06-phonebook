import React from 'react';
import { connect } from 'react-redux';
import Value from './Value';
import Controls from './Controls';
import '../Counter/Counter.module.css';

function Counter({value}) {
    return (
        <div className="Counter">
            <Value value={value} />

            <Controls
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        value: state.counterValue,
    };
}

export default connect(mapStateToProps)(Counter);

