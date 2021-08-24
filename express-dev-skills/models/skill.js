const skills = [
    {id: 126547, skill: 'Fast learner'},
    {id: 146436, skill: 'Strong problem solver'},
    {id: 135673, skill: 'Proficient in HTML, CSS, and Javascript'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}