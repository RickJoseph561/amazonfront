import axios from 'axios';

const loginurl = "http://localhost:8080/SpringbootbackReact2Application/user/";


class UserService {


signout(){


 return axios.delete(loginurl,{withCredentials:true});
}

getuser(){


}
signin(info){
    console.log(info);
    return axios.put(loginurl,info,{withCredentials:true});
}


register(info){

return axios.post(loginurl,info,{withCredentials:true});
}


}
export default new UserService ();

