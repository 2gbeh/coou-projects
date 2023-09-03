"use strict";

class Dash 
{
  // static #users = Context.db.user;
  static #users = this.useFetch;
  static #nav = 'auth.html';

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

  constructor() {          
    if (Request.exist('q') == true) {
      var q = Request.read('q');
      handleNotice(`Showing owner information of vehicle chassis number <b>#${q}</b>`, 100);
      Dash.profile(q);
    }
  } 
  
  static photo_f (p) {
    dir(this.#users);
    
    let buf = p != undefined && p.length >= 5 && p.indexOf('.') > 0? p: 'default.png';
    // return `background-image: url('./uploads/${buf}')`;
    return `background-image: url('./uploads/${this.#users[0].photo.split('\\').pop()}')`;
  } 

  static profile(q) {
    const row = this.#users.filter(arr => toLower(arr['chassis_no']) == toLower(q)), e = row[0],
    th = nodes('main .tables table tr th'), td = nodes('main .tables table tr td'),
    n = this.#users.length, p = Math.round((1 * 100) / n),
    d = new Calendar(`${e.dob} 00:00:00`);

    th[0].querySelector('figure').style = this.photo_f(e.photo);
    th[0].querySelector('h1').innerHTML = `Chassis No. #${q}`;
    td[0].querySelector('p').innerHTML = names_f(e.names);
    
    td[1].querySelector('p').innerHTML = `This vehicle with Plate No. <u>${e.plate_no}</u> was registered by <u>${names_f(e.names)}</u> in <u>${names_f(e.reg_state)}, Nigeria</u> on <u>${d.date_t()}.</u>`;
    // td[2].querySelector('p').innerHTML = `1 / ${n} &nbsp; (~${p}%)`;
    // td[2].querySelector('ol').title = `${p}%`; 
    // td[2].querySelector('ol li').style.width = `${p}%`;
    
    td[2].querySelector('p').innerHTML = e.married < 1? 'Single': 'Married';
    td[3].querySelector('p').innerHTML = `<a href="tel:${e.phone}">${e.phone}</a>`;
    td[4].querySelector('p').innerHTML = e.address;
    td[5].querySelector('p').innerHTML = `${e.lga}, ${e.soo}`;
    td[6].querySelector('p').innerHTML = e.country;    
    td[7].querySelector('p').innerHTML = e.occupation;

    td[8].querySelector('p').innerHTML = e.plate_no;
    td[9].querySelector('p').innerHTML = e.engine_no;
    td[10].querySelector('p').innerHTML = e.chassis_no;
    td[11].querySelector('p').innerHTML = e.reg_state;
    td[12].querySelector('p').innerHTML = e.reg_no;
    td[13].querySelector('p').innerHTML = d.date_t();
  }
}

new Dash();