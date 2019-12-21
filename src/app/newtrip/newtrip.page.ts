import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.page.html',
  styleUrls: ['./newtrip.page.scss'],
})
export class NewtripPage implements OnInit {

  distance: number;
  time: number;
  wayOfTransport: string;
  things: Array<string> = [];
  chips: any;

  constructor() {
    this.distance = 0;
    this.time = 0;
    this.wayOfTransport = "walking";
    this.chips = {
      dining: {
        color: "light",
        textnicon: "#f44336",
        selected: false
      },
      entertainment: {
        color: "light",
        textnicon: "#ffc107",
        selected: true
      },
      adventure: {
        color: "light",
        textnicon: "#2e7d32",
        selected: true
      },
      tourism: {
        color: "light",
        textnicon: "#1769aa",
        selected: true
      },
      shopping: {
        color: "light",
        textnicon: "#9c27b0",
        selected: true
      },
    };
  }

  ngOnInit() {
  }

  checkValue(event) {
    this.wayOfTransport = event.detail.value;
  }

  dining() {
    if (this.chips.dining.selected) {
      this.chips.dining.selected = !this.chips.dining.selected;
      this.chips.dining.color = "light";
      this.chips.dining.textnicon = "#f44336";
      console.log(this.chips.dining);
    } else {
      this.chips.dining.selected = !this.chips.dining.selected;
      this.things.push("pizza");
      this.chips.dining.color = "#f44336";
      this.chips.dining.textnicon = "light";
      console.log(this.chips.dining);
    };
  }

  entertainment() {
    this.things.push("entertainment");
  }

  adventure() {
    this.things.push("adventure");
  }

  tourism() {
    this.things.push("tourism");
  }

  shopping() {
    this.things.push("shopping");
  }

}
