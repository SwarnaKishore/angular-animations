import { Component } from '@angular/core';
import { flyInOut, wobble, bounceIn, fadeInDown, fadeOutUp, slideDown, fadeInLeft, fadeInRight, zoomIn, shake, shakeWithDelay, hinge, fadeInOnLeaving, bounceOutDown  } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [flyInOut, wobble, bounceIn, fadeInDown, fadeOutUp, slideDown, fadeInLeft, fadeInRight, zoomIn, shake, shakeWithDelay, hinge, fadeInOnLeaving, bounceOutDown ]
})
export class AppComponent {
 align = 'start';
}
