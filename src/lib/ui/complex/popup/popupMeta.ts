export type OnPopupClose<T extends string = PopupCloseReason> = (reason: T, event: Event) => void;

export type PopupCloseReason = typeof popupCloseReasons[number];

export const popupCloseReasons = ["user", "escape", "overlay"] as const;
