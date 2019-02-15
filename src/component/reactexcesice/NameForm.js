import React from 'react';

/**
 * 受控组件
 */
class NameForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            value:"",
        }
    }

    /**
     * 强制转换为大写形式
     * @param event
     */
    handleChange(event){
        this.setState({
            value:event.target.value.toUpperCase(),
        });
    }



    handleSubmit(event){
        alert("name:"+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={(event)=>this.handleChange(event)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NameForm;
