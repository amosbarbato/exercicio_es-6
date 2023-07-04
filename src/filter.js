const student = [
    { 
        name: "João", 
        nota: 8
    }, { 
        name: "Maria", 
        nota: 5
    }, { 
        name: "Pedro", 
        nota: 4
    }, { 
        name: "Ana", 
        nota: 6
    }, { 
        name: "Lucas", 
        nota: 9
    }, { 
        name: "Sofia", 
        nota: 2
    }, 
];

function approvedOnly(student) {
    const approvedStudent = student.filter (
        student => student.nota >= 6
    );
    return approvedStudent;
}

console.log(approvedOnly(student));