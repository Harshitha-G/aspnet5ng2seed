import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
                        provide(LocationStrategy, { useClass: HashLocationStrategy })])
    .then(success => console.log('Bootstrap successfully!'))
    .catch(err => console.log(err)); 