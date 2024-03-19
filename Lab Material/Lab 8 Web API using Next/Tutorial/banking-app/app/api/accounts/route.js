const accounts = [
    {
        "accountNo": 1102,
        "acctType": "Current",
        "balance": 500000,
        "monthlyFee": 15
    },
    {
        "accountNo": 2003,
        "acctType": "Saving",
        "balance": 9000,
        "minimumBalance": 1000
    },
    {
        "accountNo": 2004,
        "acctType": "Saving",
        "balance": 400000,
        "minimumBalance": 1000
    },
    {
        "accountNo": 4444,
        "acctType": "Saving",
        "balance": 250000,
        "minimumBalance": 1000
    },
    {
        "accountNo": 4000,
        "acctType": "Current",
        "balance": 15000
    },
    {
        "accountNo": 8000,
        "acctType": "Current",
        "balance": 15000
    },
    {
        "accountNo": 1101,
        "acctType": "Current",
        "balance": 5
    },
    {
        "accountNo": 80000,
        "acctType": "Current",
        "balance": 5
    },
    {
        "accountNo": 4567891,
        "acctType": "Current",
        "balance": 80000
    },
    {
        "acctType": "Current",
        "balance": 800009999,
        "accountNo": "IEHnwqVCgeJqj8u2mzHWS"
    },
    {
        "acctType": "Current",
        "balance": 800009999,
        "accountNo": "WZ6lUUyQWq_GeiuLhWJqw"
    },
    {
        "acctType": "Saving",
        "balance": 9999999,
        "minimumBalance": 1000,
        "accountNo": "xwTQEw8omvIspjznc52Hn"
    },
    {
        "acctType": "Saving",
        "balance": 9090,
        "minimumBalance": 1000,
        "accountNo": "a05GpsOzAMPJ6OZ4eA_WG"
    },
    {
        "acctType": "Saving",
        "balance": 9090,
        "minimumBalance": 1000,
        "accountNo": "hyCkQZAnt5m1f9ntm-rOU"
    }
]

export async function GET(request) {
    const message = "Welcome to your first API call [ /api/accounts]"
    return Response.json(accounts, { status: 200 })
}

// npm i