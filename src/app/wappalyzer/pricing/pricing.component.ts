import { Component } from '@angular/core';

interface Question {
  question: string;
  answer: string;
}
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  billing:boolean=false;
  questions: Question[] = [
    { question: 'Do you offer a free trial', answer: 'Sign up for a free account to get 50 lookups and email verifications every month, 5 website alerts and sample lead lists.' },
    { question: 'Can I make a one-time purchase withou a plan?', answer: 'You need a plan to access lead lists, APIs and CRM integrations. Plans can be cancelled at any time.' },
    { question: 'Can I pause or cancle my plan',answer: 'Yes, you can pause or cancel your plan at any time without losing access to your API credits or past purchases You may pause your plan for up to three months. During this time you wont be billed and API credits included in your plan will not expire.When you cancel, your plan remains active for the remainder of the billing period and you can continue using your API credits until they expire.'},
    { question: 'What are plus features', answer: 'Plus features include extended website lookups. With Plus, you have access to company and contact information in invididual technology lookups, the browser extension and Android app.' },
    { question: 'What are API creadit', answer: 'Developers can use our APIs to connect Wappalyzer to other applications and automate technology lookups. Credits are pre-paid tokens that can be spend on API requests (typically 1 credit per website).' },
    { question: 'When do API credit expire', answer: 'Credits included in plans expire after 60 days. Credits purchased in bundles expire after 365 days. Expired credits can no longer be used.' },
    { question: 'Can I use a ddifferent payment methods', answer: 'In most cases we only accept credit cards. For larger purchases or longer-term commitments, please contact us to discuss options.' },
    { question: 'What is your refund policy', answer: 'If youre not satisfied with the quality of our offering we will either work with you to resolve the issue, credit your account or issue a pro-rata refund. Please refer to the terms of use.' },
  ];

  // Track the currently selected question
  selectedQuestionIndex: number | null = null;

  toggleAnswer(index: number): void {
    // Toggle the visibility of the answer
    this.selectedQuestionIndex = this.selectedQuestionIndex === index ? null : index;
  }

}
