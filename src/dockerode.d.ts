import 'dockerode';

declare module 'dockerode' {
    interface ContainerStats {
        name: string;
        id: string;
    }
}
