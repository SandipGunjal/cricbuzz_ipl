import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { routes } from './../app.routes';
import { Router } from '@angular/router';



interface User {
  name?:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private loggedInKey = 'loggedIn'

  // db.json data URL database
  // baseUrl:string = "http://localhost:3000/livescore"
  // playerUrl:string = "http://localhost:3000/players"
  // pointTableUrl:string = "http://localhost:3000/pointTable"
  // t20Url:string = "http://localhost:3000/T20"
  // testUrl:string = "http://localhost:3000/TEST"
  // odiUrl:string = "http://localhost:3000/ODI"
  // matchesUrl:string = "http://localhost:3000/matches"

// --------------------------------------------------------------------------------
  
// Back end API data URL link
  URL:string = "https://cricbuzz-5.onrender.com"
  baseUrl:string = "http://localhost:8080/livescores"
  playerUrl:string = "http://localhost:8080/players"
  pointTableUrl:string = "http://localhost:8080/pointtable"
  matchesUrl:string = "http://localhost:8080/matches"
  t20Url:string = "http://localhost:8080/t20"
  testUrl:string = "http://localhost:8080/test"
  odiUrl:string = "http://localhost:8080/odi"

  // userLoginAPI:string = "http://localhost:3000/users"
  userLoginAPI:string = "http://localhost:8080"

  constructor(private http : HttpClient , public router:Router , private jwtHelper: JwtHelperService) { }


// GET - get match data 
getMatchScore(){
  return this.http.get(`${this.URL}/livescores`)
}

// GEt - get a player all data 
getPlayerData(){
 return this.http.get(`${this.URL}/players`)
}

//GET point table data
getPointTable(){
  return this.http.get(`${this.URL}/pointtable`)
}

//GET matches data 
matches(){
  return this.http.get(`${this.URL}/matches`)
}

// POST - post a data in players api
addPlayerData(players:any){
  return this.http.post(`${this.URL}/players`,players);
}

// UPDATE - Update a players data
updatePlayer(id:string){
  return this.http.get(`${this.URL}/players/${id}`);
}

updatePlayerData(playerData:any){
  return this.http.put(`${this.URL}/players/${playerData._id}`,playerData)
}

// DELETE - Delete Player recodes
deletePlayers(id:string){
  return this.http.delete(`${this.URL}/players/${id}`)
}

// GET - get T20 data
t20Data(){
 return this.http.get(`${this.URL}/t20`)
}

// GET - get test data
testData(){
  return this.http.get(`${this.URL}/test`)
}

//GET  - get a ODI data
odiData(){
  return this.http.get(`${this.URL}/odi`)
}

// User SingUP Data Post to API
usersSignUp(user:User):Observable<any>{
  return this.http.post(`${this.URL}/signup`,user)
}

// User Login GET data in API 
usersLogin(user: User):Observable<any>{
  return this.http.post(`${this.URL}/login`,user)
}


login(){
  sessionStorage.setItem(this.loggedInKey,'true')
}

logout(){
  sessionStorage.removeItem(this.loggedInKey)
}

// logOut():void{
//   localStorage.removeItem('token')
//   this.router.navigate(['/login']);
// }
// isAuthenticated(): boolean{
//   const token = localStorage.getItem('token');
//   return !token && !this.jwtHelper.isTokenExpired(token);
// }

isLoggedIn():boolean{
  return sessionStorage.getItem(this.loggedInKey) === 'true'
}

}
