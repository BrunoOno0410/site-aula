import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

export const CoursesList = () => {
  const course = {
    id: 1,
    title: "Curso de Programação",
    lessons: [
      { id: 1, title: "Introdução à Programação" },
      { id: 2, title: "Estruturas de Controle" },
      { id: 3, title: "Funções" },
      { id: 4, title: "Arrays" },
      { id: 5, title: "Objetos" },
      { id: 6, title: "Classes" },
      { id: 7, title: "Herança" },
      { id: 8, title: "Polimorfismo" },
      { id: 9, title: "Encapsulamento" },
      { id: 10, title: "Interfaces" },
    ],
  };

  return (
    <div>
      <Navbar />
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">{course.title}</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {course.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/courses/${course.id}/lessons/${lesson.id}`}
              className="bg-white p-4 rounded shadow"
            >
              <h2 className="text-lg font-bold">{lesson.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};
