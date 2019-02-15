import React,{Component} from 'react';

/**
 * 可以使用ref到的组件定义的任何公共方法，比如this.refs.myTypeahead.reset()
 * Refs是范文到组件内部dom节点唯一可靠的方法
 * Refs会自动销毁对子组件的引用（当子组件删除时)
 *
 * 不要在render或者render之前访问refs
 *
 */
class Refs extends Component{

    constructor(props){
        super(props);
        this.state = {userInput:''};
    }

    handleChange(e){
        this.setState({userInput:e.target.value});
    }

    /**
     * 通过在要引用的dom元素上面设置一个ref属性制定一个名称，然后通过this.refs.name来访问对应的dom元素
     */
    clearAndFocusInput(){
        this.setState(
            {userInput:''},
            () => {this.refs.theInput.focus();}
            )
    }

    render(){
        return(
          <div>
              <div onClick={this.clearAndFocusInput.bind(this)}>
                Click to focus and clear
              </div>
              <input ref="theInput"
                     value={this.state.userInput}
                     onChange={this.handleChange.bind(this)}
                     />
          </div>
        );
    }
}

export default Refs;
