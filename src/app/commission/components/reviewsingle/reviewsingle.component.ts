import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-reviewsingle',
  templateUrl: './reviewsingle.component.html',
  styleUrl: './reviewsingle.component.css'
})
export class ReviewsingleComponent {

    @Input() clientname !: string ;
    @Input() clientlink !: string ;
    @Input() type !: string ;
    @Input() note !: number ;
    @Input() comment !: string ;
}
