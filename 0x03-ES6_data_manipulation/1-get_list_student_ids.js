export default function getListStudentIds (list) {
    if (Array.isArray(list)) {
        return list.map((studentId) => studentId.id);
    } else {
        return [];
    }
}