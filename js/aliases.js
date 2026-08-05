const ALIASES = {

    income: {

        salary: [
            "salary",
            "income",
            "income1",
            "income 1",
            "income2",
            "income 2",
            "income3",
            "income 3",
            "income4",
            "income 4",
            "hdfc"
        ],

        family: [
            "father",
            "dad"
        ],

        friends: [
            "prash",
            "prashu"
        ],

        bonus: [
            "bonus"
        ],

        interest: [
            "interest"
        ],

        bank_interest: [
            "bank interest",
            "fd interest"
        ]

    },

    creditCards: {

        amazon_pay_icici: [
            "amazon",
            "amazon pay",
            "amazon icici",
            "amazonpay",
            "amzn",
            "icici amzn",
            "icici amazon"
        ],

        icici_coral: [
            "coral",
            "icici coral"
        ],

        icici_hpcl: [
            "hpcl",
            "icici hpcl"
        ],

        sbi_phonepe_black: [
            "sbi",
            "phonepe",
            "phonepe black"
        ],

        axis_rewards: [
            "axis"
        ],

        hdfc_swiggy: [
            "swiggy",
            "hdfc swiggy"
        ],

        hdfc_rupay: [
            "rupay",
            "hdfc rupay"
        ],

        jupiter: [
            "jupiter"
        ]

    },

    expenseCategories: {

        home: [
            "home",
            "house"
        ],

        investment: [
            "mf",
            "mutual fund",
            "chitti",
            "chit",
            "jupiter pot"
        ],

        family: [
            "bavagaru",
            "bava",
            "father",
            "dad",
            "sis",
            "sister",
            "watchman"
        ],

        entertainment: [
            "movie",
            "movies"
        ],

        loan_emi: [
            "emi",
            "loan"
        ],

        loan_interest: [
            "lic interest",
            "lic loan",
            "ic loan"
        ],

        other: [
            "cash",
            "shirdi",
            "ai",
            "visa"
        ]

    }

};

function normalizeAlias(value) {

    return (value || "")
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}

function findAlias(type, text) {

    if (!text) return null;

    const aliases = ALIASES[type];

    if (!aliases)
        return null;

    const normalized = normalizeAlias(text);

    for (const id in aliases) {

        if (aliases[id].includes(normalized))
            return id;

    }

    return null;

}