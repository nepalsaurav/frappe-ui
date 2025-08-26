import { ToastProps } from './types';
interface ToastOptions extends Omit<Partial<ToastProps>, 'open' | 'message' | 'title'> {
    id?: string;
    message: string;
}
interface ToastPromiseOptions<TData = any, TError = any> {
    loading: string;
    /** Message for success state, or a function that returns a message. */
    success: string | ((data: TData) => string);
    /** Message for error state, or a function that returns a message. */
    error: string | ((error: TError) => string);
    /** Optional: Duration in seconds for the success toast. Defaults to 5 seconds. */
    successDuration?: number;
    /** Optional: Duration in seconds for the error toast. Defaults to 5 seconds. */
    errorDuration?: number;
    /** Optional: Common duration in seconds for all toast states, unless overridden by successDuration or errorDuration. */
    duration?: number;
}
export declare const toast: {
    create: (options: ToastOptions) => string;
    remove: (id: string) => void;
    removeAll: () => void;
    promise: <TData = any, TError = any>(promiseToResolve: Promise<TData>, options: ToastPromiseOptions<TData, TError>) => Promise<TData>;
    success: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    error: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    warning: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
    info: (message: string, options?: Omit<ToastOptions, "message" | "type">) => string;
};
export declare const Toasts: import('vue').DefineComponent<{}, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>[], {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export {};
