import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import HLS from 'hls.js';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private hls = new HLS();
  //public user: string | null = 'HOME';
  private playing: boolean = false;

  @ViewChild('video', { static: true }) private readonly video:ElementRef<HTMLVideoElement> | any;

  constructor(private route: ActivatedRoute) {
  }

  public ngOnInit() {
    //this.user = this.route.snapshot.paramMap.get('user') || 'HOME';
    this.load(`http://192.168.1.39:8000/live/lagalm/index.m3u8`)
  }

  public loadInit(): void {
    if(!this.playing) {
      this.video.nativeElement.play();
    }
  }

  public load(currentVideo: string): void {
    if(HLS.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      console.log('No es soportado tu navegador');
    }
  }

  // Method that load the video HLS isSupport
  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
  }

}
