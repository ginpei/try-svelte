import { quintOut } from "svelte/easing";
import type { ScaleParams } from "svelte/types/runtime/transition";
import { OnPopupClose, popupCloseReasons } from "../popup/popupMeta";

export type OnDialogClose = OnPopupClose<DialogCloseReason>;

export type DialogCloseReason = typeof dialogCloseReasons[number];

export const defaultDialogScale: Readonly<ScaleParams> = {
  duration: 200,
  easing: quintOut,
  opacity: 0.5,
  start: 0.75,
};

const dialogCloseReasons = [...popupCloseReasons, "closeButton"] as const;