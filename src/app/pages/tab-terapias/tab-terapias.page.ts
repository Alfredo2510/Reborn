import { Component, OnInit } from "@angular/core";
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player/ngx";

@Component({
  selector: "app-tab-terapias",
  templateUrl: "./tab-terapias.page.html",
  styleUrls: ["./tab-terapias.page.scss"]
})
export class TabTerapiasPage implements OnInit {
  vid = "https://www.youtube.com/embed/LOe_wcdmZ38";
  url = "";
  videos = [
    {
      title: "Terapia 1",
      url: "https://www.youtube.com/embed/LOe_wcdmZ38"
    },
    {
      title: "Terapia 2",
      url: "https://www.youtube.com/embed/LOe_wcdmZ38"
    }
  ];
  constructor(private youtube: YoutubeVideoPlayer) {}

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

  ngOnInit() {}
}
