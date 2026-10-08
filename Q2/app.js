const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


// MongoDB Connection
const mongoURI =
    "mongodb://user_455jknxzc:p455jknxzc@db01.dbhost.dev:5050/db_455jknxzc";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });


// Course Schema
const courseSchema = new mongoose.Schema({

    courseId: {
        type: String,
        required: true,
        unique: true
    },

    courseName: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    fee: {
        type: Number,
        required: true
    }

});


// Course Model
const Course = mongoose.model("Course", courseSchema);


// Home Route
app.get("/", (req, res) => {
    res.send("Course Management API is running");
});


// INSERT COURSE
app.post("/courses", async (req, res) => {

    try {

        const course = new Course(req.body);

        const savedCourse = await course.save();

        res.status(201).json({
            message: "Course inserted successfully",
            course: savedCourse
        });

    } catch (error) {

        res.status(400).json({
            message: "Error inserting course",
            error: error.message
        });

    }

});


// SEARCH COURSE BY courseId
app.get("/courses/:courseId", async (req, res) => {

    try {

        const course = await Course.findOne({
            courseId: req.params.courseId
        });

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.json(course);

    } catch (error) {

        res.status(500).json({
            message: "Error searching course",
            error: error.message
        });

    }

});


// Start Server
app.listen(5050, () => {
    console.log("Server running on http://localhost:5050");
});