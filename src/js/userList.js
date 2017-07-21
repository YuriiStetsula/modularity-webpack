import _ from 'lodash';
import logo from '../images/1.jpg'
const img = document.createElement("img")
img.src = logo


class  userList{
    constructor(users){
    
    this.users = users
    this.container = document.getElementById('root');
    this.sortedUsers = _.sortBy(this.users, 'age');
    }
 // some strange comment here. I dont why :)
     showList (){
        this.sortedUsers.forEach((user) => {
            const div = document.createElement("div");
            const img = document.createElement("img")
            img.src = logo
            div.appendChild(img)
            div.append(user.name + ' ' + user.age);
            this.container.appendChild(div);
        });
    }
}

export default  userList;