import React from 'react';
import TemperatureInput from "./TemperatureInput";

/**
 * 提升状态    温度计
 */
class Calculator extends React.Component {

    render() {
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        );
    }

}

export default Calculator;
