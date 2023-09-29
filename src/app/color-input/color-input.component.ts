import { Component } from "@angular/core";

@Component({
    selector: 'color-input',
    templateUrl: './color-input.component.html',
    styleUrls: ['./color-input.component.css']
})

export class ColorInput{
    color:string = "red"
}