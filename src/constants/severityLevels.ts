// Define a custom type for severity
export type SeverityType =
    | 'fatal'
    | 'error'
    | 'warning'
    | 'log'
    | 'info'
    | 'debug';

// Export the severity constants as named exports
export const SEVERITY_FATAL: SeverityType = 'fatal';
export const SEVERITY_ERROR: SeverityType = 'error';
export const SEVERITY_WARNING: SeverityType = 'warning';
export const SEVERITY_LOG: SeverityType = 'log';
export const SEVERITY_INFO: SeverityType = 'info';
export const SEVERITY_DEBUG: SeverityType = 'debug';