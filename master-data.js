const MASTER_DATA = {
    app: {
        version: "0.3",
        currency: "INR",
        currencySymbol: "₹",
        locale: "en-IN",
        dateFormat: "DD-MMM-YYYY",
    },

    schema: {
        categoryItemShape: {
            id: "string",
            name: "string",
        },
    },

    incomeCategories: [
        { id: "salary", name: "Salary" },
        { id: "bonus", name: "Bonus" },
        { id: "interest", name: "Interest" },
        { id: "family", name: "Family" },
        { id: "gift", name: "Gift" },
        { id: "friends", name: "Friends" },
        { id: "bank_interest", name: "Bank Interest or Deposit" },
        { id: "other", name: "Other" },
    ],

    expenseCategories: [
        { id: "home", name: "Home" },
        { id: "food", name: "Food & Dining" },
        { id: "transport", name: "Transport" },
        { id: "shopping", name: "Shopping" },
        { id: "medical", name: "Medical" },
        { id: "subscription", name: "Subscriptions" },
        { id: "investment", name: "Investment" },
        { id: "family", name: "Family" },
        { id: "travel", name: "Travel" },
        { id: "insurance", name: "Insurance" },
        { id: "tax", name: "Tax" },
        { id: "credit_cards", name: "Credit Cards" },
        { id: "loan_interest", name: "Loan Interest" },
        { id: "Studies", name: "Studies" },
        { id: "other", name: "Other" },
    ],

    creditCards: [
        { id: "amazon_icici", name: "Amazon Pay ICICI" },
        { id: "sbi_phonepe_black", name: "SBI PhonePe Black" },
        { id: "icici_coral", name: "ICICI Coral" },
        { id: "icici_amazon_pay", name: "ICICI Amazon Pay" },
        { id: "axis_ace", name: "Axis Rewards" },
        { id: "hdfc_swiggy", name: "HDFC Swiggy" },
        { id: "hdfc_rupay", name: "HDFC Rupay" },
        { id: "all_Cards", name: "All Cards Bill" },
    ],

    investments: [
        { id: "ppfas", name: "PPFAS Flexi Cap" },
        { id: "bandhan_small_cap", name: "Bandhan Small Cap" },
        { id: "helios_flexi_cap", name: "Helios Flexi Cap" },
        { id: "chit_fund", name: "Chitti" },
        { id: "nps", name: "NPS" },
        { id: "bond", name: "Bond Investment" },
        { id: "gold", name: "Gold" },
        { id: "epf", name: "Provident Fund" },
    ],
    fatherInvestments: [
        { id: "bandhan_small_cap", name: "Bandhan Small Cap" },
        { id: "bond", name: "Bond Interest" },
    ],
    subscriptions: [
        { id: "chatgpt", name: "ChatGPT" },
        { id: "hotstar", name: "Hotstar" },
        { id: "amaon_prime", name: "Amazon Prime" },
        { id: "netflix", name: "Netflix" },
        { id: "youtube", name: "YouTube Premium" },
    ],

    familyMembers: [
        { id: "father", name: "Father" },
        { id: "mother", name: "Mother" },
        { id: "bavagaru", name: "Bavagaru" },
    ],

    banks: [
        { id: "sbi", name: "State Bank of India" },
        { id: "icici", name: "ICICI Bank" },
        { id: "hdfc", name: "HDFC Bank" },
        { id: "boi", name: "Bank of India" },
    ],

    loans: [
        { id: "home_loan", name: "Home Loan" },
        { id: "home_loan_topup", name: "Home Loan TopUp" },
        { id: "icici_personal_loan1", name: "ICICI Personal Loan 1" },
        { id: "icici_personal_loan2", name: "ICICI Personal Loan 2" },
        { id: "navi_personal_loan", name: "Navi Personal Loan 2" },
        { id: "car_loan", name: "Car Loan" },
    ],
};
