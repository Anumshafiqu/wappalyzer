import { Component ,EventEmitter,OnInit, Output, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wappalyzer';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signInForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private renderer: Renderer2) {
    // Create form controls with validation
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    this.submitted = true;

    // If form is invalid, do nothing
    if (this.signInForm.invalid) {
      return;
    }

    // Otherwise, proceed with the form submission logic
    console.log('Form submitted successfully', this.signInForm.value);
  }

  // Helper method to access form controls easily in the template
  get formControls() {
    return this.signInForm.controls;
  }
  isDarkMode: boolean = false;

  ngOnInit() {
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
    this.updateBodyClass();
    console.log("toggle")
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  @Output() darkModeToggle = new EventEmitter<void>();

  onToggleDarkMode(isDarkMode: boolean) {
    this.darkModeToggle.emit();
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  isSearchActive = false;

  toggleSearchMode() {
    this.isSearchActive = !this.isSearchActive;
    console.log('isSearchActive:', this.isSearchActive);
  }





}
