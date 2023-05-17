import { StaticImageData } from "next/image";
import { IStandardProps } from '../../../helpers/types';

export interface IBubbleProps extends IStandardProps {
  bubble: StaticImageData;
}
