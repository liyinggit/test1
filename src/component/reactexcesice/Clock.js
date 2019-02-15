import React from 'react';

/**
 * 使用自定义组件
 * @param props
 * @returns {*}
 * @constructor
 */
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    /**
     * 输出呈现给dom后运行，render之后
     */
    componentDidMount() {
        this.timerId = setInterval(
            ()=>this.tick(),
            1000
        )
    }

    /**
     * 卸载组件时运行
     */
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}

                {/*//也可直接使用上面的方式*/}
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;
