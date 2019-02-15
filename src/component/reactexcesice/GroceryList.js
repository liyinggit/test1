import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * 父子组件间通信
 * 通过props
 */
export default class GroceryList extends Component{
    handleClick(i){
        console.log("you clicked:"+this.props.items[i]);
    }

    render(){
        return(
          <div>
              {this.props.items.map((item,i) => {
                  return(
                      <div onClick={this.handleClick.bind(this,i)} key={i} >{item}</div>
                  );
                  })}
          </div>
        );
    }
}
render(
    <GroceryList items={['Apple', 'Banana', 'Cranberry']} />
);
