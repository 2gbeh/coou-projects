"use strict";

class Auth 
{
  static #users = Context.db.user;
  static #nav = 'dash.html';
  
  static get ticketNos() {
    let arr = [];
    for (let e of this.#users) {
      arr.push(toLower(e.ticket_no)); 
    }
    return arr;    
  }
  
  static search() {
    const selector = 'main .forms form input', q = get(selector, true);

    if (isEmpty(q) === true) {
      handleNotice('Flight ticket number search field is empty', 300);
    } else if (this.ticketNos.indexOf(toLower(q)) == -1) {
      handleNotice('Flight ticket number not found in database records', 400);
    } else if (getSession(q)) {
      handleNotice('Flight ticket number has been authenticated already', 100);
    } else {
      setSession(q, true); 
      handleNotice('Flight ticket number is found in database records but not yet authenticated', 200);
      href(`${this.#nav}?q=${q}`);
    }
    
    set(selector, q, true);
  }  
}