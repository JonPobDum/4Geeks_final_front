const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     name: "",
     gender: "",
     age:"",
     email:"",
     password:"",

      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },


      // CON ESTA FUNCION REALIZO EL LOGEO DE LA CUENTA
      login: (correo, contraseña,history) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: correo,
          password: contraseña,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3000-jonpobdum-4geeksfinalba-ir65w2p09al.ws-us73.gitpod.io/api/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if(result){
              localStorage.setItem("token", result.token)}
            history.push("/perfil")
            } 
            )
          .catch((error) => console.log("error", error));
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        //localStorage.setItem("token", result.token <- viene de la api)
        console.log(correo, contraseña);
      },



      // CON ESTA FUNCION SE PODRA RECUPERAR LA CLAVE Y SE DEBE ENVIAR AL CORREO ELECTRONICO
      recuperar_password: (email) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3000-jonpobdum-4geeksfinalba-aqx5xd98ze5.ws-us72.gitpod.io/recuperar/clave",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      register: (name, gender, age, email, password,history) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          name: name,
          gender: gender,
          age: age,
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3000-jonpobdum-4geeksfinalba-ir65w2p09al.ws-us73.gitpod.io/api/register",
          requestOptions
        )
          .then((response) => response.json())
		  
		//   PROBLEMA PARA ALMACENAR, DONDE LO HAGO ??
          .then((result) =>{
            if (result.register) {
              setStore({ register: result });
            } else {
              setStore({
              name: null,
              gender: null,
              age: null,
              email: null,
              password: null,
              
              } );
              sessionStorage.setItem("currentUser", JSON.stringify(raw));
              sessionStorage.setItem("isAuthenticated", true);
              alert("Usuario Registrado! ahora puedes logear con tu cuenta");
              window.location.href = "/login";
            }
          })
          .catch((error) => console.log("error", error));
          console.log(name);

        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },

      aa:(history) => {
        // setStore{{usuario:{}}}
        localStorage.removeItem("token")
        alert("se ha cerrado la sesión")
        history.push("/")
       
        






      },




      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
