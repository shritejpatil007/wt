// index.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

//  Define Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    marks: Number
});

// Create Model (Collection)
const Student = mongoose.model('Student', studentSchema);

// CRUD Operations

// ➕ Insert a new student
async function insertStudent() {
    const student = new Student({
        name: 'ABC',
        age: 21,
        course: 'Full Stack Development',
        marks: 92
    });

    const result = await student.save();
    console.log('Student inserted:', result);
}

// Retrieve all students
async function getAllStudents() {
    const students = await Student.find();
    console.log('All Students:');
    console.log(students);
}

// ✏️ Update a student’s marks using their name
async function updateMarks(name, newMarks) {
    const result = await Student.updateOne(
        { name: name },
        { $set: { marks: newMarks } }
    );

    if (result.matchedCount > 0)
        console.log(`Updated marks for ${name} to ${newMarks}`);
    else
        console.log(`No student found with name: ${name}`);
}

// ❌ Delete a student by name
async function deleteStudent(name) {
    const result = await Student.deleteOne({ name: name });

    if (result.deletedCount > 0)
        console.log(`Deleted student: ${name}`);
    else
        console.log(`No student found with name: ${name}`);
}

// Run Operations (Uncomment the ones you want)

insertStudent();
// getAllStudents();
// updateMarks('Rohan Patil', 95);
// deleteStudent('Rohan Patil');

