import React, {Component} from 'react';

/**
 * 练习
 */
class LikeButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
    }

    handleClick(e){
        this.setState(
            {liked:!this.state.liked}
        );
    }

    render(){
        const text = this.state.liked?'like':'haven\'t liked';
        return(
          <p onClick={this.handleClick.bind(this)}>
            you{text} this. Click to toggle.
          </p>
        );
    }
}


export default LikeButton;
