function normalizeAlias(value) {
    return (value || "")
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

function findAlias(group, value) {

    const normalized = normalizeAlias(value);

    if (!normalized) return null;

    const source = ALIASES[group];

    if (!source) return null;

    for (const id in source) {

        const aliases = source[id];

        if (aliases.some(a => normalizeAlias(a) === normalized)) {
            return id;
        }

    }

    return null;
}