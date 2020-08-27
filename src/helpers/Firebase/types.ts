export interface FirebaseConfig {
  apiKey: string | undefined
  authDomain: string | undefined
  databaseURL: string | undefined
  projectId: string | undefined
  storageBucket: string | undefined
  messagingSenderId: string | undefined
  appId: string | undefined
}

export interface GetResponse {
  id: string
  [key: string]: unknown
}

export enum Operator {
  '<' = '<',
  '<=' = '<=',
  '==' = '==',
  '>=' = '>=',
  '>' = '>',
}

export interface Where {
  field: string
  /** options: "<", "<=", "==", ">=", ">" */
  operator: Operator
  value: unknown
}
