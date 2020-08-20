import { FormControl} from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  control: FormControl = new FormControl('');
  ngOnInit(): void {
  }
  

}
