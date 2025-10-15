export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

// Calculate years of service dynamically
const ESTABLISHED_YEAR = 1921;
const currentYear = new Date().getFullYear();
const yearsOfService = currentYear - ESTABLISHED_YEAR;

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 1921,
                label: 'Established',
            },
            {
                value: 500,
                label: 'Annual Emergency Calls',
                prefix: '+'
            },
            {
                value: 28,
                label: 'Professional & Volunteer Firefighters',
                prefix: '+'
            },
            {
                value: 24,
                label: 'Hours a Day Protection',
                suffix: '/7'
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 1921,
                label: 'Established',
            },
            {
                value: 500,
                label: 'Annual Calls',
                prefix: '+'
            },
            {
                value: 4,
                label: 'Fire Engines',
            },
            {
                value: 1,
                label: 'Brush Truck',
            },
            {
                value: 8,
                label: 'Full-Time Firefighters',
            },
            {
                value: yearsOfService,
                label: 'Years of Service',
                suffix: ' yrs'
            }
        ]
    }
};
