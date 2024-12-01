import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shifts-available-dialog',
  templateUrl: './shifts-available-dialog.component.html',
  styleUrls: ['./shifts-available-dialog.component.css']
})
export class ShiftsAvailableDialogComponent {

  public schedules = [
    {
      id: 1,
      time: "00:00 a 00:59",
      selected: false
    },
    {
      id: 2,
      time: "01:00 a 01:59",
      selected: false
    },
    {
      id: 3,
      time: "02:00 a 02:59",
      selected: false
    },
    {
      id: 4,
      time: "03:00 a 03:59",
      selected: false
    },
    {
      id: 56,
      time: "04:00 a 04:59",
      selected: false
    },
    {
      id: 5,
      time: "05:00 a 05:59",
      selected: false
    },
    {
      id: 6,
      time: "06:00 a 06:59",
      selected: false
    },
    {
      id: 7,
      time: "07:00 a 07:59",
      selected: false
    },
    {
      id: 8,
      time: "08:00 a 08:59",
      selected: false
    },
    {
      id: 9,
      time: "09:00 a 09:59",
      selected: false
    },
    {
      id: 10,
      time: "10:00 a 10:59",
      selected: false
    },
    {
      id: 11,
      time: "11:00 a 11:59",
      selected: false
    },
    {
      id: 12,
      time: "12:00 a 12:59",
      selected: false
    },
    {
      id: 13,
      time: "13:00 a 13:59",
      selected: false
    },
    {
      id: 14,
      time: "14:00 a 14:59",
      selected: false
    },
    {
      id: 15,
      time: "15:00 a 15:59",
      selected: false
    },
    {
      id: 16,
      time: "16:00 a 16:59",
      selected: false
    },
    {
      id: 17,
      time: "17:00 a 17:59",
      selected: false
    },
    {
      id: 18,
      time: "18:00 a 18:59",
      selected: false
    },
    {
      id: 19,
      time: "19:00 a 19:59",
      selected: false
    },
    {
      id: 20,
      time: "20:00 a 20:59",
      selected: false
    },
    {
      id: 21,
      time: "21:00 a 21:59",
      selected: false
    },
    {
      id: 22,
      time: "22:00 a 22:59",
      selected: false
    },
    {
      id: 23,
      time: "23:00 a 23:59",
      selected: false
    },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { emptyIncome: boolean }
  ) { }

    public select(schedule: { id: number, time: string, selected: boolean }): void {
      this.schedules = this.schedules.map(scheduleItem => {
        const newSchedule = Object.assign({}, scheduleItem);

        if( schedule.id == scheduleItem.id) newSchedule.selected = true;
        else newSchedule.selected = false;

        return newSchedule;
      });
    }

}
