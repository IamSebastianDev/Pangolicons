type Theme = 'light' | 'dark' | 'system' | 'fancy';
type Target = '_blank' | '_self';

interface Action {
    type: string;
    payload?: any;
}
