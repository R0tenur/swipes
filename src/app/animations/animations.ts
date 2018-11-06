import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> stock', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',

        })
      ]),
      query(':enter', [
        style({ top: '100vh' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('900ms ease-out', style({ display: 'none' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ display: 'block'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('hej <=> he', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
