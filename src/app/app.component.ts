import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainning';
  months = ['thanh 1', 'thang 2', 'thang 3', 'thang 4', 'thang 5'];
  count = 1;
  countABC = 5;
  username = '';
  name = '';
  clickme() {
    this.countABC ++;
  }

  onKeyUp(event) {
    this.username = event.target.value;
    // console.log(event.target.value);
  }

  doubleClick() {
    console.log('double click nhe');
  }

  countSum() {
    this.count ++;
  }

  changeMonth(event) {
    alert('Bạn vừa thay đổi tháng trong dropdown');
  }

  showMessage(event) {
    console.log(event.target.innerText);
  }

  dbClick() {
    console.log('ok');
  }

  showMe() {
    alert('ok nhe');
  }
}
