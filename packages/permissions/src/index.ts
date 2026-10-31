export type PermissionAction = "create" | "read" | "update" | "delete" | "approve" | "export" | "manage";
export interface Permission { resource: string; action: PermissionAction; }
