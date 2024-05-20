import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  week: Array<any> = [];
  processing: Array<any> = [];
  constructor() {
    this.week = [
      { day: 'Monday', hour: '09:00am - 11:00pm' },
      { day: 'Tuesday', hour: '09:00am - 11:00pm' },
      { day: 'Wednesday', hour: '09:00am - 11:00pm' },
      { day: 'Thursday', hour: '09:00am - 11:00pm' },
      { day: 'Friday', hour: '09:00am - 11:00pm' },
      { day: 'Satuarday', hour: '09:00am - 11:00pm' },
      { day: 'Sunday', hour: '09:00am - 11:00pm' },
    ];

    this.processing = [
      { heading: 'SMOKED', price: '$4.50/LB' ,  description:'Manicured fillet is brined in our signature recipe Of sea salt. brown sugar and honey then dried overnight in achilled environment. Catch is smoked the following morning With a natural wood mix Of hickory and sugarmaple then vac sealed.' },
      { heading: 'FRESH PACKED', price: '$2.50/LB' ,  description:'Manicured fillet is sanitized. vacuum packed and flash frozen in approximately 1.5 lb packages.' },
      { heading: 'ZIP LOCKED', price: '$1.50/LB' ,  description:'Manicured fillet is sanitized and flash frozen in zip lock bags.' },
      { heading: 'FEEZ & STORE', price: '$0.75/LB' ,  description:'Clients catch is packaged and delivered by client and flash frozen and stored for a limited time. No long term storage.' },
      { heading: 'FILET SERVICE', price: '$0.50/LB' ,  description:'Clients catch is filleted and delivered to the client immediately.' },
      { heading: 'MARLIN BILL PROCESSING', price: '$10' ,  description:'Marlin bill is removed. salted. wrapped and flash frozen' },


    ];


  }
}
