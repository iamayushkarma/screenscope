export type ScreenShareStatus =
  | "idle"
  | "requesting"
  | "granted"
  | "cancelled"
  | "denied"
  | "unsupported"
  | "error"
  | "stopped";
