/*   const people =[{
    "id": 1,
    "first_name": "Jessalyn",
    "last_name": "Childes",
    "email": "jchildes0@bbc.co.uk",
    "gender": "Bigender",
    "ip_address": "141.208.195.40"
  }, {
    "id": 2,
    "first_name": "Marti",
    "last_name": "Corking",
    "email": "mcorking1@ifeng.com",
    "gender": "Male",
    "ip_address": "154.30.160.138"
  }, {
    "id": 3,
    "first_name": "Bartram",
    "last_name": "Mulford",
    "email": "bmulford2@photobucket.com",
    "gender": "Bigender",
    "ip_address": "93.102.156.114"
  }, {
    "id": 4,
    "first_name": "Lindon",
    "last_name": "McGlynn",
    "email": "lmcglynn3@addtoany.com",
    "gender": "Male",
    "ip_address": "220.18.64.124"
  }, {
    "id": 5,
    "first_name": "Mart",
    "last_name": "Duinbleton",
    "email": "mduinbleton4@tuttocitta.it",
    "gender": "Female",
    "ip_address": "173.225.100.74"
  }, {
    "id": 6,
    "first_name": "Adoree",
    "last_name": "Toynbee",
    "email": "atoynbee5@boston.com",
    "gender": "Male",
    "ip_address": "155.248.60.21"
  }, {
    "id": 7,
    "first_name": "Benny",
    "last_name": "Delouch",
    "email": "bdelouch6@ft.com",
    "gender": "Genderfluid",
    "ip_address": "97.221.51.230"
  }, {
    "id": 8,
    "first_name": "Korella",
    "last_name": "Heathcote",
    "email": "kheathcote7@mediafire.com",
    "gender": "Agender",
    "ip_address": "16.225.182.133"
  }, {
    "id": 9,
    "first_name": "Reinhard",
    "last_name": "Ashment",
    "email": "rashment8@sakura.ne.jp",
    "gender": "Female",
    "ip_address": "13.157.72.71"
  }, {
    "id": 10,
    "first_name": "Jaye",
    "last_name": "Nel",
    "email": "jnel9@kickstarter.com",
    "gender": "Genderqueer",
    "ip_address": "96.166.201.252"
  }];
 */
const inventors = [{"id":1,"first_name":"Fancy","last_name":"Plowman","email":"fplowman0@wikimedia.org","gender":"Polygender","birth_date":1995},
{"id":2,"first_name":"Giulia","last_name":"Macknish","email":"gmacknish1@reverbnation.com","gender":"Male","birth_date":1998},
{"id":3,"first_name":"Bram","last_name":"Sabater","email":"bsabater2@netlog.com","gender":"Genderfluid","birth_date":2000},
{"id":4,"first_name":"Nixie","last_name":"Newlyn","email":"nnewlyn3@paypal.com","gender":"Bigender","birth_date":1992},
{"id":5,"first_name":"Odilia","last_name":"Blakely","email":"oblakely4@bigcartel.com","gender":"Non-binary","birth_date":2000},
{"id":6,"first_name":"Sara-ann","last_name":"Uttridge","email":"suttridge5@infoseek.co.jp","gender":"Agender","birth_date":1994},
{"id":7,"first_name":"Lisle","last_name":"Crooke","email":"lcrooke6@opensource.org","gender":"Male","birth_date":1999},
{"id":8,"first_name":"Ario","last_name":"Rattenberie","email":"arattenberie7@google.com.hk","gender":"Male","birth_date":2000},
{"id":9,"first_name":"Bealle","last_name":"Paramore","email":"bparamore8@live.com","gender":"Non-binary","birth_date":1998},
{"id":10,"first_name":"Cletis","last_name":"Kiezler","email":"ckiezler9@nsw.gov.au","gender":"Agender","birth_date":1989}];
/*  const genderQueerInventors = inventors.filter(inventor => {return inventor.gender === "Genderqueer"
        return true;
    
});  */

const sortedNameInventor = inventors.sort((a,b) => {
  if (a.birth_date < b.birth_date)
    return -1;
})
const actualYera = new Date().getFullYear();

const oldestToYoungest = inventors.map(inventor =>{
  return {
    name: inventor.first_name + "" + inventor.last_name ,
    birth: inventor.birth_date
    }
}) 



const reducedInventors = inventors.reduce((total, inventor)=> {
  return total + inventor.birth_date;
}, 0);

/* const numberArray = [1, 200, 40, 3000]; */

/* console.log(numberArray.sort()); */

console.table(sortedNameInventor);

/* console.table(genderQueerInventors); */
 console.table(reducedInventors);
 console.table(mappedInventorsName);
/* onsole.table(inventors); */