
/**
 * Creates a standard transaction object.
 */
function createTransaction({
    transactionType,
    categoryId = "other",
    itemId = null,
    description = "",
    amount = 0,
    notes = ""
}) {
    return {
        id: crypto.randomUUID(),
        transactionType,
        categoryId,
        itemId,
        description,
        amount: Number(amount) || 0,
        notes
    };
}

/**
 * Converts old Firestore structure into unified transactions.
 */
function convertLegacyRecord(record) {

    const transactions = [];

    (record.incomes || []).forEach(row => {
        transactions.push(createTransaction({
            transactionType: "income",
            description: row.description,
            amount: row.amount
        }));
    });

    (record.cardBills || []).forEach(row => {
        transactions.push(createTransaction({
            transactionType: "expense",
            categoryId: "credit_cards",
            description: row.description,
            amount: row.amount
        }));
    });

    (record.otherExpenses || []).forEach(row => {
        transactions.push(createTransaction({
            transactionType: "expense",
            description: row.description,
            amount: row.amount
        }));
    });

    return transactions;
}

/**
 * Returns transactions from either
 * the new schema or converts old schema.
 */
function getTransactions(record) {

    if (record.transactions) {
        return record.transactions;
    }

    return convertLegacyRecord(record);
}
