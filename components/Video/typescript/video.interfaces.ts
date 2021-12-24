export interface IVideo {
  fallbackSource: {
    url: string;
    type: string;
  };
  sources: {
    url: string;
    type: string;
  }[];
  name: string;
  format: 'square' | 'rect';
}

export interface IVideoProps {
  video: IVideo;
  isAnimated?: boolean;
}
