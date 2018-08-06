import { Injectable } from "../../../node_modules/@angular/core";

export class User {
    name: string
    username: string
    password: string
    degree: string
    skills: string[]

    constructor(name: string, username: string, password: string, degree: string, skills: string[]) {
        this.name = name
        this.username = username
        this.password = password
        this.degree = degree
        this.skills = skills
    }
}

const init_users: User[] = [
    {
        name: "Ben Pinhorn",
        username: '00benallen',
        password: 'pass',
        degree: "Computer Science",
        skills: ["Java", "Angular", "C"]
    },
    {
        name: "Mark Zucc",
        username: 'TheZucc',
        password: 'pass',
        degree: "Facebook school of being the boss",
        skills: ["Drinking Water", "Smiling", "PHP :("]
    },
    {
        name: "Rob James",
        username: 'rbjames',
        password: 'pass',
        degree: "Software Engineering",
        skills: ["Java", "Java", "Java"]
    }
]

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    private _users: User[]
    private _loggedIn: boolean
  
    get users() {
      return this._users
    }

    get loggedIn() {
        return this._loggedIn
    }
  
    constructor() {
      this._users = init_users
    }

    addUser(m: User): User[] {

        this.users.push(m)
        return this.users
      }
    
      removeMember(i: number): User[] {
    
        /**
         * Exlude the element at i
         */
        let left = this.users.slice(0, i - 1)
        let right = this.users.slice(i + 1)
    
        this._users = left.concat(right) //add the two halves back together
    
        return this.users
      }
  
    login(username: string, password: string): boolean {

        let foundUser = this.users.find((user)=> {
            return user.username === username 
            &&     user.password === password
        })

        if(foundUser) {
            this._loggedIn = true
        }
        return this.loggedIn
    }
  }