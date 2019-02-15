import React,{Component} from 'react';

/**
 * 通过props传递值
 */
export default class profile extends Component{
    render(){
        const ProfilePic = (props) => {
            return (
                <img src={'http://graph.facebook.com/' + props.username + '/picture'} />
            );
        };

        const ProfileLink = (props) => {
            return (
                <a href={'http://www.facebook.com/' + props.username}>
                    {props.username}
                </a>
            );
        };

        const Avatar = (props) => {
            return (
                <div>
                    <ProfilePic username={props.username}/>
                    <ProfileLink username={props.username}/>
                </div>
            );
        };

        return(
            <Avatar username="pwh" />

        );
    }

}

