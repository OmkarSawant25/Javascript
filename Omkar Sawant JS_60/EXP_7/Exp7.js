//JavaScript

class SetOperations {
    // Union of two sets
    static union(setA, setB) {
        return new Set([...setA, ...setB]);
    }

    // Intersection of two sets
    static intersection(setA, setB) {
        return new Set([...setA].filter(item => setB.has(item)));
    }

    // Difference of two sets (A - B)
    static difference(setA, setB) {
        return new Set([...setA].filter(item => !setB.has(item)));
    }

    // Set difference (B - A)
    static setDifference(setA, setB) {
        return new Set([...setB].filter(item => !setA.has(item)));
    }
}

function calculateSetOperations() {
    const inputA = document.getElementById("inputA").value;
    const inputB = document.getElementById("inputB").value;

    const setA = new Set(inputA.split(',').map(Number));
    const setB = new Set(inputB.split(',').map(Number));

    const results = [];
    results.push("Set A: " + [...setA]);
    results.push("Set B: " + [...setB]);

    const unionResult = SetOperations.union(setA, setB);
    results.push("Union (A ∪ B): " + [...unionResult]);

    const intersectionResult = SetOperations.intersection(setA, setB);
    results.push("Intersection (A ∩ B): " + [...intersectionResult]);

    const differenceResult = SetOperations.difference(setA, setB);
    results.push("Difference (A - B): " + [...differenceResult]);

    const setDifferenceResult = SetOperations.setDifference(setA, setB);
    results.push("Set Difference (B - A): " + [...setDifferenceResult]);

    document.getElementById("results").textContent = results.join('\n');
}
