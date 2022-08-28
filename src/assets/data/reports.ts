export const BALANCE_SHEET = {
  assets: {
    label: 'Aktywa',
    values: [
      { currency: 'EUR', value: 42312.33 },
      { currency: 'PLN', value: 1250.3 }
    ],
    sub_accounts: [
      {
        label: 'Obrotowe',
        values: [
          { currency: 'EUR', value: 12312.33 },
          { currency: 'PLN', value: 1250.3 }
        ],
        sub_accounts: [
          {
            label: 'Bank',
            values: [
              { currency: 'EUR', value: 11302.30 },
              { currency: 'PLN', value: 1250.3 }
            ]
          },
          {
            label: 'Gotówka',
            values: [{ currency: 'EUR', value: 1010.03 }]
          }
        ]
      },
      {
        label: 'Trwałe',
        values: [ { currency: 'EUR', value: 30000 } ],
        sub_accounts: [
          {
            label: 'Samochód',
            values: [{ currency: 'EUR', value: 30000 } ]
          }
        ]
      }

    ]
  },
  equity_and_liabilities: {
    label: 'Pasywa',
    values: [
      { currency: 'EUR', value: 42312.33 },
      { currency: 'PLN', value: 1250.3 }
    ],
    sub_accounts: [
      {
        label: 'Kapitał',
        values: [
          { currency: 'EUR', value: 42312.33 },
          { currency: 'PLN', value: 1250.3 }
        ],
        sub_accounts: [
          {
            label: 'Otwarcie',
            values: [
              { currency: 'EUR', value: 42312.33 },
              { currency: 'PLN', value: 1250.3 }
            ],
          }
        ]
      }
    ]
  }
}
