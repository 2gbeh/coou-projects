"use strict";

class Auth 
{
  // static #users = Context.db.user;
  static #users = this.useFetch;
  static #nav = 'dash.html';

  static get useFetch() {
    const ss = allCookies(); 
    let col = [], obj = {}, key = '', value = '';
    let base = [], keys = [];
    
    var i = -1;
    for (let path in ss) {
      if (path.substr(0, 2) === 'db') {
        base = path.split('-');

        if (! keys.includes(base[1])) {
          keys.push(base[1]);
          i += 1;
        }
        
        key = base[2];
        value = ss[path];
        obj[key] = value;
        col[i] = obj;        
      }
    }

    return col;
  }

  static get chassisNos() {
    let arr = [];
    for (let e of this.#users) {
      arr.push(toLower(e.chassis_no)); 
    }
    return arr;    
  }
  
  static search() {
    // dir(this.#users);
    // return 1;
    const selector = 'main .forms form input', q = get(selector, true);

    if (isEmpty(q) === true) {
      handleNotice('Vehicle chassis number search field is empty', 300);
    } else if (this.chassisNos.indexOf(toLower(q)) == -1) {
      handleNotice('Vehicle chassis number not found in database records', 400);
    } else {
      setSession(q, true); 
      handleNotice('Vehicle chassis number is found in database records', 200);
      href(`${this.#nav}?q=${q}`);
    }
    
    set(selector, q, true);
  }  
}