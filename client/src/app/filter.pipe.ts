import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from "app/appointment";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Appointments: Appointment[], search: string): any {
    if(!Appointments) { return undefined }
    if(!search) { return Appointments }

    search = search.toLowerCase()

    return Appointments.filter((Appointments) => Appointments.patient.toLowerCase().indexOf(search) >= 0 || Appointments.complaint.toLowerCase().indexOf(search) >= 0)
  }

}
