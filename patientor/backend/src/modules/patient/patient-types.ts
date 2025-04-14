export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
};

export type PublicPatientInfo = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;
