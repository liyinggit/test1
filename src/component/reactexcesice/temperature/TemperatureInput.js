import React from 'react';

/**
 * 提升状态    温度计
 */
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TemperatureInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            temperature:''
        }
    }

    handleChange(e){
        this.setState(
            {temperature:e.target.value}
        );
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={(e)=>this.handleChange(e)}/>

                {
                    temperature>=100 ?
                        <p>The water would boil.</p>
                        :
                        <p>The water would not boil.</p>
                }
            </fieldset>
        );
    }

}
export default TemperatureInput;
