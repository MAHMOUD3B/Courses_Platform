import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaClock,
  FaGlobe,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

const CourseMaterials = () => {
  const materials = [
    { icon: <FaMoneyBillWave />, label: "Price:", value: "200$" },
    { icon: <FaChalkboardTeacher />, label: "Instructor:", value: "Edward Norton" },
    { icon: <FaClock />, label: "Duration:", value: "3 weeks" },
    { icon: <FaBookOpen />, label: "Lessons:", value: "8" },
    { icon: <FaUsers />, label: "Enrolled:", value: "65 students" },
    { icon: <FaGlobe />, label: "Language:", value: "English" },
  ];

  return (
    <section className="p-5 shadow md:w-[65%] md:pe-7">
      <h3 className="mb-4">Course Materials</h3>
      <ul className="course-materials h-[250px] overflow-y-auto">
        {materials.map((material, index) => (
          <li key={index} className="flex-between py-2">
            <span className="flex items-center font-[300]">
              {material.icon} <span className="ms-2">{material.label}</span>
            </span>
            <span className="ms-2 font-[400]">{material.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseMaterials;
