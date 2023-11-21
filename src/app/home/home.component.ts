import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeTab: string = 'params';
  selectedTab: string  = 'params';
  selectedOption: string = 'none';



  showTab(tabId: string) {
    this.activeTab = tabId;
    this.selectedTab=tabId;
  }

}
