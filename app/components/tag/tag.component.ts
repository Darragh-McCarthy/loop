import { Component } from "angular2/core";
import { Router, RouteParams } from "angular2/router";
import { DIRECTIVE_PREFIX } from "../../constants/constants";

@Component({
    selector: DIRECTIVE_PREFIX + "tag",
    templateUrl: "app/components/tag/tag.component.html",
})
export class TagComponent {
    title: string = "Tag title";
    constructor(
        private _routeParams: RouteParams,
        private _router: Router
    ) {
        const tagName = _routeParams.get("tagName");
        this.title = tagName;
    }
}
