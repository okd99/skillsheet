'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SkillSheet } from '@/types/skillsheet';
import DeleteButton from './delete-button';
import Link from 'next/link';

export default function SkillSheetEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [sheet, setSheet] = useState<SkillSheet | null>(null);

  const [title, setTitle] = useState('');
  const [periodFrom, setPeriodFrom] = useState('');
  const [periodTo, setPeriodTo] = useState('');
  const [members, setMembers] = useState('');
  const [stack, setStack] = useState('');
  const [tools, setTools] = useState('');
  const [description, setDescription] = useState('');

  // 初期データ取得
  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;

      const res = await fetch(`http://localhost:8080/api/skillsheets/${id}`);
      const data: SkillSheet = await res.json();

      setSheet(data);

      setTitle(data.title);
      setPeriodFrom(data.periodFrom);
      setPeriodTo(data.periodTo);
      setMembers(data.members);
      setStack(data.stack);
      setTools(data.tools);
      setDescription(data.description);
    };

    fetchData();
  }, [params]);

  if (!sheet) return <div className="p-8">読み込み中...</div>;

  // 更新処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { id } = await params;

    await fetch(`http://localhost:8080/api/skillsheets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        periodFrom,
        periodTo,
        members,
        stack,
        tools,
        description,
      }),
    });

    router.push(`/skillsheets/${id}`);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">スキルシート編集</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block font-semibold mb-1">タイトル</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">期間（開始）</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={periodFrom}
              onChange={(e) => setPeriodFrom(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="block font-semibold mb-1">期間（終了）</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={periodTo}
              onChange={(e) => setPeriodTo(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">メンバー</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">スタック</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">ツール</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">業務内容</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          更新する
        </button>
      </form>

      <div className="mt-6 flex gap-4">
        <DeleteButton id={sheet.id} />

        <Link href="/skillsheets" className="px-4 py-2 bg-gray-300 rounded-lg">
          ← 一覧に戻る
        </Link>
      </div>
    </div>
  );
}
