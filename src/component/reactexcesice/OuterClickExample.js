import React from 'react';

/**
 * 无障碍
 * 使用ref
 */
class OuterClickExample extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen:false
        };
        // this.onClickHandler = this.onClickHandler.bind(this);
        // this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
        /*******/
        this.toggleContainer = React.createRef();

    }

    /*
    不使用this.onClickOutsideHandler.bind(this)的方式
     */
    componentDidMount() {
        window.addEventListener('click', (e)=>this.onClickOutsideHandler(e));
    }

    componentWillUnmount() {
        window.removeEventListener('click', (e)=>this.onClickOutsideHandler(e));
    }

    onClickHandler(){
        this.setState(currentState =>({
            isOpen:!currentState.isOpen
        }));
    }

    onClickOutsideHandler(event){
        /*******/
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
            this.setState({isOpen:false});
        }
    }

    render(){
        return(
          <div ref={this.toggleContainer}>
              <button onClick={()=>this.onClickHandler()}>select an option</button>
              {
                  this.state.isOpen?(
                      <ul>
                          <li>option1</li>
                          <li>option2</li>
                          <li>option3</li>
                      </ul>
                  ):null
              }
          </div>
        );
    }
}

export default OuterClickExample;
