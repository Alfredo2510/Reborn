import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
let TabGraficasPage = class TabGraficasPage {
    constructor() { }
    ngOnInit() {
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Traumatismos Superficiales', 'Luxaciones, esguinces y desgarros', 'Heridas', 'Fracturas', 'Traumatimos', 'Dorsalgias', 'Quemaduras', 'Cuerpo Extraño', 'Amputaciones', 'Varios de frecuencia menor'],
                datasets: [{
                        label: 'Hombres',
                        data: [64652, 59292, 57363, 28487, 15316, 4862, 6036, 4753, 3269, 6496],
                        backgroundColor: '#ddee44',
                        borderColor: '#ddee44',
                        borderWidth: 1
                    },
                    {
                        label: 'Mujeres',
                        data: [29249, 29122, 14029, 4975, 4885, 1909, 2221, 669, 556, 2560],
                        backgroundColor: '#dd1144',
                        borderColor: '#dd1144',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    }
};
tslib_1.__decorate([
    ViewChild('barCanvas', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], TabGraficasPage.prototype, "barCanvas", void 0);
TabGraficasPage = tslib_1.__decorate([
    Component({
        selector: 'app-tab-graficas',
        templateUrl: './tab-graficas.page.html',
        styleUrls: ['./tab-graficas.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TabGraficasPage);
export { TabGraficasPage };
//# sourceMappingURL=tab-graficas.page.js.map