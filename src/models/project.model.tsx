export interface IProject {
    id: number;
    title: string;
    description: string;
    screenshot: string;
    stack: string[];
    github_url: string;
    demo_url: string;
};

export const NullProject: IProject =  {
    id: 0,
    title: '',
    description: '',
    screenshot: '',
    stack:  [],
    github_url:  '',
    demo_url:  ''
};