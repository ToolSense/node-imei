declare module 'node-imei-ts' {
    export function random(): string
    export function device(device: string, model: string): string
    export function isValid(imei: string): boolean
}
