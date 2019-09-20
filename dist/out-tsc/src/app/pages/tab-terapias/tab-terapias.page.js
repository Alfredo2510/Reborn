import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player/ngx";
let TabTerapiasPage = class TabTerapiasPage {
    constructor(youtube) {
        this.youtube = youtube;
        this.vid = "https://www.youtube.com/embed/LOe_wcdmZ38";
        this.url = "";
        this.videos = [
            {
                title: "Terapia 1",
                url: "https://www.youtube.com/embed/LOe_wcdmZ38"
            },
            {
                title: "Terapia 2",
                url: "https://www.youtube.com/embed/LOe_wcdmZ38"
            }
        ];
    }
    onClick1(id) {
        this.youtube.openVideo(id);
    }
    onClick2(id) {
        this.youtube.openVideo(id);
    }
    onClick3(id) {
        this.youtube.openVideo(id);
    }
    onClick4(id) {
        this.youtube.openVideo(id);
    }
    ngOnInit() { }
};
TabTerapiasPage = tslib_1.__decorate([
    Component({
        selector: "app-tab-terapias",
        templateUrl: "./tab-terapias.page.html",
        styleUrls: ["./tab-terapias.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [YoutubeVideoPlayer])
], TabTerapiasPage);
export { TabTerapiasPage };
//# sourceMappingURL=tab-terapias.page.js.map