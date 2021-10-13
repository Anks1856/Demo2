export const getAllCityAPI = () =>
  fetch("http://18.224.192.228/graphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query
            Query {
             Users {
               id
               name
             }
           }
           `,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return { success: true, data: data.data };
    })
    .catch((err) => {
      return {
        success: false,
        message: "We are working on this please try after some time",
      };
    });

// export const getLogin = (UserName, Password) => (
//     fetch('http://18.224.192.228/graphql/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             query: `
//                 mutation TokenMutation($loginInput: LoginInput!) {
//                     Login(input: $loginInput) {
//                     token
//                     user {
//                         username
//                       }
//                     }
//                 }
//            `,
//             variables: {
//                 loginInput: {
//                     username: "harry",
//                     password: "Pass@123"
//                 }
//             },
//         })
//     }).then(res => res.json())
//         .then(data => {
//             alert(UserName)
//             console.log(data, "data: data.data");
//             return { success: true, data: data.data }
//         }).catch((err) => {
//             console.log(err, "data: err.err");
//             return { success: false, message: "We are working on this please try after some time" }
//         })
// );
