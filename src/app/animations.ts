import { trigger, state, style, animate, transition, keyframes, group} from '@angular/animations';

export const flyInOut = trigger('flyInOut', [
    transition('* => void', [
      animate('2000ms', style({
        transform: 'translateX(100%)'
      }))
    ])
  ])

  export const fadeInLeft =
    trigger('fadeInLeft', [
        transition('void => *', animate('0.6s', keyframes([
            style({opacity: '0', transform: 'translate3d(-10%, 0, 0)', offset: 0}),
            style({opacity: '1', transform: 'none', offset: 1})
        ])))
    ]);


  export const fadeInOnLeaving =
    trigger('fadeInOnLeaving', [
        transition('* => void', animate('0.4s', keyframes([
            style({opacity: '0', transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: '1', transform: 'translate3d(10%, 0, 0)', offset: 1})
        ])))
    ]);



export const fadeInDown =
    trigger('fadeInDown', [
        transition('void => *', animate('1.5s 250ms', keyframes([
            style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: '1', transform: 'none', offset: 1})
        ])))
    ]);

export const fadeInRight =
    trigger('fadeInRight', [
        transition('void => *', animate('0.6s', keyframes([
            style({opacity: '0', transform: 'translate3d(10%, 0, 0)', offset: 0}),
            style({opacity: '1', transform: 'none', offset: 1})
        ])))
    ]);


export const bounceIn =
    trigger('bounceIn', [
        transition('void => *', animate('0.5s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
            style({transform: 'scale3d(3, 3, 3)', offset: 0}),
            style({transform: 'scale3d(1.6, 1.6, 1.6)', offset: 0.2}),
            style({transform: 'scale3d(.7, .7, .7)', offset: 0.4}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.6}),
            style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
            style({transform: 'scale3d(1, 1, 1)', offset: 1})
        ])))
    ]);



 export const shakeWithDelay =
    trigger('shakeWithDelay', [
        transition('void => *', animate('0.5s 1s', keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-8px, 0, 0)', offset: 0.2}),
            style({transform: 'translate3d(8px, 0, 0)', offset: 0.4}),
            style({transform: 'translate3d(-8px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(8px, 0, 0)', offset: 0.8}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ])))
    ]);

 export const shake =
    trigger('shake', [
        transition('void => *', animate('0.5s 250ms', keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-8px, 0, 0)', offset: 0.2}),
            style({transform: 'translate3d(8px, 0, 0)', offset: 0.4}),
            style({transform: 'translate3d(-8px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(8px, 0, 0)', offset: 0.8}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ])))
    ]);

export const slideDown =
    trigger('slideDown', [
        transition('void => *', animate('0.5s 250ms', keyframes([
            style({transform: 'translateY(-40%)', offset: 0}),
            style({transform: 'translateY(8%)', offset: 0.5}),
            style({transform: 'translateY(-4%)', offset: 0.65}),
            style({transform: 'translateY(4%)', offset: 0.8}),
            style({transform: 'translateY(-2%)', offset: 0.95}),
            style({transform: 'translateY(0%)', offset: 1})
        ])))
    ]);

export const bounceOutDown =
    trigger('bounceOutDown', [
        transition('void => *', animate('0.5s 250ms', keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2}),
            style({transform: 'translate3d(0, -5px, 0)', opacity: '1', offset: 0.4}),
            style({transform: 'translate3d(0, 200px, 0)', opacity: '0', offset: 1})
        ])))
    ]);

    export const wobble =
    trigger('wobble', [
        transition('void => *', animate('1s 250ms', keyframes([
            style({transform: 'translate(0%)', offset: 0}),
            style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15}),
            style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45}),
            style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6}),
            style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75}),
            style({transform: 'translateX(0%)', offset: 1})
        ])))
    ]);


export const zoomIn =
    trigger('zoomIn', [
        transition('void => *', animate('0.5s 250ms', keyframes([
            style({transform: 'scale3d(0, 0, .1)  ', opacity: '0', offset: 0.8}),
            style({transform: 'none', opacity: '1', offset: 1})
        ])))
    ]);

    export const fadeOutUp =
    trigger('fadeOutUp', [
        transition('void => *', animate('0.5s 250ms', keyframes([
            style({opacity: '1', transform: 'none', offset: 0}),
            style({opacity: '0', transform: 'translate3d(0, -10%, 0)', offset: 1})
        ])))
    ]);


export const hinge =
    trigger('hinge', [
        transition('void => *', animate('1s 250ms', keyframes([
            style({ transformOrigin: 'top left', offset: 0 }),
            style({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 }),
            style({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4 }),
            style({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 }),
            style({ transform: 'rotate3d(0, 0, 1, 60deg)', opacity: '1', offset: 0.8 }),
            style({ transform: 'translate3d(0, 700px, 0)', opacity: '0', offset: 1 })
        ])))
    ]);