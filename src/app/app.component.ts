import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private http: HttpClient) {}
  fun1() {
    this.http
      .post(
        `https://api.openai.com/v1/completions`,
        {
          model: 'text-davinci-003',
          prompt: '你好',
          max_tokens: 7,
          temperature: 0,
          top_p: 1,
          n: 1,
          stream: false,
          logprobs: null,
        },
        {
          headers: {
            Authorization:
              'Bearer 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',
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
