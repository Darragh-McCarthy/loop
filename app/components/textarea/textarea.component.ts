import { Directive, Input, ElementRef } from "angular2/core";

@Directive({
    selector: "textarea"
})
export class TextareaDirective {
    constructor(private _textareaElement: ElementRef) {
        autosize(_textareaElement.nativeElement);
        setTimeout(function() {
            autosize.update(_textareaElement.nativeElement);
        });
    }
}