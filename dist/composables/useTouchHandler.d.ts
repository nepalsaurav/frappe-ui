import { Ref } from 'vue';
interface UseTouchHandlerOptions {
    targetRef: Ref<HTMLElement | null | undefined>;
    zoomLevel?: Ref<number>;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onDoubleTap?: (event: TouchEvent) => void;
    onTap?: (event: TouchEvent) => void;
    onPanStart?: (event: TouchEvent) => void;
    onPanMove?: (deltaX: number, deltaY: number, event: TouchEvent) => void;
    onPanAnimate?: (x: number, y: number) => void;
    onPanEnd?: (event: TouchEvent) => void;
    onPinchStart?: (event: TouchEvent) => void;
    onPinchMove?: (scale: number, event: TouchEvent) => void;
    onPinchEnd?: (event: TouchEvent) => void;
    doubleTapDelay?: number;
    minSwipeDistance?: number;
    maxVerticalSwipeDistance?: number;
    maxTapDuration?: number;
    maxTapMovement?: number;
    panThreshold?: number;
    inertiaDamping?: number;
    inertiaVelocityThreshold?: number;
}
export declare function useTouchHandler(options: UseTouchHandlerOptions): {
    isPanning: Readonly<Ref<boolean, boolean>>;
    isPinching: Readonly<Ref<boolean, boolean>>;
    isAnimatingPan: Readonly<Ref<boolean, boolean>>;
};
export {};
