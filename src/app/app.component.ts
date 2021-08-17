import { Component } from '@angular/core';

import { JsonSchemaFormComponent } from 'angular6-json-schema-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder';
  schema = {
    "type": "object",
    "title": "Comment",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string"
      },
      "email": {
        "title": "Email",
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "description": "Email will be used for evil."
      },
      "comment": {
        "title": "Comment",
        "type": "string",
        "maxLength": 20,
        "validationMessage": "Don't be greedy!"
      }
    },
    "required": [
      "name",
      "email",
      "comment"
    ]
  };
  data = {
    "name": "John Doe",
    "email": "john@doe.com",
    "comment": "I am a good boy"
  };
}
