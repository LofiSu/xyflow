import type { CSSProperties, ReactNode } from 'react';
import type { D3DragEvent, SubjectPosition } from 'd3-drag';

export type ResizeParams = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ResizeParamsWithDirection = ResizeParams & {
  direction: number[];
};

type OnResizeHandler<Params = ResizeParams, Result = void> = (event: ResizeDragEvent, params: Params) => Result;

export type OnResizeStart = OnResizeHandler;
export type OnBeforeResize = OnResizeHandler<ResizeParams, unknown>;
export type OnResize = OnResizeHandler<ResizeParamsWithDirection>;
export type OnResizeEnd = OnResizeHandler;

export type NodeResizerProps = {
  nodeId?: string;
  color?: string;
  handleClassName?: string;
  handleStyle?: CSSProperties;
  lineClassName?: string;
  lineStyle?: CSSProperties;
  isVisible?: boolean;
  minWidth?: number;
  minHeight?: number;
  onResizeStart?: OnResizeStart;
  onBeforeResize?: OnBeforeResize;
  onResize?: OnResize;
  onResizeEnd?: OnResizeEnd;
};

export type ControlLinePosition = 'top' | 'bottom' | 'left' | 'right';

export type ControlPosition = ControlLinePosition | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export enum ResizeControlVariant {
  Line = 'line',
  Handle = 'handle',
}

export type ResizeControlProps = Pick<
  NodeResizerProps,
  'nodeId' | 'color' | 'minWidth' | 'minHeight' | 'onResizeStart' | 'onBeforeResize' | 'onResize' | 'onResizeEnd'
> & {
  position?: ControlPosition;
  variant?: ResizeControlVariant;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export type ResizeControlLineProps = ResizeControlProps & {
  position?: ControlLinePosition;
};

export type ResizeDragEvent = D3DragEvent<HTMLDivElement, null, SubjectPosition>;
