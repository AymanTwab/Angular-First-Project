import { Component } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  test(): any {
    if ($('.inp1').val() != '') {
      $('label.userName').addClass('top-0')
    } else {
      $('label.userName').removeClass('top-0')
    }
    if ($('.inp2').val() != '') {
      $('label.userAge').addClass('top-0')
    } else {
      $('label.userAge').removeClass('top-0')
    }
    if ($('.inp3').val() != '') {
      $('label.userEmail').addClass('top-0')
    } else {
      $('label.userEmail').removeClass('top-0')
    }
    if ($('.inp4').val() != '') {
      $('label.userPassword').addClass('top-0')
    } else {
      $('label.userPassword').removeClass('top-0')
    }
  }


}
