import React from 'react';

/**
 * 此Toggle组件呈现一个按钮，允许用户在on和off状态切换
 */
class Toggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isToggleOn:true
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state =>(
            {isToggleOn:!state.isToggleOn}
        ));
    }

    render(){
        return(
            <button onClick={() =>this.handleClick()}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        )
    }
}

export default Toggle;
