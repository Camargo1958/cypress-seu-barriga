const loginBuilder = {
  
    loginSuccess : {
        username : Cypress.env("login_success").username,
        password : Cypress.env("login_success").password
      },

    loginUserInvalid : {
      username : Cypress.env("login_user_invalid").username,
      password : Cypress.env("login_user_invalid").password
    },
  
    loginPassInvalid : {
      username : Cypress.env("login_pass_invalid").username,
      password : Cypress.env("login_pass_invalid").password
    },
  
    userNotFilled : {
      username : '',
      password : Cypress.env("user_not_filled").password
    },
  
    passNotFilled :{
      username : Cypress.env("pass_not_filled").username,
      password : ''
    }
      
}

export default loginBuilder;