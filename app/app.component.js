System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, ITEMS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Dark Souls 3 Database';
                    this.items = ITEMS;
                }
                AppComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n\t\t.items {\n\t\t\tlist-style-type: none;\n\t\t\tpadding: 0;\n\t\t\tmargin: 1em;\n\t\t\twidth: 10em;\n\t\t}\n\n\t\t.item {\n\t\t\theight: 2em;\n\t\t\tline-height: 2em;\n\t\t\tfont-sze: 1.6em;\n\t\t\tbackground-color: #ddd;\n\t\t\tmargin: 0.5em 0;\n\t\t\tpadding-right: 0.5em;\n\t\t\tborder-radius: 0.2em;\n\t\t}\n\n\t\t.item.selected {\n\t\t\tbackground-color: yellow;\n\t\t}\n\n\t\t.item.selected span {\n\t\t\tbackground-color: orange;\n\t\t}\n\n\t\t.item span {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: white;\n\t\t\twidth: 2em;\n\t\t\tline-height: 2em;\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: center;\n\t\t\tmargin-right: 0.5em;\n\t\t\tborder-top-left-radius: 0.2em;\n\t\t\tborder-bottom-left-radius: 0.2em;\n\t\t}\n\n\t\t.item:hover {\n\t\t\tbackground-color: cyan;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.item:hover span {\n\t\t\tbackground-color: magenta;\n\t\t}\n\t"],
                        template: "\n\t\t<h1>{{title}}</h1>\n\n\t\t<ul class=\"items\">\n\t\t\t<li class=\"item\" [class.selected]=\"item === selectedItem\" *ngFor=\"#item of items\" (click)=\"onSelect(item)\">\n\t\t\t\t<span>{{item.id}}</span> {{item.name}}\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<div *ngIf=\"selectedItem\">\n\t\t\t<h2>{{selectedItem.name}} details</h2>\n\t\t\t<div>\n\t\t\t\t<label>Name:</label>\n\t\t\t\t{{selectedItem.id}}\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<label>Name:</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"selectedItem.name\" placeholder=\"Item name\"/>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ITEMS = [
                { id: 11, name: 'Shortsword' },
                { id: 12, name: 'Long Sword' },
                { id: 13, name: 'Uchigatana' },
                { id: 14, name: 'Zweihander' },
                { id: 15, name: 'Bastard Sword' },
                { id: 16, name: 'Short Bow' },
                { id: 17, name: 'Long Bow' },
                { id: 18, name: 'Grand Lance' }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map