import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex-center min-h-screen bg-gray-100 px-5">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-full">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          الصفحة غير موجودة
        </h2>
        <p className="text-gray-600 mb-6">
          عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. قد تكون قد تم حذفها
          أو أن الرابط غير صحيح.
        </p>
        <Link
          href={"/"}
          className="flex-center cursor-pointer gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          <FaHome />
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
