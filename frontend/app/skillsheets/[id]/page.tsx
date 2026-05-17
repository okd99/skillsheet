import type { SkillSheet } from '@/types/skillsheet';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SkillSheetDetailPage({ params }: Props) {
  const { id } = await params; // ← Next.js 16 では必須

  const res = await fetch(`http://localhost:8080/api/skillsheets/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <div className="p-8">
        <p>データが見つかりませんでした。</p>
        <Link href="/skillsheets" className="text-blue-600 underline">
          ← 一覧に戻る
        </Link>
      </div>
    );
  }

  const sheet: SkillSheet = await res.json();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{sheet.title}</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <p>
          <span className="font-semibold">期間：</span>
          {sheet.periodFrom} ~ {sheet.periodTo}
        </p>

        <p>
          <span className="font-semibold">メンバー：</span>
          {sheet.members}
        </p>

        <p>
          <span className="font-semibold">スタック：</span>
          {sheet.stack}
        </p>

        <p>
          <span className="font-semibold">ツール：</span>
          {sheet.tools}
        </p>

        <p>
          <span className="font-semibold">業務内容：</span>
          <br />
          {sheet.description}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          href={`/skillsheets/${sheet.id}/edit`}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          編集
        </Link>

        <Link href="/skillsheets" className="px-4 py-2 bg-gray-300 rounded-lg">
          ← 一覧に戻る
        </Link>
      </div>
    </div>
  );
}
