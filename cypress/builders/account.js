const accountBuilder = {
  
    newAccountSuccess : {
        accountName : Cypress.env("new_account").accountName
      }
}

export default accountBuilder;