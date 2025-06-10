// Liste locale simulant la BDD (à remplacer par un appel API plus tard)
let categories = [
    { id: 1, name: "Culture générale" },
    { id: 2, name: "Maths" },
    { id: 3, name: "Code" },
    { id: 4, name: "Pêche et chasse" },
    { id: 5, name: "Roman" },
    { id: 6, name: "Vie perso" },
    { id: 7, name: "Vie pratique" },
    { id: 8, name: "Alambic" },
    { id: 9, name: "Jardinage" }
];

// Simule un appel asynchrone pour récupérer les catégories
export async function fetchCategories() {
    return Promise.resolve([...categories]);
}

// Simule l'ajout d'une nouvelle catégorie (uniquement côté front pour l'instant)
export async function addCategory(name) {
    // Vérifie si la catégorie existe déjà (insensible à la casse)
    const exists = categories.some(
        c => c.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (exists) {
        return categories.find(
            c => c.name.toLowerCase() === name.trim().toLowerCase()
        );
    }
    const newCategory = {
        id: categories.length ? Math.max(...categories.map(c => c.id)) + 1 : 1,
        name: name.trim()
    };
    categories.push(newCategory);
    return newCategory;
}
