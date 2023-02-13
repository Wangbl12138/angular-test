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
          prompt: '英雄联盟中，那五位辅助英雄独自击杀坦克最快？连招是什么',
          max_tokens: 1000,
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
