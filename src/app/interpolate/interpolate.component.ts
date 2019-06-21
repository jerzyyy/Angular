import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  constructor() { }
  prenom: string = "Jerzy"
  nom: string = "Yengo"
  formation: object = new Formation("Javascript", "I have the key of my success!!")
  formationJs: Formation;
  isHidden: boolean = false;
  color: string = "red";
  isDisplay: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.formationJs = new Formation("Java", "Bad thing !! Lmfao")
    }, 3000)
    setInterval(() => {
      //this.isHidden = !this.isHidden;
      this.color = this.color === "red" ? "yellow" : "red"
      this.isDisplay = !this.isDisplay
    }, 1000)
  }

  onClick(){
    this.isHidden = !this.isHidden;
    console.log("c marche")
  }
  getFullName(): string {
    return this.prenom + this.nom
  }
  mouse(){
    console.log("on it")
  }
  mouseO(){
    console.log("right")
  }
}
