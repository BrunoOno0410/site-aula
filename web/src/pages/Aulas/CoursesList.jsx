import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCourseTitle, setNewCourseTitle] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/class-modules/");
        const data = await response.json();
        setCourses(data.class_modules);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCreateCourse = async () => {
    const response = await fetch("http://localhost:5000/class-modules/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newCourseTitle, classes: [] }),
    });
    const data = await response.json();
    setCourses((prevCourses) => [...prevCourses, data]);
    setNewCourseTitle("");
  };

  const handleDeleteCourse = async (moduleId) => {
    await fetch(`http://localhost:5000/class-modules/${moduleId}`, {
      method: "DELETE",
    });
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== moduleId)
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Cursos</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-50 p-4 rounded shadow">
              <h2 className="text-lg font-bold">{course.title}</h2>
              <Link to={`/aulas/${course.id}`} className="text-blue-500">
                Ver aulas
              </Link>
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Excluir
              </button>
            </div>
          ))}
          <div className="bg-white p-4 rounded shadow">
            <input
              type="text"
              value={newCourseTitle}
              onChange={(e) => setNewCourseTitle(e.target.value)}
              placeholder="Título do novo curso"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <button
              onClick={handleCreateCourse}
              className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
            >
              Adicionar Curso
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
