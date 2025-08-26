import { Ref } from 'vue';
interface UseImageNavigationOptions {
    initialIndex: Ref<number>;
    imageCount: Ref<number>;
    onNavigate?: () => void;
}
export declare function useImageNavigation({ initialIndex, imageCount, onNavigate, }: UseImageNavigationOptions): {
    currentIndex: Ref<number, number>;
    nextImage: () => void;
    previousImage: () => void;
};
export {};
