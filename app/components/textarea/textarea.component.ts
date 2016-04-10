import { Directive, Input, ElementRef } from "angular2/core";

@Directive({
    selector: "textarea"
})
export class TextareaDirective {
    // find alternative to ElementRef
    constructor(private _textareaElement: ElementRef) {
        autosize(_textareaElement.nativeElement);
        this.updateAutosize();
    }
    updateAutosize() {
        setTimeout(() => {
            autosize.update(this._textareaElement.nativeElement);
        });
    }
}