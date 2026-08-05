const MASTER = {
    app: {
        version: "0.3",
        currency: "INR",
        currencySymbol: "₹",
        locale: "en-IN",
        dateFormat: "DD-MMM-YYYY",
    },

    incomeCategories: [
        { id: "salary", name: "Salary", icon: "💼", color: "#2E7D32" },
        { id: "bonus", name: "Bonus", icon: "🎉", color: "#F59E0B" },
        { id: "interest", name: "Interest", icon: "📈", color: "#2563EB" },
        { id: "family", name: "Family", icon: "👨‍👩‍👧", color: "#EC4899" },
        { id: "gift", name: "Gift", icon: "🎁", color: "#8B5CF6" },
        { id: "friends", name: "Friends", icon: "🤝", color: "#14B8A6" },
        { id: "bank_interest", name: "Bank Interest or Deposit", icon: "🏦", color: "#0EA5E9" },
        { id: "other", name: "Other", icon: "🧩", color: "#6B7280" },
    ],

    expenseCategories: [
        { id: "home", name: "Home", icon: "🏠", color: "#4F46E5" },
        { id: "food", name: "Food & Dining", icon: "🍽️", color: "#F97316" },
        { id: "transport", name: "Transport", icon: "🚌", color: "#0EA5E9" },
        { id: "shopping", name: "Shopping", icon: "🛍️", color: "#DB2777" },
        { id: "medical", name: "Medical", icon: "🩺", color: "#DC2626" },
        { id: "subscription", name: "Subscriptions", icon: "📺", color: "#7C3AED" },
        { id: "investment", name: "Investment", icon: "📊", color: "#16A34A" },
        { id: "family", name: "Family", icon: "👪", color: "#E11D48" },
        { id: "travel", name: "Travel", icon: "✈️", color: "#0284C7" },
        { id: "insurance", name: "Insurance", icon: "🛡️", color: "#1D4ED8" },
        { id: "tax", name: "Tax", icon: "🧾", color: "#B45309" },
        { id: "power", name: "Power", icon: "⚡", color: "#CA8A04" },
        { id: "gas", name: "Gas", icon: "🔥", color: "#EA580C" },
        { id: "fuel", name: "Fuel", icon: "⛽", color: "#0891B2" },
        { id: "credit_cards", name: "Credit Cards", icon: "💳", color: "#7C2D12" },
        { id: "loan_interest", name: "Loan Interest", icon: "📉", color: "#9333EA" },
        { id: "studies", name: "Studies", icon: "📚", color: "#2563EB" },
        { id: "other", name: "Other", icon: "🧩", color: "#6B7280" },
    ],

    creditCards: [
        { id: "amazon_pay_icici", name: "Amazon Pay ICICI", "active": true },
        { id: "sbi_phonepe_black", name: "SBI PhonePe Black", "active": true },
        { id: "icici_coral", name: "ICICI Coral", "active": true },
        { id: "axis_rewards", name: "Axis Rewards", "active": true },
        { id: "hdfc_swiggy", name: "HDFC Swiggy", "active": true },
        { id: "hdfc_rupay", name: "HDFC Rupay", "active": true },
        { id: "all_cards", name: "All Cards Bill", "active": true },
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
    InvestmentOwners: [
        { id: "self", name: "Self" },
        { id: "father", name: "Father" },
    ],
    subscriptions: [
        { id: "chatgpt", name: "ChatGPT" },
        { id: "hotstar", name: "Hotstar" },
        { id: "amazon_prime", name: "Amazon Prime" },
        { id: "netflix", name: "Netflix" },
        { id: "youtube", name: "YouTube Premium" },
    ],

    contacts: [
        { id: "father", name: "Father", type:"Family" },
        { id: "mother", name: "Mother", type:"Family" },
        { id: "bavagaru", name: "Bavagaru", type:"Family" },
        { id: "sister", name: "Sister", type:"Family" },
        { id: "friend", name: "Friend", type:"Friend" },
    ],

    banks: [
        { id: "sbi", name: "State Bank of India", shortName: "SBI" },
        { id: "icici", name: "ICICI Bank", shortName: "ICICI" },
        { id: "hdfc", name: "HDFC Bank", shortName: "HDFC" },
        { id: "boi", name: "Bank of India", shortName: "BOI" },
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
