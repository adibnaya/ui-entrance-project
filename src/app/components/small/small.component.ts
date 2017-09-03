import { Component } from '@angular/core';

@Component({
  selector: 'small-component',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent {
  tasks = [{title: "New website for Symu.co" , days: "5 days delays" , color: "F94E87" , icons:["n", "red", "thin-hamburger"]},
            {title: "Free business PSD Template" , days: "2 days delays" , color: "F94E87" , icons:["f", "red", "thin-hamburger"]},
            {title: "New logo for JCD.pl" , days: "5 days left" , color: "8694B1" , icons:["n", "grey", "thin-hamburger"]},
            {title: "Free Icons Set vol. 3" , days: "10 days left" , color: "8694B1" , icons:["f", "grey", "thin-hamburger"]}];
  messages = [{name: "Nina Jones" , time: "5 minutes ago" , text: "Hey You! Its me again :-) I attached new(...)" , isNew: true , icons:["nina-jones","arrow-round","setting-small"]},
            {name: "Nina Jones" , time: "About 20 hours ago" , text: "Hey! attached some new PDS files for (...)" , isNew: true , icons:["nina-jones","arrow-round","setting-small"]},
            {name: "James Smith" , time: "2 days ago" , text: "Good morning, you are fired!" , isNew: false , icons:["james-smith","arrow-round","setting-small"]},
            {name: "Nina Jones" , time: "About 2 weeks ago" , text: "Hello! Could You bring me coffee please?" , isNew: false , icons:["nina-jones","arrow-round","setting-small"]}];
  activites = [{name: "Nina Jones" , time: "Just now" , action: "added a new project" , task: "Free UI Kit" , icon:"nina-jones" , pretext: ""},
            {name: "James Smith" , time: "40 minutes ago" , action: "commented project" , task: "Free PSD Template" , icon:"james-smith" , pretext: ""},
            {name: "Alex Clooney" , time: "1 hour ago" , action: "completed task" , task: "Website" , icon:"alex-clooney" , pretext: "Symu"},
            {name: "Alexandra Spears" , time: "3 hours ago" , action: "added a new project" , task: "Free PSD (...)" , icon:"alexandra-spears" , pretext: ""}];
}
