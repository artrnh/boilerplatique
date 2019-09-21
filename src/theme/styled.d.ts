import 'styled-components';

declare module 'styled-components' {
    export interface IDefaultTheme {
        borderRadius: string;

        colors: {
            background: string;
            text: string;
            link: string;
        };
    }
}
