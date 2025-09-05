// Type definitions for Winwheel.js
// Project: https://github.com/zarocknz/javascript-winwheel
// Definitions by: GitHub Copilot

export interface WinwheelOptions {
    canvasId?: string;
    centerX?: number;
    centerY?: number;
    outerRadius?: number;
    innerRadius?: number;
    numSegments?: number;
    drawMode?: 'code' | 'image' | 'segmentImage';
    rotationAngle?: number;
    textFontFamily?: string;
    textFontSize?: number;
    textFontWeight?: string;
    textOrientation?: 'horizontal' | 'vertical' | 'curved';
    textAlignment?: 'center' | 'inner' | 'outer';
    textDirection?: 'normal' | 'reversed';
    textMargin?: number;
    textFillStyle?: string;
    textStrokeStyle?: string;
    textLineWidth?: number;
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    clearTheCanvas?: boolean;
    imageOverlay?: boolean;
    drawText?: boolean;
    pointerAngle?: number;
    wheelImage?: HTMLImageElement | null;
    imageDirection?: 'N' | 'E' | 'S' | 'W';
    responsive?: boolean;
    scaleFactor?: number;
    segments?: SegmentOptions[];
    animation?: AnimationOptions;
    pins?: PinOptions;
    pointerGuide?: PointerGuideOptions;
}

export interface SegmentOptions {
    size?: number | null;
    text?: string;
    fillStyle?: string | null;
    strokeStyle?: string | null;
    lineWidth?: number | null;
    textFontFamily?: string | null;
    textFontSize?: number | null;
    textFontWeight?: string | null;
    textOrientation?: string | null;
    textAlignment?: string | null;
    textDirection?: string | null;
    textMargin?: number | null;
    textFillStyle?: string | null;
    textStrokeStyle?: string | null;
    textLineWidth?: number | null;
    image?: string | null;
    imageDirection?: string | null;
    imgData?: HTMLImageElement | null;
}

export interface PinOptions {
    visible?: boolean;
    number?: number;
    outerRadius?: number;
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    margin?: number;
    responsive?: boolean;
}

export interface AnimationOptions {
    type?: string;
    direction?: 'clockwise' | 'anti-clockwise';
    propertyName?: string | null;
    propertyValue?: any;
    duration?: number;
    yoyo?: boolean;
    repeat?: number | null;
    easing?: any;
    stopAngle?: number | null;
    spins?: number | null;
    clearTheCanvas?: boolean | null;
    callbackFinished?: Function | null;
    callbackBefore?: Function | null;
    callbackAfter?: Function | null;
    callbackSound?: Function | null;
    soundTrigger?: 'segment' | 'pin';
}

export interface PointerGuideOptions {
    display?: boolean;
    strokeStyle?: string;
    lineWidth?: number;
}

export class Winwheel {
    constructor(options?: WinwheelOptions, drawWheel?: boolean);
    canvasId: string;
    canvas: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    numSegments: number;
    drawMode: string;
    rotationAngle: number;
    textFontFamily: string;
    textFontSize: number;
    textFontWeight: string;
    textOrientation: string;
    textAlignment: string;
    textDirection: string;
    textMargin: number;
    textFillStyle: string;
    textStrokeStyle: string | null;
    textLineWidth: number;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    clearTheCanvas: boolean;
    imageOverlay: boolean;
    drawText: boolean;
    pointerAngle: number;
    wheelImage: HTMLImageElement | null;
    imageDirection: string;
    responsive: boolean;
    scaleFactor: number;
    segments: Array<Segment | null>;
    animation: Animation;
    pins?: Pin;
    pointerGuide: PointerGuide;
    _originalCanvasWidth?: number;
    _originalCanvasHeight?: number;
    _responsiveScaleHeight?: any;
    _responsiveMinWidth?: any;
    _responsiveMinHeight?: any;
    _responsiveMargin?: any;
    tween?: any;

    updateSegmentSizes(): void;
    clearCanvas(): void;
    draw(clearTheCanvas?: boolean): void;
    drawPins(): void;
    drawPointerGuide(): void;
    drawWheelImage(): void;
    drawSegmentImages(): void;
    drawSegments(): void;
    drawSegmentText(): void;
    degToRad(d: number): number;
    setCenter(x: number, y: number): void;
    addSegment(options: SegmentOptions, position?: number): Segment;
    setCanvasId(canvasId: string): void;
    deleteSegment(position: number): void;
    windowToCanvas(x: number, y: number): { x: number; y: number };
    getSegmentAt(x: number, y: number): Segment | null;
    getSegmentNumberAt(x: number, y: number): number | null;
    getIndicatedSegment(): Segment | null;
    getIndicatedSegmentNumber(): number;
    getCurrentPinNumber(): number;
    getRotationPosition(): number;
    startAnimation(): void;
    stopAnimation(canCallback?: boolean): void;
    pauseAnimation(): void;
    resumeAnimation(): void;
    computeAnimation(): void;
    getRandomForSegment(segmentNumber: number): number;
}

export class Segment {
    constructor(options?: SegmentOptions);
    startAngle: number;
    endAngle: number;
    changeImage(image: string, imageDirection?: string): void;
}

export class Pin {
    constructor(options?: PinOptions);
}

export class Animation {
    constructor(options?: AnimationOptions);
}

export class PointerGuide {
    constructor(options?: PointerGuideOptions);
}

export function winwheelPercentToDegrees(percentValue: number): number;
export function winwheelAnimationLoop(): void;
export function winwheelTriggerSound(): void;
export function winwheelStopAnimation(canCallback?: boolean): void;
export function winwheelLoadedImage(): void;
export function winwheelResize(): void;

export let winwheelToDrawDuringAnimation: Winwheel | null;
export let winhweelAlreadyDrawn: boolean;
