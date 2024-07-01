export default function getStudentIdsSum (list) {
    return list.reduce((accumulator, stuId) => accumulator + stuId.id, 0);
}