import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class FooterComponent {
  course = 'Learning angular';
  disabled = false;
  isSpecial = true;
  text = 'the text';
  students = [1, 2, 3, 5];
  src =
    'data:image/png;base64,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';

  Save(input: HTMLInputElement) {
    console.log(input.value);
    // alert('saving....');
  }
  change(e: Event) {
    this.course = (e.target as HTMLInputElement).value;
  }
  toggleClass() {
    this.isSpecial = !this.isSpecial;
  }
  isLegal = false;
  currentStyles: Record<string, string> = {};
  studentList: string[] = [];
  addStudent(student: string) {
    this.studentList.push(student);
  }
items =[{name:'Erica'}, {name:"wanja"}]
  constructor() {
    this.currentStyles = {
      // 'font-size': this.isSpecial ? '24px' : '12px',
      'font-size': '24px',
    };
  }
}
