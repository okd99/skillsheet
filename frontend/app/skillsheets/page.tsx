import Link from 'next/link';
import type { SkillSheet } from '@/types/skillsheet';

export default async function SkillSheetListPage() {
  const res = await fetch('http://localhost:8080/api/skillsheets', {
    cache: 'no-store',
  });

  const skillsheets: SkillSheet[] = await res.json();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">スキルシート一覧</h1>

      <Link
        href="/skillsheets/new"
        className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        ＋ 新規作成
      </Link>

      <div className="space-y-4">
        {skillsheets.map((sheet) => (
          <Link
            key={sheet.id}
            href={`/skillsheets/${sheet.id}`}
            className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{sheet.title}</h2>
            <p className="text-gray-600">
              {sheet.periodFrom} ~ {sheet.periodTo}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
