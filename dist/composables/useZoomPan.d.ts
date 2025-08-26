import { Ref } from 'vue';
interface UseZoomPanOptions {
    containerRef: Ref<HTMLElement | null>;
    isEnabled: Ref<boolean>;
}
export declare function useZoomPan({ containerRef, isEnabled }: UseZoomPanOptions): {
    zoomLevel: Ref<number, number>;
    panPosition: Ref<{
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    }>;
    isMousePanning: Ref<boolean, boolean>;
    initialPanPositionOnGestureStart: Ref<{
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    }>;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
    handlePanStart: (event: MouseEvent) => void;
    snapThresholdLower: number;
    snapThresholdUpper: number;
};
export {};
