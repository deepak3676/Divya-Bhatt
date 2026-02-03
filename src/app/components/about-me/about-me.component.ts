import { Component, ElementRef, ViewChild } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../../../enums/app-data';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
    @ViewChild('introVideo') introVideo!: ElementRef<HTMLVideoElement>;
    videoStarted = false;

    playVideo(event: Event) {
        const video = this.introVideo.nativeElement;
        if (video.paused) {
            video.play();
            this.videoStarted = true;
        } else {
            video.pause();
        }
    }
}
