import {observable, action} from "mobx";

class  RegisterStore{
    @observable registerInfo={
        username:null,
        password:null,
        type:null,
    };

    constructor(){
        this.registerInfo.username = null;
        this.registerInfo.password = null;
        this.registerInfo.type = null;
    }

    @action
    cleanInfoBasic = () => {
        this.registerInfo.username = null;
        this.registerInfo.password = null;
        this.registerInfo.type = null;
    };
}

const registerStore = new RegisterStore();

export {registerStore};
