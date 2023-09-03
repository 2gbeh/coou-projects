"use strict";

class Dash 
{
  static #users = Context.db.user;
  static #nav = 'auth.html';

  constructor() {        
    if (Request.exist('q') == true) {
      var q = Request.read('q');
      handleNotice(`Showing passenger information of flight ticket number <b>#${q}</b>`, 100);
      Dash.profile(q);
    }
  } 
  
  static photo_f (p) {
    let buf = p != undefined && p.length >= 5 && p.indexOf('.') > 0? p: 'default.png';
    return `background-image: url('./uploads/${buf}')`;
  } 

  static profile(q) {
    const row = this.#users.filter(arr => toLower(arr['ticket_no']) == toLower(q)), e = row[0],
    th = nodes('main .tables table tr th'), td = nodes('main .tables table tr td'),
    n = this.#users.length, p = Math.round((1 * 100) / n),
    d = new Calendar(`${e.flight_date}T${e.flight_time}`);

    th[0].querySelector('figure').style = this.photo_f(e.photo);
    th[0].querySelector('h1').innerHTML = `OTP ${e.otp}`;
    td[0].querySelector('p').innerHTML = `${names_f(e.names)} (Age ${e.age})`;
    
    td[1].querySelector('p').innerHTML = `Booked flight; <u>${names_f(e.airline)}</u> from <u>${e.departure}</u> to <u>${e.destination}</u> on <u>${d.date_t()}</u> at <u>${d.time_t()}.</u>`;
    td[2].querySelector('p').innerHTML = `1 / ${n} &nbsp; (~${p}%)`;
    td[2].querySelector('ol').title = `${p}%`; 
    td[2].querySelector('ol li').style.width = `${p}%`;
    
    td[3].querySelector('p').innerHTML = names_f(e.names);
    td[4].querySelector('p').innerHTML = e.married < 1? 'Single': 'Married';
    td[5].querySelector('p').innerHTML = `<a href="tel:${e.phone}">${e.phone}</a>`;
    td[6].querySelector('p').innerHTML = e.address;
    td[7].querySelector('p').innerHTML = e.soo;
    td[8].querySelector('p').innerHTML = `${e.lga}, ${e.town}`;
    td[9].querySelector('p').innerHTML = e.kin;

    td[10].querySelector('p').innerHTML = `&#8358; ${money_f(e.amount)}.00`;
    td[11].querySelector('p').innerHTML = `${e.airline}`;
    td[12].querySelector('p').innerHTML = `#${e.ticket_no}`;
    td[13].querySelector('p').innerHTML = e.departure;
    td[14].querySelector('p').innerHTML = e.destination;
    td[15].querySelector('p').innerHTML = d.date_t();
    td[16].querySelector('p').innerHTML = d.time_t();
  }
}

new Dash();