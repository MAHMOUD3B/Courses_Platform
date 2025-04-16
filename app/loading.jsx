export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          جاري التحميل...
        </h2>
        <p className="text-gray-600 mt-2">
          يرجى الانتظار قليلاً أثناء تحميل المحتوى.
        </p>
      </div>
    </div>
  );
}
