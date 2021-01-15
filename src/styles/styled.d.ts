import 'styled-components'

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string;
        background: string;
        font: string;
        white: string;
        primary: string;
        hover: string;
        logo: string;
    }
}