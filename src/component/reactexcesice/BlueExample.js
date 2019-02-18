import React from 'react';

/**
 * 无障碍
 */
class BlueExample extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen:false
        };
        this.timeOutId = null;


    }


    onClickHandler(){
        this.setState(currentState =>({
            isOpen:!currentState.isOpen
        }));
    }

    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    }
    onFocusHandler() {
        clearTimeout(this.timeOutId);
    }
    render(){
        return(
            <div onBlur={()=>this.onBlurHandler()}
                 onFocus={()=>this.onFocusHandler()}>

                <button onClick={()=>this.onClickHandler()}
                        aria-haspopup="true"
                        aria-expanded={this.state.isOpen}>
                    Select an option
                </button>
                {this.state.isOpen ? (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

export default BlueExample;
