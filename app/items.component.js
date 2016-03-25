System.register(['angular2/core', 'angular2/router', './item-detail.component', './item.service'], function(exports_1, context_1) {
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
    var core_1, router_1, item_detail_component_1, item_service_1;
    var ItemsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_detail_component_1_1) {
                item_detail_component_1 = item_detail_component_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            ItemsComponent = (function () {
                function ItemsComponent(_itemService, _router) {
                    this._itemService = _itemService;
                    this._router = _router;
                }
                ItemsComponent.prototype.ngOnInit = function () {
                    this.getItems();
                };
                ItemsComponent.prototype.getItems = function () {
                    var _this = this;
                    this._itemService.getItems().then(function (items) { return _this.items = items; });
                };
                ItemsComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ItemsComponent.prototype.goToDetail = function () {
                    this._router.navigate(['ItemDetail', { id: this.selectedItem.id }]);
                };
                ItemsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-items',
                        directives: [item_detail_component_1.ItemDetailComponent],
                        styleUrls: ['app/items.component.css'],
                        templateUrl: 'app/items.component.html'
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService, router_1.Router])
                ], ItemsComponent);
                return ItemsComponent;
            }());
            exports_1("ItemsComponent", ItemsComponent);
        }
    }
});
//# sourceMappingURL=items.component.js.map