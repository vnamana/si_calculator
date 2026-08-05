const MASTER = {
    app: {
        schemaVersion: 1,
        version: "1.0.0",
        currency: "INR",
        currencySymbol: "₹",
        locale: "en-IN",
        dateFormat: "DD-MMM-YYYY",
    },

    incomeCategories: [
        { id: "salary", name: "Salary", icon: "💼", color: "#2E7D32", sortOrder: 1 },
        { id: "family", name: "Family", icon: "👨‍👩‍👧", color: "#EC4899", sortOrder: 2 },
        { id: "friends", name: "Friends", icon: "🤝", color: "#14B8A6", sortOrder: 3 },
        { id: "bonus", name: "Bonus", icon: "🎉", color: "#F59E0B", sortOrder: 4 },
        { id: "interest", name: "Interest", icon: "📈", color: "#2563EB", sortOrder: 5 },
        { id: "refund", name: "Refund", icon: "📈", color: "#2563EB", sortOrder: 6 },
        { id: "mf_redemption", name: "MF Redemption", icon: "🔁", color: "#7C3AED", sortOrder: 7 },
        { id: "opening_balance", name: "Opening Balance", icon: "🧾", color: "#06B6D4", sortOrder: 8 },
        { id: "other", name: "Other", icon: "🧩", color: "#6B7280", sortOrder: 99 }
    ],

    expenseCategories: [
        { id: "home_maintenance", name: "Home Maintenance", icon: "🛠️", color: "#E67E22" },
        { id: "chit_fund", name: "Chit Fund", icon: "📊", color: "#16A34A" },
        { id: "mf_investment", name: "MF Investment", icon: "📈", color: "#1E40AF" },
        { id: "father_mf_investment", name: "Father MF Investment", icon: "👴", color: "#0B5A4A" },
        { id: "family", name: "Family", icon: "👪", color: "#E11D48" },
        { id: "loan_emi", name: "Loan EMI", icon: "💸", color: "#DC2626" },
        { id: "loan_interest", name: "Loan Interest", icon: "📉", color: "#9333EA" },
        { id: "bank_withdrawal", name: "Bank Withdrawal", icon: "🏧", color: "#0F172A" },
        { id: "home", name: "Home", icon: "🏠", color: "#4F46E5" },
        { id: "entertainment", name: "Entertainment", icon: "🎬", color: "#EC407A" },
        { id: "food", name: "Food & Dining", icon: "🍽️", color: "#F97316" },
        { id: "travel", name: "Travel", icon: "✈️", color: "#0284C7" },
        { id: "other", name: "Other", icon: "🧩", color: "#6B7280" }
    ],

    creditCards: [
        { id: "amazon_pay_icici", name: "Amazon Pay ICICI", issuer: "ICICI", active: true },
        { id: "icici_coral", name: "ICICI Coral", issuer: "ICICI", active: true },
        { id: "icici_hpcl", name: "ICICI HPCL", issuer: "ICICI", active: true },
        { id: "sbi_phonepe_black", name: "SBI PhonePe Black", issuer: "SBI", active: true },
        { id: "axis_rewards", name: "Axis Rewards", issuer: "Axis", active: true },
        { id: "hdfc_swiggy", name: "HDFC Swiggy", issuer: "HDFC", active: true },
        { id: "hdfc_rupay", name: "HDFC Rupay", issuer: "HDFC", active: true },
        { id: "jupiter", name: "Jupiter", issuer: "Jupiter", active: true }
    ],

    investments: [
        { id: "ppfas", name: "PPFAS Flexi Cap", type: "mutual_fund" },
        { id: "bandhan_small_cap", name: "Bandhan Small Cap", type: "mutual_fund" },
        { id: "helios_flexi_cap", name: "Helios Flexi Cap", type: "mutual_fund" },
        { id: "bond", name: "Corporate Bond", type: "bond" },
        { id: "gold", name: "Gold", type: "gold" },
        { id: "nps", name: "NPS", type: "retirement" },
        { id: "epf", name: "EPF", type: "retirement" },
        { id: "chit_fund", name: "Chitti", type: "chit_fund" },
        { id: "jupiter_pot", name: "Jupiter Pot", type: "savings" }
    ],

    subscriptions: [
        { id: "chatgpt", name: "ChatGPT" },
        { id: "amazon_prime", name: "Amazon Prime" },
        { id: "youtube", name: "YouTube Premium" },
        { id: "hotstar", name: "Hotstar" },
        { id: "netflix", name: "Netflix" }
    ],

    contacts: [
        { id: "father", name: "Father", type: "family" },
        { id: "mother", name: "Mother", type: "family" },
        { id: "bavagaru", name: "Bavagaru", type: "family" },
        { id: "sister", name: "Sister", type: "family" },
        { id: "prash", name: "Prash", type: "friend" }
    ],

    banks: [
        { id: "sbi", name: "State Bank of India", shortName: "SBI" },
        { id: "icici", name: "ICICI Bank", shortName: "ICICI" },
        { id: "hdfc", name: "HDFC Bank", shortName: "HDFC" },
        { id: "boi", name: "Bank of India", shortName: "BOI" },
        { id: "jupiter", name: "Jupiter", shortName: "Jupiter" }
    ],

    loans: [
        { id: "home_loan", name: "Home Loan" },
        { id: "home_loan_topup", name: "Home Loan Top-up" },
        { id: "car_loan", name: "Car Loan" },
        { id: "icici_personal_loan1", name: "ICICI Personal Loan 1" },
        { id: "icici_personal_loan2", name: "ICICI Personal Loan 2" },
        { id: "navi_personal_loan", name: "Navi Personal Loan" },
        { id: "lic_personal_loan", name: "LIC Personal Loan" }
    ],

};
