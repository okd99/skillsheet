'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CalendarDays, Users, Layers, Wrench, FileText } from 'lucide-react';

export default function SkillSheetNewPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [members, setMembers] = useState('');
  const [stack, setStack] = useState('');
  const [tools, setTools] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('http://localhost:8080/api/skillsheets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        periodFrom: startDate,
        periodTo: endDate,
        members,
        stack,
        tools,
        description,
      }),
    });

    router.push('/skillsheets');
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">スキルシート新規作成</h1>

      <div className="bg-white p-8 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <FileText size={20} className="text-blue-600" />
              タイトル
            </label>
            <input
              className="border p-3 w-full rounded-lg"
              placeholder="例: 医療システム開発"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <CalendarDays size={20} className="text-blue-600" />
              期間
            </label>
            <div className="flex gap-3">
              <input
                type="date"
                className="border p-3 w-full rounded-lg"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
              <span className="self-center">~</span>
              <input
                type="date"
                className="border p-3 w-full rounded-lg"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <Users size={20} className="text-blue-600" />
              メンバー
            </label>
            <input
              className="border p-3 w-full rounded-lg"
              placeholder="例: 3名"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <Layers size={20} className="text-blue-600" />
              スタック
            </label>
            <textarea
              className="border p-3 w-full rounded-lg"
              rows={2}
              placeholder="例: React, Next.js, Spring Boot, MySQL"
              value={stack}
              onChange={(e) => setStack(e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <Wrench size={20} className="text-blue-600" />
              ツール
            </label>
            <textarea
              className="border p-3 w-full rounded-lg"
              rows={2}
              placeholder="例: GitHub, Docker, Jira"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <FileText size={20} className="text-blue-600" />
              業務内容
            </label>
            <textarea
              className="border p-3 w-full rounded-lg"
              rows={4}
              placeholder="業務内容を入力"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            保存
          </button>
        </form>
      </div>

      <Link
        href="/skillsheets"
        className="block mt-6 text-blue-600 underline hover:text-blue-800"
      >
        ← 一覧に戻る
      </Link>
    </div>
  );
}
