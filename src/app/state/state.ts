import { Subject } from "../../../node_modules/rxjs";
import { Injectable } from "../../../node_modules/@angular/core";

export class Member {
  name: string
  degree: string
  skills: string[]
}

const init_members: Member[] = [
  { name: "Ben Pinhorn", degree: "Computer Science", skills: ["Java", "Angular", "C"] },
  { name: "Mark Zucc", degree: "Facebook school of being the boss", skills: ["Drinking Water", "Smiling", "PHP :("] },
  { name: "Rob James", degree: "Software Engineering", skills: ["Java", "Java", "Java"] }
]

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private _members: Member[]

  get members() {
    return this._members
  }

  constructor() {
    this._members = init_members
  }

  addMember(m: Member): Member[] {

    this.members.push(m)
    return this.members
  }

  removeMember(i: number): Member[] {

    /**
     * Exlude the element at i
     */
    let left = this.members.slice(0, i - 1)
    let right = this.members.slice(i + 1)

    this._members = left.concat(right) //add the two halves back together

    return this.members
  }
}