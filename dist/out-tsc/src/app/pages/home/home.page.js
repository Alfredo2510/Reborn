import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
let HomePage = class HomePage {
    constructor(modalController) {
        this.modalController = modalController;
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map