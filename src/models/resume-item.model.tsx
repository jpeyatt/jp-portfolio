export interface IResumeItem {
    id: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
    title: string;
    company: string;
    summary: string;
    responsibilities: Responsibility[];
};

interface Responsibility {
    id: string;
    text: string;
};