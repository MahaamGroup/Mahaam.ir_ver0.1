export type PageRoute =
  | 'home'
  | 'about'
  | 'how-it-works'
  | 'audiences'
  | 'audiences/physicians'
  | 'audiences/attorneys'
  | 'audiences/executives'
  | 'audiences/founders'
  | 'audiences/specialists'
  | 'pathways'
  | 'pathways/discovery'
  | 'pathways/experiences'
  | 'decision-matrix'
  | 'decision-engine'
  | 'assessment'
  | 'contact';

export interface AudienceProfile {
  id: string;
  slug: string;
  route: PageRoute;
  title: string;
  subtitle: string;
  tagline: string;
  heroQuote: string;
  iconName: string;
  challenges: {
    title: string;
    description: string;
    metricLabel?: string;
  }[];
  approaches: {
    title: string;
    description: string;
    stepNumber: string;
  }[];
  readinessIndex: {
    label: string;
    score: number;
    description: string;
  };
  sampleDelegation: {
    destination: string;
    focus: string;
    duration: string;
    outcomes: string[];
  };
}

export interface DecisionEngineState {
  cohort: string;
  primaryGoal: string;
  currentStage: string;
  criticalCriteria: string[];
  timeline: string;
  budgetScale: string;
}

export interface AssessmentFormState {
  formType: 'specialist' | 'executive' | 'institutional';
  fullName: string;
  phone: string;
  email: string;
  currentRole: string;
  yearsOfExperience: string;
  targetDestination: string;
  primaryObjective: string;
  capitalReadiness: string;
  notes: string;
  privacyConsent: boolean;
}
