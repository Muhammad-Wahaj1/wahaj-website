export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    date: 'Credential on public profile',
    badge: 'AZ-104'
  }
];
