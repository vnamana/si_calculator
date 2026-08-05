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