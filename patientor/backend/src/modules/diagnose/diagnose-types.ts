export type Diagnose = {
  code: string;
  name: string;
  latin?: string;
};

export type NewDiagnose = Omit<Diagnose, 'code'>;
