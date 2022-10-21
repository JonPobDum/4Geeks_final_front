const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
      login: (correo, contraseña) => {
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
          "https://3000-jonpobdum-4geeksfinalba-21srwcgl2gr.ws-us71.gitpod.io/api/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => localStorage.setItem("token", result.token))
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
