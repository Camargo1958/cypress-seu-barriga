const registerBuilder = {
  
    registerSuccess : {
        username : Cypress.env("new_user").username,
        email: Cypress.env("new_user").email, 
        password : Cypress.env("new_user").password
      }
}

export default registerBuilder;