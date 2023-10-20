// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-doctor-cell',
//   template: `
//     <button type="button" class="btn w-100" [ngClass]="{'btn-danger': !isBooked, 'btn-primary': isBooked}" 
//         (click)="toggleAppointment()">
//         {{ isBooked ? 'Записатись' : 'Скасувати запис' }}
//     </button>

//   `,
// })

// export class DoctorCellComponent {
//   @Input() isBooked: boolean = localStorage.getItem('isBooked') === 'true' || false;

//   toggleAppointment(): void {
//     this.isBooked = !this.isBooked;
//     localStorage.setItem('isBooked', this.isBooked.toString());
//   }
// }


// export class DoctorCellComponent {
//   @Input() isBooked: boolean = false;

//   toggleAppointment(): void {
//     this.isBooked = !this.isBooked;
//   }
// }

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-doctor-cell',
//   template: `
//     <button type="button" class="btn w-100" [ngClass]="{'btn-danger': !isBooked, 'btn-primary': isBooked}" 
//         (click)="toggleAppointment()">
//         {{ isBooked ? 'Записатись' : 'Скасувати запис' }}
//     </button>
//   `,
// })
// export class DoctorCellComponent {
//   @Input() isBooked: boolean = false;

//   ngOnInit() {
//     const storedIsBooked = localStorage.getItem('isBooked');
//     if (storedIsBooked) {
//       this.isBooked = JSON.parse(storedIsBooked);
//     }
//   }

//   toggleAppointment(): void {
//     this.isBooked = !this.isBooked;
//     localStorage.setItem('isBooked', JSON.stringify(this.isBooked));
//   }
// }


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctor-cell',
  template: `
    <button type="button" class="btn w-100" [ngClass]="{'btn-danger': !isBooked, 'btn-primary': isBooked}" 
        (click)="toggleAppointment()">
        {{ isBooked ? 'Записатись' : 'Скасувати запис' }}
    </button>
  `,
})
export class DoctorCellComponent {
  @Input() isBooked: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  toggleAppointment(): void {
    this.isBooked = !this.isBooked;
    this.toggle.emit();
  }
}

