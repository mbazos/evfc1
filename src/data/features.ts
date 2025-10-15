import { Flame, Shield, Heart, Users, Truck, Clock, Siren, Award } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Flame;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
    linkTarget?: '_self' | '_blank';
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Flame,
                title: 'Fire Protection',
                description: 'Professional firefighting services protecting Easton since 1921'
            },
            {
                icon: Shield,
                title: 'Emergency Response',
                description: 'Rapid response to fires, hazmat incidents, flooding, and disasters'
            },
            {
                icon: Truck,
                title: 'State-of-the-Art Apparatus',
                description: 'Four modern fire engines equipped for any emergency'
            },
            {
                icon: Clock,
                title: '24/7 Protection',
                description: 'Round-the-clock staffing with career and volunteer firefighters'
            },
            {
                icon: Users,
                title: 'Community Service',
                description: 'Dedicated volunteers serving and protecting our neighbors'
            },
            {
                icon: Award,
                title: 'Highly Trained',
                description: 'Firefighter I & II, HazMat, and specialized rescue certifications'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Community Focused',
                description: 'Serving Easton with dedication and pride'
            },
            {
                icon: Users,
                title: 'Volunteer Opportunities',
                description: 'Join our team and make a difference'
            },
            {
                icon: Shield,
                title: 'Always Ready',
                description: 'Prepared to respond to any emergency, any time'
            }
        ]
    }
};
