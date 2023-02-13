import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: any = 'waiting ';
  constructor(private http: HttpClient) {}
  fun1() {
    this.http
      .post(
        `https://api.openai.com/v1/completions`,
        {
          model: 'text-davinci-003',
          prompt: '你好',
          max_tokens: 100,
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
      .subscribe((data: any) => {
        this.name = data.choices;
        console.log(data, this.name);
      });
  }
}
