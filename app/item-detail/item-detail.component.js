System.register(['angular2/core', 'angular2/router', '../item/item.service'], function(exports_1, context_1) {
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
    var core_1, router_1, item_service_1;
    var ItemDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            ItemDetailComponent = (function () {
                function ItemDetailComponent(_itemService, _routeParams) {
                    this._itemService = _itemService;
                    this._routeParams = _routeParams;
                }
                ItemDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._itemService.getItem(id)
                        .then(function (item) { return _this.item = item; });
                };
                ItemDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ItemDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'item-detail',
                        styleUrls: ['app/item-detail/item-detail.component.css'],
                        templateUrl: 'app/item-detail/item-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService, router_1.RouteParams])
                ], ItemDetailComponent);
                return ItemDetailComponent;
            }());
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    }
});
//# sourceMappingURL=item-detail.component.js.map