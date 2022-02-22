export type OnDialogClose = (reason: CloseReason, event: Event) => void;

export type CloseReason = typeof closeReasons[number];

const closeReasons = ["user", "closeButton", "overlay"] as const;