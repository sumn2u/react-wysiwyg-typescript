/// <reference types="draft-js" />
/// <reference types="react" />
import * as React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import { EditorState } from 'draft-js';
/**
 * convert an editor state to html
 * @param input any
 * @param options DraftToHtml options
 */
export declare const draftToHtml: (input: any, ...options: any[]) => any;
/**
 * convert html to Draft State
 * @param content your contents
 * @return {EditorState}
 */
export declare const htmlToDraft: (content: string) => EditorState;
/**
 * convert raw content to Draft State
 * @param content your contents
 * @return {EditorState}
 */
export declare const rawToDraft: (content: string) => EditorState | undefined;
/**
 * convert draft state to raw
 * @param content of draft state
 * @return  Object{entryMap: Object, blocks:Array()}
 */
export declare const draftToRaw: (content: any) => string;
/**
 * convert draft state to html
 * @param content of draft state
 * @return  html
 */
export declare const draftStateToHTML: (content: any) => any;
/**
 * an empty state
 */
export declare const EmptyState: EditorState;
export declare const A: (arr: any[]) => void[];
export interface DraftProps {
    children?: React.ReactNode;
    /**
     * editor state
     *
     * @type {*}
     * @memberOf DraftProps
     */
    editorState?: EditorState;
    /**
     * default value
     *
     * @type {EditorState}
     * @memberOf DraftProps
     */
    defaultEditorState?: EditorState;
    /**
     * when state has changed
     *
     *
     * @memberOf DraftProps
     */
    onEditorStateChange?: (editorState: EditorState) => void;
    placeholder?: string;
    /**
     * tool bar configrations
     *
     * @type {{
     *         options: string[]
     *         inline: {
     *             options: string[]
     *         }
     *     }}
     * @memberOf DraftProps
     */
    toolbar?: Partial<{
        /**
         * options
         *
         * @type {['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker',
         *             'link', 'embedded', 'emoji', 'image', 'remove', 'history']}
         */
        options: string[];
        inline: Partial<{
            inDropdown: false;
            className?: string;
            /**
             * inline options
             *
             * @type {['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript']}
             */
            options: string[];
            bold: {
                icon: 'bold';
                className?: string;
            };
            italic: {
                icon: 'italic';
                className?: string;
            };
            underline: {
                icon: 'underline';
                className?: string;
            };
            strikethrough: {
                icon: 'strikethrough';
                className?: string;
            };
            monospace: {
                icon: 'monospace';
                className?: string;
            };
            superscript: {
                icon: 'superscript';
                className?: string;
            };
            subscript: {
                icon: 'subscript';
                className?: string;
            };
        }>;
        blockType: Partial<{
            inDropdown: true;
            /**
             * blockType options
             *
             * @type {['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote']}
             */
            options: string[];
            className?: string;
            dropdownclassName?: string;
        }>;
        fontSize: Partial<{
            icon: 'fontSize';
            options: number[];
            className?: string;
            dropdownclassName?: string;
        }>;
        fontFamily: Partial<{
            /**
             * fontFamily options
             *
             * @type {['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana']}
             */
            options: string[];
            className?: string;
            dropdownclassName?: string;
        }>;
        list: Partial<{
            inDropdown: false;
            className?: string;
            /**
             * list options
             *
             * @type {['unordered', 'ordered', 'indent', 'outdent']}
             */
            options: string[];
            unordered: {
                icon: 'unordered';
                className?: string;
            };
            ordered: {
                icon: 'ordered';
                className?: string;
            };
            indent: {
                icon: 'indent';
                className?: string;
            };
            outdent: {
                icon: 'outdent';
                className?: string;
            };
        }>;
        textAlign: Partial<{
            inDropdown: false;
            className?: string;
            /**
             * textAlign options
             *
             * @type {['left', 'center', 'right', 'justify']}
             */
            options: string[];
            left: {
                icon: 'left';
                className?: string;
            };
            center: {
                icon: 'center';
                className?: string;
            };
            right: {
                icon: 'right';
                className?: string;
            };
            justify: {
                icon: 'justify';
                className?: string;
            };
        }>;
        colorPicker: Partial<{
            icon: 'color';
            className?: string;
            popclassName?: string;
            /**
             * colorPicker colors
             *
             * @type {['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
             *                 'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
             *                 'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
             *                 'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
             *                 'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
             *                 'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)']}
             */
            colors: string[];
        }>;
        link: Partial<{
            inDropdown: false;
            className?: string;
            popclassName?: string;
            /**
             * link options
             *
             * @type {['link', 'unlink']}
             */
            options: string[];
            link: {
                icon: 'link';
                className?: string;
            };
            unlink: {
                icon: 'unlink';
                className?: string;
            };
        }>;
        embedded: Partial<{
            icon: 'image';
            className?: string;
            popclassName?: string;
        }>;
        emoji: Partial<{
            icon: 'emoji';
            className?: string;
            popclassName?: string;
            /**
             * emoji
             *
             * @type {['😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌',
             *                 '🤓', '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈', '🙉', '🙊',
             *                 '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
             *                 '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕', '👇',
             *                 '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶',
             *                 '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
             *                 '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈', '🎉',
             *                 '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷',
             *                 '💰', '🖊', '📅', '✅', '❎', '💯']}
             */
            emojis: string[];
        }>;
        image: Partial<{
            icon: 'image';
            className?: string;
            popupclassName?: string;
            urlEnabled: true;
            uploadEnabled: true;
            alignmentEnabled: false;
            uploadCallback: undefined;
            defaultSize: {
                height: 'auto';
                width: '100%';
            };
        }>;
        remove: Partial<{
            icon: 'eraser';
            className?: string;
        }>;
        history: Partial<{
            inDropdown: false;
            className?: string;
            /**
             * history
             *
             * @type {['undo', 'redo']}
             */
            options: string[];
            undo: {
                icon: 'undo';
                className?: string;
            };
            redo: {
                icon: 'redo';
                className?: string;
            };
        }>;
    }>;
    /** */
    locale?: string;
    [key: string]: any;
}
export interface DraftState {
}
/**
 * Draft
 *
 * @class Draft
 * @extends {React.Component<DraftProps, DraftState>}
 */
declare class Draft extends React.Component<DraftProps, DraftState> {
    static defaultProps: DraftProps;
    render(): JSX.Element;
}
export default Draft;
