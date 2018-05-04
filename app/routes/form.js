import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {"id":"110",
    "jurisdiction":"California (CA)",
    "entityType":"Fiduciaries",
    "desc":"California Fiduciary Income Tax Return ",
    "name":"541",
    "link":"https://www.ftb.ca.gov/forms/2017/17_541.pdf#",
    "instructionsLink":"https://www.ftb.ca.gov/forms/2017/17_541bk.pdf",
    "efileRrequiredDesc":"Yes",
    "efileAllowedDesc":"Depends",
    "dd":"04/15/2018",
    "fiscalDdDesc":"Five months after fiscal year end",
    "extDd":"09/15/2018",
    "fiscalExtDdDesc":"Five months after fiscal year end"}
  }


});
