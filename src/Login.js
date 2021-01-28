import React from 'react'
import "./Login.css"
import Button from "@material-ui/core/Button"
import {auth,provider} from "./firebase"
import {useStateValue} from "./StateProvide"
import {actionTypes} from "./reducer"
const Login = () => {
    /*Data layer as REDUX/React Context API 
    ikisi de same pattern kullanır fakat Redux implementasyonu
    zordur Context Api ise kolay kullanılır.Burada appdeki user'ı
    almak istiyor.Props kullanmadan ona erişecek.
    Login yaptığımız userı React context apiye koyacak böylece tüm componentlerden
    erişebileceğiz. 
    */
   const [{state},dispatch]=useStateValue(); ///pull information from data layer projede
   //istediğin alandan pullayabilirsin

   //aşağıda userı dispatch to data layer yapıyoruz.Sonra dispatch yaptığımız layerdan data çekme işlemi
   // yapıyoruz.
    const signIn = () =>
    {
          auth.signInWithPopup(provider)
          .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            debugger;
            console.log(result);
          })
          .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                alt=""
                />
                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt=""
                />
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
