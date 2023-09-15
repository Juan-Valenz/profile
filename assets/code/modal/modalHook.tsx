import React, { ReactNode } from 'react';
import './Modal.module.scss';


/**
 * @param require `boolean | undefined`, (true) => (acceptLabel | cancelLabel): string
 * @param acceptLabel `string | undefined`
 * @param cancelLabel `string | undefined`
 * @param content `ReactNode | string` modal content
 * @param showCloseOnRightCorner `boolean`
 * @param header string
 * @require `(acceptLabel | cancelLabel): string` if require === true
 */
export declare type ModalOptions = {
    require?: boolean;
    acceptLabel?: string;
    cancelLabel?: string;
    content: ReactNode | string;
    showCloseOnRightCorner?: boolean;
    header?: string;
    enableScroll?: boolean;
} & (
        { require?: false; } |
        {
            require: true | boolean;
            acceptLabel: string;
        } |
        {
            require: true | boolean;
            cancelLabel: string;
        }
    );

interface IModalContext { modal: (options: ModalOptions) => Promise<boolean>; }
export declare const useModalContext: () => IModalContext;

export interface ModalContextProviderProps {
    children?: ReactNode;
}
export declare const ModalContextProvider: React.FC<ModalContextProviderProps>;


export { };
