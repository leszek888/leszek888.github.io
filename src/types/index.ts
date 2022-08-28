export interface AccountValue {
  currency: string;
  value: number;
}

export interface Account {
  label: string;
  values: Array<AccountValue>;
  sub_accounts?: Array<Account>;
}

export interface ReportTable {
  [key: string]: Account
}
