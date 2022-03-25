export type CustomHook<Params, Return> = (params: Params) => Return;

export interface IArtist {
  name: string;
  profileUrl: string;
}

export interface IVideo {
  id: string;
  fallbackSource: {
    url: string;
    type: string;
  };
  sources: {
    url: string;
    type: string;
  }[];
  name: string;
  artists: IArtist[];
  format: 'square' | 'rect';
  link?: string;
}

export interface IStandardProps {
  className?: string;
  id?: string;
}

export type IOs = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux';
