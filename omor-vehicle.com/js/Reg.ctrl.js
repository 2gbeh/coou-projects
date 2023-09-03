"use strict";

class Reg 
{
  static #users = Context.db.user;
  static #nav = 'reg.html';
  
  static save() {
    const form = document.forms[0];
    const labels = nodes('label');    
    let label, input_n, input_v, error = false;
    let chassis_no = form.elements[10].value.trim();  // change 0 to 9
   
    for (let i = 0; i < (form.length - 2); i++) {      
      label =  labels[i].innerText;
      input_n = form.elements[i].name;
      input_v = form.elements[i].value;

      if (isEmpty(input_v) === true) {
        handleNotice(`<b>${label}</b> is required, kindly provide details before submitting.`, 300);
        error = true;
        break;
      } else {
          setCookies(`db-${chassis_no}-${input_n}`, input_v);
      } 
    }

    if (error === true) {   
      // endCookies();
    } else {
      handleNotice('Vehicle registered successfully', 200);
      form.reset();   
    }

    console.dir(allCookies());
  }  
}