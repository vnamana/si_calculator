/*
 * ===========================================================
 * Cashflow Planner - Schema Migration
 * ===========================================================
 * Every saved record passes through this file before use.
 * This allows old versions to work forever.
 * ===========================================================
 */

function migrateCashflowRecord(record) {

    if (!record) return record;

    // Already latest schema
    if (record.schemaVersion === MASTER.app.schemaVersion) {
        return record;
    }

    // Legacy records (no schemaVersion)
    if (!record.schemaVersion) {
        record = migrateLegacyRecord(record);
    }

    return record;
}


/* ===========================================================
 * Legacy -> Schema Version 1
 * =========================================================== */

function migrateLegacyRecord(record) {

    record.schemaVersion = MASTER.app.schemaVersion;

    record.income = migrateItems(record.income, "income");
    record.creditCards = migrateItems(record.creditCards, "credit_cards");
    record.otherExpenses = migrateItems(record.otherExpenses, "expense");
record.income = classifyIncomeItems(record.income);
record.creditCards = classifyCreditCardItems(record.creditCards);
    console.log("After Classify:", record.creditCards);
record.otherExpenses = classifyExpenseItems(record.otherExpenses);
    return record;
}


/* ===========================================================
 * Generic Item Migration
 * =========================================================== */

function migrateItems(items, type) {

    if (!Array.isArray(items)) return [];

    return items.map(item => {

        // Already migrated
        if (item.id) return item;

        return {

            id: crypto.randomUUID(),

            type: type,

            name: item.name || "",

            amount: Number(item.amount || 0),

            categoryId: null,

            itemId: null,

            notes: "",

            createdAtMs: Date.now()

        };

    });

}

function classifyIncomeItems(items) {
    return items.map(item => {
        const categoryId = findAlias("income", item.name);
        if (categoryId) item.categoryId = categoryId;
        return item;
    });
}

function classifyCreditCardItems(items) {
    return items.map(item => {
        const cardId = findAlias("creditCards", item.name);

        if (cardId) {
            item.categoryId = "credit_cards";
            item.itemId = cardId;
        }

        return item;
    });
}

function classifyExpenseItems(items) {
    return items.map(item => {

        const categoryId = findAlias("expenseCategories", item.name);

        if (categoryId)
            item.categoryId = categoryId;

        if (categoryId === "loan_emi")
            item.itemId = "home_loan";

        if (categoryId === "loan_interest" && /lic/i.test(item.name))
            item.itemId = "lic_personal_loan";

        return item;
    });
}

/* ===========================================================
 * Future Schema Examples
 * =========================================================== */

/*

function migrateV1toV2(record){

    record.schemaVersion = 2;

    return record;

}

function migrateV2toV3(record){

    record.schemaVersion = 3;

    return record;

}

*/
