interface Window {
    ethereum: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: Array<any> }) => Promise<any>;
        enable?: () => Promise<any>;
        on: (event: string, handler: (...args: any[]) => void) => void;
    };
}