import { quintOut } from "svelte/easing";
import type { ScaleParams } from "svelte/types/runtime/transition";

export type OnDialogClose = (reason: CloseReason, event: Event) => void;

export type CloseReason = typeof closeReasons[number];

export const defaultDialogScale: Readonly<ScaleParams> = {
  duration: 200,
  easing: quintOut,
  opacity: 0.5,
  start: 0.75,
};

const closeReasons = ["user", "closeButton", "escape", "overlay"] as const;