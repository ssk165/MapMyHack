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
  final: any;
  constructor() {
    this.distance = 0;
    this.time = 0;
    this.wayOfTransport = "walking";
    this.chips = {
      dining: {
        color: "white",
        textnicon: "#f44336",
        selected: false
      },
      entertainment: {
        color: "white",
        textnicon: "#ffc107",
        selected: false
      },
      adventure: {
        color: "white",
        textnicon: "#2e7d32",
        selected: false
      },
      tourism: {
        color: "white",
        textnicon: "#1769aa",
        selected: false
      },
      shopping: {
        color: "white",
        textnicon: "#9c27b0",
        selected: false
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
      this.things.splice(this.things.indexOf('dining'), 1);
      this.chips.dining.selected = !this.chips.dining.selected;
      this.chips.dining.color = "white";
      this.chips.dining.textnicon = "#f44336";
    } else {
      this.chips.dining.selected = !this.chips.dining.selected;
      this.things.push("dining");
      this.chips.dining.color = "#f44336";
      this.chips.dining.textnicon = "white";
    };
  }

  entertainment() {
    if (this.chips.entertainment.selected) {
      this.things.splice(this.things.indexOf('entertainment'), 1);
      this.chips.entertainment.selected = !this.chips.entertainment.selected;
      this.chips.entertainment.color = "white";
      this.chips.entertainment.textnicon = "#ffc107";
    } else {
      this.chips.entertainment.selected = !this.chips.entertainment.selected;
      this.things.push("entertainment");
      this.chips.entertainment.color = "#ffc107";
      this.chips.entertainment.textnicon = "white";
    };
  }

  adventure() {
    if (this.chips.adventure.selected) {
      this.things.splice(this.things.indexOf('adventure'), 1);
      this.chips.adventure.selected = !this.chips.adventure.selected;
      this.chips.adventure.color = "white";
      this.chips.adventure.textnicon = "#2e7d32";
    } else {
      this.chips.adventure.selected = !this.chips.adventure.selected;
      this.things.push("adventure");
      this.chips.adventure.color = "#2e7d32";
      this.chips.adventure.textnicon = "white";
    };
  }

  tourism() {
    this.things.push("tourism");
    if (this.chips.tourism.selected) {
      this.things.splice(this.things.indexOf('tourism'), 1);
      this.chips.tourism.selected = !this.chips.tourism.selected;
      this.chips.tourism.color = "white";
      this.chips.tourism.textnicon = "#1769aa";
    } else {
      this.chips.tourism.selected = !this.chips.tourism.selected;
      this.things.push("tourism");
      this.chips.tourism.color = "#1769aa";
      this.chips.tourism.textnicon = "white";
    };
  }

  shopping() {
    this.things.push("shopping");
    if (this.chips.shopping.selected) {
      this.things.splice(this.things.indexOf('shopping'), 1);
      this.chips.shopping.selected = !this.chips.shopping.selected;
      this.chips.shopping.color = "white";
      this.chips.shopping.textnicon = "#9c27b0";
    } else {
      this.chips.shopping.selected = !this.chips.shopping.selected;
      this.things.push("shopping");
      this.chips.shopping.color = "#9c27b0";
      this.chips.shopping.textnicon = "white";
    };
  }

  submit() {
    this.final = {
      distance: this.distance,
      time: this.time,
      wayoftravel: this.wayOfTransport,
      things: this.things
    }
    console.log(this.final);
  }

}
