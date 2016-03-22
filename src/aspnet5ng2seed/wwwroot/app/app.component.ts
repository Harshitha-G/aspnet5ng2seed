import {Component, OnInit} from "angular2/core";
import {AsyncRoute, Router, RouteDefinition, RouteConfig, Location, ROUTER_DIRECTIVES} from "angular2/router";
import {StaticComponent} from "./components/static.component";

@Component({
    selector: 'main-app',
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {

    public routes: RouteDefinition[] = null;

    constructor(private router: Router, private location: Location) { }

    ngOnInit() {
        if (this.routes === null) {
            this.routes = [
                { path: "/index", component: StaticComponent, name: "Index", useAsDefault: true },
                new AsyncRoute({
                    path: "/sub",
                    name: "Partial.cshtml",
                    loader: () => System.import("app/components/mvc.component").then(c => c["MvcComponent"])
                }),
                new AsyncRoute({
                    path: "/numbers",
                    name: "Web API 2 - Http : Get",
                    loader: () => System.import("app/components/api.component").then(c => c["ApiComponent"])
                })
            ];

            this.router.config(this.routes);
        }
    }

    getLinkStyle(route: RouteDefinition) {
        return this.location.path().indexOf(route.path) > -1;
    }

}