export type ScreenShareStatus =
  | "idle" //  initial or default state
  | "requesting"
  | "granted"
  | "cancelled"
  | "denied"
  | "unsupported"
  | "error"
  | "stopped";
