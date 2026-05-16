import Link from 'next/link';
import { CalendarDays, FileText } from 'lucide-react';

export default function SkillSheetListPage() {
  const mock = [
    { id: 1, title: '医療システム開発', period: '2023/01 ~ 2023/06' },
    { id: 2, title: 'ECサイト構築', period: '2022/05 ~ 2022/12' },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">スキルシート一覧</h1>

        <Link
          href="/skillsheets/new"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ＋ 新規作成
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mock.map((s) => (
          <Link
            key={s.id}
            href={`/skillsheets/${s.id}`}
            className="block border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform"
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="text-blue-600" size={22} />
              <h2 className="text-xl font-semibold">{s.title}</h2>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <CalendarDays size={18} />
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">
                {s.period}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
